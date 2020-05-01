import m from 'mithril'
import {PhotoModel} from '../models/PhotoModel'
import {lazyload, scrollTop, setActiveMenuItem, setPageTitle} from '../helpers/HtmlHelper'

window.addEventListener('scroll', lazyload)
window.addEventListener('load', lazyload)
window.addEventListener('resize', lazyload)

export const OnTheMoveView = {
  oncreate: () => {
    setActiveMenuItem()
    setPageTitle('Unterwegs')
    scrollTop()
    lazyload()
  },
  onupdate: () => lazyload,
  view: () => m('.photos', [
    m('h2', 'Unterwegs'),
    PhotoModel.list.map((photo) => m('.img', [
        m('img', {
          'data-src': '/assets/media/thumbs/' + photo.id + '.' + photo.extension,
          class: 'lazy'
        }, photo.id),
        m('caption', photo.date + ' – ' + photo.name)
      ])
    )])
}
