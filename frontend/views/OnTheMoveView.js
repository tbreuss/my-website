import m from 'mithril'
import {PhotoModel} from '../models/PhotoModel'
import {lazyLoadImages, updatePage} from '../helpers/HtmlHelper'

window.addEventListener('scroll', lazyLoadImages)
window.addEventListener('load', lazyLoadImages)
window.addEventListener('resize', lazyLoadImages)

export const OnTheMoveView = {
  oninit: () => {
    PhotoModel.loadList()
    updatePage('erlebnisse', 'Erlebnisse')
  },
  oncreate: () => {
    lazyLoadImages()
  },
  onupdate: () => {
    lazyLoadImages()
  },
  view: () => m('.photos',
    m('h2', 'Erlebnisse'),
    PhotoModel.list.map((photo) => m('.img',
      m('img', {
        'data-src': '/assets/media/thumbs/' + photo.id + '.' + photo.extension,
        class: 'lazy'
      }, photo.id),
      m('caption', photo.date + ' – ' + photo.name)
      )
    )
  )
}
