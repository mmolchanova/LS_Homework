let burgerBtn = document.querySelector('.header__burger-btn')
let burgerBtnLines = document.querySelector('.burger-btn__lines')
let burgerBtnClose = document.querySelector('.burger-btn__close-lines')
let fullscreenNav = document.querySelector('.fullscreen-nav')
// console.log(burgerBtn)
// console.log(burgerBtnLines)
// console.log(burgerBtnClose)
// console.log(fullscreenNav)

burgerBtn.addEventListener('click', function showMenu () {
  burgerBtnLines.classList.toggle('visually-hidden')
  burgerBtnClose.classList.toggle('visually-hidden')

// console.log(burgerBtnLines)
// console.log(burgerBtnClose)

  let menuDisplay = getComputedStyle(fullscreenNav).display
  if (menuDisplay === 'none') {
    fullscreenNav.style.display = 'block'
  }
  else {
    fullscreenNav.style.display = 'none'
  }
})
