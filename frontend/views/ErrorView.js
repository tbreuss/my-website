import m from 'mithril'
import {activateMenuItem, scrollToTop, updatePageTitle} from '../helpers/HtmlHelper'
import {lastError} from '../api';

export const ErrorView = {
  oncreate: () => {
    activateMenuItem()
    updatePageTitle('Fehler')
    scrollToTop()
  },
  view: () => m('div', [
    m('p.lead', 'Uups?!'),
    m('p', 'Es ist ein Serverfehler (' + lastError.code + ' ' + lastError.response + ') aufgetreten.'),
    m('p', 'Was kannst du tun?'),
    m('ul[style=margin-top:0]', [
      m('li', 'Auf bessere Zeiten warten'),
      m('li', 'Einen Kaffee trinken ;-)')
    ])
  ])
}
