import {api} from '../api'

export const PageModel = {
  html: '',
  load: (id) => api.get('page/' + id)
    .then((result) => PageModel.html = result.content)
}
