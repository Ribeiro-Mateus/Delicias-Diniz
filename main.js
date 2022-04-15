/* abre e fecha o menu quando clicar no ícone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/***** BACK TO TOP *******/
const backToTopButton = document.querySelector('back-to-top')
function backToTop() {
  if (window.scrollY >= 530) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/****** WHEN SCROLL ****** */
window.addEventListener('scroll', function () {
  backToTop()
})
