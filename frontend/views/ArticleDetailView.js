import m from 'mithril'
import {ArticleModel} from '../models/ArticleModel'
import {scrollTop, setActiveMenuItem, setPageTitle} from '../helpers/HtmlHelper'

let article = null

export const ArticleDetailView = {
  oninit: () => article = ArticleModel.current,
  oncreate: () => {
    setActiveMenuItem('artikel')
    setPageTitle(ArticleModel.current.title + ' // Artikel')
    scrollTop()
  },
  view: () => (article)
    ? m('.articles', [
      m('h2', article.title),
      m('div', [
        article.updated_at ? 'Letzte Änderung: ' : 'Erstellt am: ',
        article.updated_at ? article.updated_at : article.created_at,
        ' • ',
        'Lesezeit: ',
        article.reading_time,
        ' Minuten'
      ]),
      m('div', m.trust(article.content)),
      m('p', [
        m(m.route.Link, {href: '/artikel'}, 'Alle Artikel anzeigen'),
      ])
    ])
    : m('h2', 'Artikel nicht gefunden')
}
