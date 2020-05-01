import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {scrollTop, setActiveMenuItem, setPageTitle} from '../helpers/HtmlHelper'

export const PortfolioView = {
  oncreate: () => {
    setActiveMenuItem('portfolio')
    setPageTitle('Portfolio')
    scrollTop()
  },
  view: () => m.trust(PageModel.html)
}
