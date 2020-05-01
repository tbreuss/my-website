import m from 'mithril'
import PhotoModel from '../models/PhotoModel'
import HtmlHelper from '../helpers/HtmlHelper'

// see https://stackoverflow.com/questions/2321907/how-do-you-make-images-load-only-when-they-are-in-the-viewport
const lazyload = function () {
  const elements = document.querySelectorAll('img[data-src]')
  for (let i = 0; i < elements.length; i++) {
    const boundingClientRect = elements[i].getBoundingClientRect()
    if (elements[i].hasAttribute('data-src') && boundingClientRect.top < window.innerHeight) {
      elements[i].setAttribute('src', elements[i].getAttribute('data-src'))
      elements[i].removeAttribute('data-src')
    }
  }
}

window.addEventListener('scroll', lazyload)
window.addEventListener('load', lazyload)
window.addEventListener('resize', lazyload)

export default {
  oncreate: () => {
    HtmlHelper.setActiveMenuItem()
    HtmlHelper.setPageTitle('Unterwegs')
    HtmlHelper.scrollTop()
    lazyload()
  },
  onupdate: () => lazyload,
  view: () => m('.photos', [
    m('h2', 'Unterwegs'),
    PhotoModel.list.map(function (photo) {
      return m('.img', [
        m('img', {
          'data-src': '/assets/media/thumbs/' + photo.id + '.' + photo.extension,
          class: 'lazy'
        }, photo.id),
        m('caption', photo.date + ' – ' + photo.name)
      ])
    })])
}
