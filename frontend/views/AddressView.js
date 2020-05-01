import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {activateMenuItem, scrollToTop, updatePageTitle} from '../helpers/HtmlHelper'

export const AddressView = {
  oncreate: () => {
    activateMenuItem()
    updatePageTitle('Adresse')
    scrollToTop()
  },
  view: () => m.trust(PageModel.html)
}
