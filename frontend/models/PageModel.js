import m from 'mithril'

export const PageModel = {
  html: '',
  load: (id) => m.request({
    method: 'GET',
    url: '/api/page/' + id
  })
    .then((result) => PageModel.html = result.content)
}
