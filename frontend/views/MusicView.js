import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {scrollToTop, activateMenuItem, updatePageTitle} from '../helpers/HtmlHelper'

export const MusicView = {
  oncreate: () => {
    activateMenuItem()
    updatePageTitle('Musik')
    scrollToTop()
  },
  view: () => m.trust(PageModel.html)
}
