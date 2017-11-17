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

let teamItemAcc = $('.team__item')

teamItemAcc.on('click', (e) => {
  e.preventDefault()

  let elem = $(e.currentTarget)

  teamItemAcc.removeClass('team__item--active')
  elem.addClass('team__item--active')
})


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
