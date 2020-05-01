import m from 'mithril'

const PageModel = {
  html: '',
  load: function (id) {
    return m.request({
      method: 'GET',
      url: '/api/page/' + id
    })
      .then(function (result) {
        PageModel.html = result.content
      })
  }
}

export default PageModel
