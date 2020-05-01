import m from 'mithril'

const ArticleModel = {
  list: [],
  loadList: () => m.request({
    method: 'GET',
    url: '/api/article',
    withCredentials: true,
  })
    .then(function (result) {
      ArticleModel.list = result
    })
  ,
  current: {},
  load: (slug) => m.request({
    method: 'GET',
    url: '/api/article/' + slug,
    withCredentials: true,
  })
    .then(function (result) {
      ArticleModel.current = result
    })
}

export default ArticleModel
