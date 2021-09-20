import m from 'mithril'
import {ArticleModel} from '../models/ArticleModel'
import {PageModel} from '../models/PageModel'
import {PhotoModel} from '../models/PhotoModel'
import {updatePage} from '../helpers/HtmlHelper'

const LatestArticle = {
  view: ({attrs: {article}}) => [
    m('p.lead', 'Letzter Artikel'),
    m('p', {style: {marginTop: '0.85rem'}},
      m(m.route.Link, {href: '/artikel/' + article.slug}, article.title),
      m('br'),
      article.abstract
    )
  ]
}

const LatestPhoto = {
  view: ({attrs: {photo}}) => [
    m('p.lead', 'Zuletzt erlebt'),
    m('.img', {style: {marginTop: '0.85rem'}},
      m('img', {
        alt: photo.name,
        src: '/assets/media/thumbs/' + photo.id + '.' + photo.extension,
        style: {
          maxWidth: '100%'
        }
      }),
      m('caption', photo.date + ' – ' + photo.name)
    )
  ]
}

export const HomeView = {
  oninit: () => {
    Promise.all([
      PageModel.load('home'),
      ArticleModel.loadList(),
      PhotoModel.loadLatest()
    ])
    updatePage('home', '')
  },
  view: () => [
    m.trust(PageModel.html),
    PhotoModel.latest ? m(LatestPhoto, {photo: PhotoModel.latest}) : '',
    ArticleModel.list[0] ? m(LatestArticle, {article: ArticleModel.list[0]}) : ''
  ]
}
