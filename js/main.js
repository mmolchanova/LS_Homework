// Для полноэкранного меню
let burgerBtn = document.querySelector('.header__burger-btn')
let burgerBtnBlock = document.querySelector('.burger-block')
let burgerBtnClose = document.querySelector('.close-lines')
let fullscreenNav = document.querySelector('.fullscreen-nav')

burgerBtn.addEventListener('click', function showMenu () {
  burgerBtnBlock.classList.toggle('visually-hidden')
  burgerBtnClose.classList.toggle('visually-hidden')

  let menuDisplay = getComputedStyle(fullscreenNav).display
  if (menuDisplay === 'none') {
    fullscreenNav.style.display = 'block'
  }
  else {
    fullscreenNav.style.display = 'none'
  }
})


// Для секции "команда"
let teamItemAcc = $('.team__item')

teamItemAcc.on('click', (e) => {
  e.preventDefault()

  let elem = $(e.currentTarget)

  teamItemAcc.removeClass('team__item--active')
  elem.addClass('team__item--active')
})

// Для секции "меню"
let menuItemAcc = $('.menu__item')

menuItemAcc.on('click', (e) => {
  e.preventDefault()

  let elem = $(e.currentTarget)

  if (elem.hasClass('menu__item--active')) {
    elem.removeClass('menu__item--active')
  }
  else {
    menuItemAcc.removeClass('menu__item--active')
    elem.addClass('menu__item--active')
  }
})

// Для секции "карта"
  // Подключение карты
ymaps.ready(init);
let myMap;

function init() {
  myMap = new ymaps.Map("map", {
      center: [59.91817154482064,30.30557799999997],
      zoom: 11,
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
