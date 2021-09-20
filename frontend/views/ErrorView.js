import m from 'mithril'
import {updatePage} from '../helpers/HtmlHelper'
import {lastError} from '../api'

export const ErrorView = {
  oninit: () => {
    updatePage('', 'Fehler')
    if (lastError.code === '') {
      m.route.set('/')
    }
  },
  view: () => m('div',
    m('p.lead', 'Grmpf?!'),
    m('p', [
      'Es ist ein Serverfehler ',
      lastError.code,
      ' aufgetreten.'
    ]),
    m('p', 'Was kannst du tun?'),
    m('ul[style=margin-top:0]',
      m('li', 'Auf bessere Zeiten warten'),
      m('li', 'Nochmal versuchen'),
      m('li', 'Einen Kaffee trinken ;-)'),
    )
  )
}
