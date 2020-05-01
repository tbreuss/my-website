import m from 'mithril'
import {ArticleModel} from '../models/ArticleModel'
import {updatePage} from '../helpers/HtmlHelper'

export const ArticleListView = {
  oncreate: () => {
    updatePage('artikel', 'Artikel')
  },
  view: () => m('.articles', [
    m('h2', 'Artikel'),
    m('ul', [
      ArticleModel.list.map((article) => m('li', m('p', [
          m(m.route.Link, {href: '/artikel/' + article.slug}, article.title),
          m('br'),
          article.abstract
        ]))
      )])
  ])
}
