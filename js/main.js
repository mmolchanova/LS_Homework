//OPS
$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    menu: '#menu',
    responsiveWidth: 769,
    verticalCentered:false
  });
  $(document).on('click', '#moveToGeneral', function(){
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo1', function(){
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo2', function(){
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo3', function(){
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo4', function(){
    $.fn.fullpage.moveTo('page7');
  });
  $(document).on('click', '#moveTo5', function(){
    $.fn.fullpage.moveTo('page7');
  });
})

// Для полноэкранного меню
$(function() {
  let hamburgerBtn = $('.hamburger')
  let hamburgerBtnBlock = $('.hamburger-block')
  let hamburgerBtnClose = $('.hamburger__close-lines')
  let fullscreenNav = $('.header__nav')
  let sectionHeight = $('.section').css('height')
  function disable() {
        fullscreenNav.animate({height:0, opacity:0}, 400, function() {$(this).removeClass('header__nav--active')})
        hamburgerBtnBlock.removeClass('visually-hidden')
        hamburgerBtnClose.addClass('visually-hidden')
        $('body').removeClass('ov-hidden')
     }

  hamburgerBtn.on('click', (e) => {
    if (!fullscreenNav.hasClass('header__nav--active')) {
      fullscreenNav.addClass('header__nav--active')
      fullscreenNav.animate({height:sectionHeight, opacity:1}, 200)
      hamburgerBtnBlock.addClass('visually-hidden')
      hamburgerBtnClose.removeClass('visually-hidden')
      $('body').addClass('ov-hidden')

      // $(document).on('wheel', (e) => {
      //   e.preventDefault()
      //     console.log('wheeeel')
      // })

    } else {
      disable()
    }
    $('.nav__item').on('click', (e) => {
      disable()
    })
  })
})

// Для секции "Бургер"
  //Состав
$(function() {
  let composition = $('.burgers__composition')

  $('.burgers__container').on('click', (e) => {

    let elem = $(e.target).closest(composition)
    if (elem.length) {
      elem.toggleClass('burgers__composition--active')
    } else {
      composition.removeClass('burgers__composition--active')
    }
  })

})

  //Слайдер секции
$(function(){

  let moveSlide = function (container, itemNum) {
    let
        items = container.find('.burgers__content'),
        activeItem = items.filter('.burgers__content--active'),
        reqItem = items.eq(itemNum),
        reqIndex = reqItem.index(),
        list = container.find('.burgers__list'),
        duration = 500

    if (reqItem.length) {
      list.animate({
        'left' : -reqIndex * 100 + '%'
      }, duration, function () {
        activeItem.removeClass('burgers__content--active');
        reqItem.addClass('burgers__content--active');
      })
    }
  }

  $('.slider-arrow__btn').on('click', (e) => {
    e.preventDefault();

    let $this = $(e.currentTarget),
        container = $this.closest('.burgers'),
        items = container.find('.burgers__content'),
        activeItem = items.filter('.burgers__content--active'),
        existedItem, edgeItem, reqItem;

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
  })

})

// Для секции "команда"
$(function() {
  let teamItemAcc = $('.team__item')

  teamItemAcc.on('click', (e) => {
    e.preventDefault()

    let elem = $(e.currentTarget)

    if (elem.hasClass('team__item--active')) {
      elem.removeClass('team__item--active')
    }
    else {
      teamItemAcc.removeClass('team__item--active')
      elem.addClass('team__item--active')
    }
  })
})

// Для секции "меню"
$(function() {
  let menuItemAcc = $('.menu__item')
  let menuClose = $('.menu-content__close')

  $('.menu').on('click', (e) => {
    e.preventDefault()
    $('.hamburger').fadeToggle(300)
    let elem = $(e.target).closest(menuItemAcc)

    if (elem.length) {
      elem.siblings().removeClass('menu__item--active')
      elem.toggleClass('menu__item--active')
    } else {
      menuItemAcc.removeClass('menu__item--active')
    }

  })

  menuClose.on('click', (e) => {
    let elem = $(e.currentTarget)

    if (elem.hasClass('menu__item--active')) {
      elem.removeClass('menu__item--active')
    }
  })

})

//FancyBox
$(function() { 
  $("a.gallery, a.iframe").fancybox(); 
  $("a.modalbox").fancybox( 
  {   
    "frameWidth" : 400,   
    "frameHeight" : 400   
  }); 
  $("a.gallery2").fancybox( 
  {   
    "padding" : 20, // отступ контента от краев окна 
    "imageScale" : false, // Принимает значение true - контент(изображения) масштабируется по размеру окна, или false - окно вытягивается по размеру контента. По умолчанию - TRUE 
    "zoomOpacity" : false, // изменение прозрачности контента во время анимации (по умолчанию false) 
    "zoomSpeedIn" : 1000, // скорость анимации в мс при увеличении фото (по умолчанию 0) 
    "zoomSpeedOut" : 1000, // скорость анимации в мс при уменьшении фото (по умолчанию 0) 
    "zoomSpeedChange" : 1000, // скорость анимации в мс при смене фото (по умолчанию 0) 
    "frameWidth" : 700, // ширина окна, px (425px - по умолчанию) 
    "frameHeight" : 600, // высота окна, px(355px - по умолчанию) 
    "overlayShow" : true, // если true затеняят страницу под всплывающим окном. (по умолчанию true). Цвет задается в jquery.fancybox.css - div#fancy_overlay   
    "overlayOpacity" : 0.8, // Прозрачность затенения (0.3 по умолчанию) 
    "hideOnContentClick" :false, // Если TRUE закрывает окно по клику по любой его точке (кроме элементов навигации). Поумолчанию TRUE   
    "centerOnScroll" : false // Если TRUE окно центрируется на экране, когда пользователь прокручивает страницу   
  });   
  $("#menu a, .anim").hover( function() { 
  $(this).animate({"paddingLeft" : "10px"}, 300)}, 
  function() {$(this).animate({
    "paddingLeft" : "0"}, 300); 
  }); 
  $("a.iframe").fancybox( 
  {   
    "frameWidth" : 800, // ширина окна, px (425px - по умолчанию) 
    "frameHeight" : 600 // высота окна, px(355px - по умолчанию)   
  }); 
}); 

// Для секции "Комментарии"
$(function() {
  let comment = $('.comments__img')

  comment.hover(function(e) {
    let elem = $(e.target).closest(comment)
      elem.toggleClass('comments__img--active')
  })

  comment.on('click', (e) => {
    let elem = $(e.target).closest(comment)
    if (elem.length) {
      comment.removeClass('comments__img--active')
      elem.toggleClass('comments__img--active')
    }
  })

})

// Для секции "карта"
$(function() {
    // Подключение карты
  ymaps.ready(init);
  let myMap;
  let mapZoom;

  if (document.documentElement.clientWidth > 768) {
    mapZoom = 11
  }
  else {
    mapZoom = 10
  }

  function init() {
    myMap = new ymaps.Map("map", {
        center: [59.91817154482064,30.30557799999997],
        zoom: mapZoom,
        controls: [],
        behaviors: ['ruler', 'scrollZoom'],
    });
    myMap.behaviors.disable('ruler');
    myMap.behaviors.disable('scrollZoom');

    // Коллекция меток
    let coords = [
        [59.94554327989287,30.38935262114668],
        [59.91142323563909,30.50024587065841],
        [59.88693161784606,30.319658102103713],
        [59.97033574821672,30.315194906302924]
    ],
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
})

