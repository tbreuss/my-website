import m from 'mithril'
import ArticleModel from '../models/ArticleModel'
import PageModel from '../models/PageModel'
import PhotoModel from '../models/PhotoModel'
import HtmlHelper from '../helpers/HtmlHelper'

const Article = {
  view: ({attrs: {article}}) => [
    m('p.lead', 'Letzter Artikel'),
    m('p', {style: {marginTop: '0.85rem'}}, [
      m(m.route.Link, {href: '/artikel/' + article.slug}, article.title),
      m('br'),
      article.abstract
    ])
  ]
}

const photo = {
  view: ({attrs: {photo}}) => [
    m('p.lead', 'Zuletzt unterwegs'),
    m('.img', {style: {marginTop: '0.85rem'}}, [
      m('img', {
        alt: photo.name,
        src: '/assets/media/thumbs/' + photo.id + '.' + photo.extension,
        style: {
          maxWidth: '100%'
        }
      }),
      m('caption', photo.date + ' – ' + photo.name)
    ])
  ]
}

export default {
  oncreate: () => {
    HtmlHelper.setActiveMenuItem('home')
    HtmlHelper.setPageTitle()
    HtmlHelper.scrollTop()
  },
  view: () => [
    m.trust(PageModel.html),
    m(photo, {photo: PhotoModel.latest}),
    m(Article, {article: ArticleModel.list[0]})
  ]
}
