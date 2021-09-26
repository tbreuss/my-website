import {api} from '../api'

export const ArticleModel = {
  list: [],
  loadList: (background = false) => {
    return api.getArticles(background)
      .then((result) => {
        ArticleModel.list = result
      })
  },
  current: {},
  load: (slug) => {
    return api.getArticle(slug)
      .then((result) => {
        ArticleModel.current = result
      })
  },
  latest: {},
  loadLatest: (background = false) => {
    return api.getLatestArticle(background)
      .then((result) => {
        ArticleModel.latest = result
      })
  }
}
