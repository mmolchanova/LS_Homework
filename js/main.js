'use strict';

//OPS
$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    menu: '#menu',
    responsiveWidth: 769,
    verticalCentered: false
  });
  $(document).on('click', '#moveToGeneral', function () {
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo1', function () {
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo2', function () {
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo3', function () {
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo4', function () {
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo5', function () {
    $.fn.fullpage.moveTo('page7');
  });
});

// Для полноэкранного меню
$(function () {
  var hamburgerBtn = $('.hamburger');
  var hamburgerBtnBlock = $('.hamburger-block');
  var hamburgerBtnClose = $('.hamburger__close-lines');
  var fullscreenNav = $('.header__nav');
  var sectionHeight = $('.section').css('height');
  function disable() {
    fullscreenNav.animate({ opacity: 0 }, 200, function () {
      $(this).css('height', 0).removeClass('header__nav--active');
    });
    hamburgerBtnBlock.removeClass('visually-hidden');
    hamburgerBtnClose.addClass('visually-hidden');
    $('body').removeClass('ov-hidden');
  }

  hamburgerBtn.on('click', function (e) {
    if (!fullscreenNav.hasClass('header__nav--active')) {
      fullscreenNav.addClass('header__nav--active');
      fullscreenNav.css('height', sectionHeight);
      fullscreenNav.animate({ opacity: 1 }, 100);
      hamburgerBtnBlock.addClass('visually-hidden');
      hamburgerBtnClose.removeClass('visually-hidden');
      $('body').addClass('ov-hidden');

      // $(document).on('wheel', (e) => {
      //   e.preventDefault()
      //     console.log('wheeeel')
      // })
    } else {
      disable();
    }
    $('.nav__item').on('click', function (e) {
      disable();
    });
  });
});

// Для секции "Бургер"
//Состав
$(function () {
  var composition = $('.burgers__composition');

  $('.burgers__container').on('click', function (e) {

    var elem = $(e.target).closest(composition);
    if (elem.length) {
      elem.toggleClass('burgers__composition--active');
    } else {
      composition.removeClass('burgers__composition--active');
    }
  });
});

//Слайдер секции
$(function () {

  var moveSlide = function moveSlide(container, itemNum) {
    var items = container.find('.burgers__content'),
        activeItem = items.filter('.burgers__content--active'),
        reqItem = items.eq(itemNum),
        reqIndex = reqItem.index(),
        list = container.find('.burgers__list'),
        duration = 500;

    if (reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + '%'
      }, duration, function () {
        activeItem.removeClass('burgers__content--active');
        reqItem.addClass('burgers__content--active');
      });
    }
  };

  $('.slider-arrow__btn').on('click', function (e) {
    e.preventDefault();

    var $this = $(e.currentTarget),
        container = $this.closest('.burgers'),
        items = container.find('.burgers__content'),
        activeItem = items.filter('.burgers__content--active'),
        existedItem = void 0,
        edgeItem = void 0,
        reqItem = void 0;

    if ($this.hasClass('slider-arrow__btn--next')) {
      existedItem = activeItem.next();
      edgeItem = items.first();
    }
    if ($this.hasClass('slider-arrow__btn--prev')) {
      existedItem = activeItem.prev();
      edgeItem = items.last();
    }

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
    moveSlide(container, reqItem);
  });
});

// Для секции "команда"
$(function () {
  var teamItemAcc = $('.team__item');

  teamItemAcc.on('click', function (e) {
    e.preventDefault();

    var elem = $(e.currentTarget);

    if (elem.hasClass('team__item--active')) {
      elem.removeClass('team__item--active');
    } else {
      teamItemAcc.removeClass('team__item--active');
      elem.addClass('team__item--active');
    }
  });
});

// Для секции "меню"
$(function () {
  var menuItemAcc = $('.menu__item');
  var menuClose = $('.menu-content__close');

  $('.menu').on('click', function (e) {
    e.preventDefault();

    if (document.documentElement.clientWidth < 481) {
      $('.hamburger').fadeToggle(300);
    }

    var elem = $(e.target).closest(menuItemAcc);

    if (elem.length) {

      elem.siblings().removeClass('menu__item--active');
      elem.toggleClass('menu__item--active');
    } else {
      menuItemAcc.removeClass('menu__item--active');
    }
  });

  menuClose.on('click', function (e) {
    var elem = $(e.currentTarget);

    if (elem.hasClass('menu__item--active')) {
      elem.removeClass('menu__item--active');
    }
  });
});

// Для секции "Комментарии"
$(function () {
  var comment = $('.comments__img');

  comment.hover(function (e) {
    var elem = $(e.target).closest(comment);
    elem.toggleClass('comments__img--active');
  });

  comment.on('click', function (e) {
    var elem = $(e.target).closest(comment);
    if (elem.length) {
      comment.removeClass('comments__img--active');
      elem.toggleClass('comments__img--active');
    }
  });
  $("a.gallery2").fancybox(); //FancyBox
});

// Для секции "карта"
$(function () {
  // Подключение карты
  ymaps.ready(init);
  var myMap = void 0;
  var mapZoom = void 0;

  if (document.documentElement.clientWidth > 768) {
    mapZoom = 11;
  } else {
    mapZoom = 10;
  }

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.91817154482064, 30.30557799999997],
      zoom: mapZoom,
      controls: [],
      behaviors: ['ruler', 'scrollZoom']
    });
    myMap.behaviors.disable('ruler');
    myMap.behaviors.disable('scrollZoom');

    // Коллекция меток
    var coords = [[59.94554327989287, 30.38935262114668], [59.91142323563909, 30.50024587065841], [59.88693161784606, 30.319658102103713], [59.97033574821672, 30.315194906302924]],
        myCollection = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/content/map-marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-26, -52]
    });

    for (var i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);
  }
});

//Для секции "Заказ"
$(function () {
  var submitForm = function submitForm(e) {
    e.preventDefault();

    var form = $(e.target),
        data = form.serialize(),
        url = form.attr('action');

    var request = $.ajax({
      url: url,
      type: 'POST',
      data: data,
      dataType: 'JSON'
    });

    request.done(function (msg) {
      var mes = msg.mes,
          status = msg.status;

      if (status === 'ОК') {
        $.fancybox.open({src :'<p class="gallery2">' + mes + '</p>', type: 'html'});
      } else {
        $.fancybox.open({src: '<p class="gallery2 error">' + mes + '</p>', type: 'html'});
      }
    });

    request.fail(function (jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
    });
  };

  $('#order-form').on('submit', submitForm);
});