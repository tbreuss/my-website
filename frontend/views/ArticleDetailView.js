import m from 'mithril'
import {ArticleModel} from '../models/ArticleModel'
import {scrollToTop, activateMenuItem, updatePageTitle} from '../helpers/HtmlHelper'

let article = null

export const ArticleDetailView = {
  oninit: () => article = ArticleModel.current,
  oncreate: () => {
    activateMenuItem('artikel')
    updatePageTitle(ArticleModel.current.title + ' // Artikel')
    scrollToTop()
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
