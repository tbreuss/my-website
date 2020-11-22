import m from 'mithril'
import {updatePage} from '../helpers/HtmlHelper'

export const NotFoundView = {
  oncreate: () => {
    updatePage('', 'Seite nicht gefunden')
  },
  view: () => m('div',
    m('p.lead', 'Uups?!'),
    m('p', 'Die aufgerufene Seite gibt es nicht mehr oder hat es nie gegeben.'),
    m('p', 'Was kannst du tun?'),
    m('ul[style=margin-top:0]',
      m('li', 'Nutze die Zurück-Taste des Browsers'),
      m('li',
        'Navigiere zurück zur ',
        m(m.route.Link, {href: '/'}, 'Startseite')
      )
    )
  )
}
