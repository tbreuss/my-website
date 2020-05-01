import {api} from '../api'

export const ArticleModel = {
  list: [],
  loadList: () => api.get('article')
    .then((result) => ArticleModel.list = result)
  ,
  current: {},
  load: (slug) => api.get('article/' + slug)
    .then((result) => ArticleModel.current = result)
}
