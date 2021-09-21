import m from 'mithril'
import {PageModel} from '../models/PageModel'
import {updatePage} from '../helpers/HtmlHelper'

export const AddressView = {
  oncreate: () => {
    updatePage('', 'Adresse')
  },
  view: () => m.trust(PageModel.html)
}
