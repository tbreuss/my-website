import m from 'mithril'
import PageModel from '../models/PageModel'
import HtmlHelper from '../helpers/HtmlHelper'

export default {
  oncreate:() => {
    HtmlHelper.setActiveMenuItem('portfolio')
    HtmlHelper.setPageTitle('Portfolio')
    HtmlHelper.scrollTop()
  },
  view: () => m.trust(PageModel.html)
}
