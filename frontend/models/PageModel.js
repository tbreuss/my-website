import {api} from '../api'

export const PageModel = {
  html: '',
  load: (slug, background = false) => {
    return api.getPage(slug, background).then((result) => {
      PageModel.html = result.content
    })
  }

}
