import m from 'mithril'
import PageModel from '../models/PageModel'
import HtmlHelper from '../helpers/HtmlHelper'

export default {
  oncreate: () => {
    HtmlHelper.setActiveMenuItem()
    HtmlHelper.setPageTitle('Adresse')
    HtmlHelper.scrollTop()
  },
  view: () => m.trust(PageModel.html)
}
