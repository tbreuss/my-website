import m from 'mithril'

const PageModel = {
  html: '',
  load: (id) => m.request({
    method: 'GET',
    url: '/api/page/' + id
  })
    .then((result) => PageModel.html = result.content)
}

export default PageModel
