import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {updatePage} from '../helpers/HtmlHelper'

export const MusicView = {
  oninit: () => {
    PageModel.load('musik')
    updatePage('', 'Musik')
  },
  view: () => m.trust(PageModel.html)
}
