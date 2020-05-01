import m from 'mithril'
import ArticleModel from '../models/ArticleModel'
import HtmlHelper from '../helpers/HtmlHelper'

export default {
  oncreate: () => {
    HtmlHelper.setActiveMenuItem('artikel')
    HtmlHelper.setPageTitle('Artikel')
    HtmlHelper.scrollTop()
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
