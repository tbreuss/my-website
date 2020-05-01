export const PAGE_TITLE = 'Thomas Breuss'

export const setActiveMenuItem = (name = '') => {
  const els = document.querySelectorAll('.site-navigation a')
  els.forEach((el) => {
    el.classList.remove('active')
  })

  if (name === '') {
    return
  }
  const selector = '.site-navigation__' + name + ' a'
  const el = document.querySelector(selector)
  if (el) {
    el.classList.add('active')
  }
}

export const setPageTitle = (title = '') => {
  if (title === '') {
    document.title = PAGE_TITLE
  } else {
    document.title = title + ' // ' + PAGE_TITLE
  }
}

export const scrollTop = () => {
  window.scrollTo(0, 0)
}

// see https://stackoverflow.com/questions/2321907/how-do-you-make-images-load-only-when-they-are-in-the-viewport
export const lazyload = () => {
  const elements = document.querySelectorAll('img[data-src]')
  for (let i = 0; i < elements.length; i++) {
    const boundingClientRect = elements[i].getBoundingClientRect()
    if (elements[i].hasAttribute('data-src') && boundingClientRect.top < window.innerHeight) {
      elements[i].setAttribute('src', elements[i].getAttribute('data-src'))
      elements[i].removeAttribute('data-src')
    }
  }
}
