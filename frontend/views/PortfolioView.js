import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {activateMenuItem, scrollToTop, updatePageTitle} from '../helpers/HtmlHelper'

export const PortfolioView = {
  oncreate: () => {
    activateMenuItem('portfolio')
    updatePageTitle('Portfolio')
    scrollToTop()
  },
  view: () => m.trust(PageModel.html)
}
