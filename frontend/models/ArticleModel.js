import m from 'mithril'

export const ArticleModel = {
  list: [],
  loadList: () => m.request({
    method: 'GET',
    url: '/api/article',
    withCredentials: true,
  })
    .then((result) => ArticleModel.list = result)
  ,
  current: {},
  load: (slug) => m.request({
    method: 'GET',
    url: '/api/article/' + slug,
    withCredentials: true,
  })
    .then((result) => ArticleModel.current = result)
}
