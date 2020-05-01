const PAGE_TITLE = 'Thomas Breuss'

const HtmlHelper = {
  setActiveMenuItem: function (name = '') {
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
  },
  setPageTitle: function (title = '') {
    if (title === '') {
      document.title = PAGE_TITLE
    } else {
      document.title = title + ' // ' + PAGE_TITLE
    }
  },
  scrollTop: function () {
    window.scrollTo(0, 0)
  }
}

export default HtmlHelper
