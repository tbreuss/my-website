import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {scrollTop, setActiveMenuItem, setPageTitle} from '../helpers/HtmlHelper'

export const MusicView = {
  oncreate: () => {
    setActiveMenuItem()
    setPageTitle('Musik')
    scrollTop()
  },
  view: () => m.trust(PageModel.html)
}
