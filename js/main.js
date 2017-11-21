//OPS
$(function() {
  if (document.documentElement.clientWidth > 768) {
    $('#fullpage').fullpage();
  }
})

// Для полноэкранного меню
$(function() {
  let burgerBtn = $('.header__burger-btn')
  let burgerBtnBlock = $('.burger-block')
  let burgerBtnClose = $('.close-lines')
  let fullscreenNav = $('.fullscreen-nav')

  burgerBtn.on('click', (e) => {
    burgerBtnBlock.toggleClass('visually-hidden')
    burgerBtnClose.toggleClass('visually-hidden')

    fullscreenNav.fadeToggle(300)
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

  $(document).on('click', (e) => {
    e.preventDefault()

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

//Для секции "Бургер"
  //Состав
$(function() {
  let composition = $('.burgers__composition')

  $('.burgers__container').on('click', (e) => {

    let elem = $(e.target).closest(composition)
    if (elem.length) {
      elem.addClass('burgers__composition--active')
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

  $('.slider__section').on('click', (e) => {
    e.preventDefault();

    let $this = $(e.currentTarget),
        container = $this.closest('.burgers'),
        items = container.find('.burgers__content'),
        activeItem = items.filter('.burgers__content--active'),
        existedItem, edgeItem, reqItem;

    if ($this.hasClass('slider__section--next')) {
      existedItem = activeItem.next();
      edgeItem = items.first();
    }
    if ($this.hasClass('slider__section--prev')) {
      existedItem = activeItem.prev();
      edgeItem = items.last();
    }

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
    moveSlide(container, reqItem);
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

