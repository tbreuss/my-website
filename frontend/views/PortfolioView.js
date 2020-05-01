import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {updatePage} from '../helpers/HtmlHelper'

export const PortfolioView = {
  oncreate: () => {
    updatePage('portfolio', 'Portfolio')
  },
  view: () => m.trust(PageModel.html)
}
