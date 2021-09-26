import m from 'mithril'
import {updatePage} from '../helpers/HtmlHelper'
import {api} from '../api'

export const ErrorView = {
  oncreate: () => {
    updatePage('', 'Fehler')
  },
  view: () => m('div',
    m('h2', 'Grmpf?!'),
    m('p', [
      'Es ist ein Serverfehler ',
      api.lastError.code,
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
