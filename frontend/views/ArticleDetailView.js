import m from 'mithril'
import {ArticleModel} from '../models/ArticleModel'
import {updatePage} from '../helpers/HtmlHelper'

export const ArticleDetailView = {
  oninit: () => {
    ArticleModel.load(m.route.param('slug')).then(() => {
      updatePage('artikel', ArticleModel.current.title + ' // Artikel')
    })
  },
  view: () => ArticleModel.current
    ? m('.articles',
      m('h2', ArticleModel.current.title),
      m('div',
        ArticleModel.current.updated_at ? 'Letzte Änderung: ' : 'Erstellt am: ',
        ArticleModel.current.updated_at ? ArticleModel.current.updated_at : ArticleModel.current.created_at,
        ' • ',
        'Lesezeit: ',
        ArticleModel.current.reading_time,
        ' Minuten'
      ),
      m('div', m.trust(ArticleModel.current.content)),
      m('p',
        m(m.route.Link, {href: '/artikel'}, 'Alle Artikel anzeigen'),
      )
    )
    : ''
}
