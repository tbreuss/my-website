import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {scrollTop, setActiveMenuItem, setPageTitle} from '../helpers/HtmlHelper'

export const AddressView = {
  oncreate: () => {
    setActiveMenuItem()
    setPageTitle('Adresse')
    scrollTop()
  },
  view: () => m.trust(PageModel.html)
}
