import m from 'mithril'

const lastError = {
  code: '',
  response: '',
}

const handlers = {
  404: err => {
    lastError.code = err.code
    lastError.response = err.response
    m.route.set('/fehler')
  },
  500: err => {
    lastError.code = err.code
    lastError.response = err.response
    m.route.set('/fehler')
  }
}

const request = (options = {}) => {
  lastError.code = ''
  lastError.response = ''
  return m.request(options)
    .catch(err => {
      if (err.code in handlers) handlers[err.code](err)
      else throw err
    })
}

export const api = {
  path: '/api',
  lastError: lastError,
  getArticles(background = false) {
    return request({ url: `${api.path}/articles`, background: background })
  },
  getLatestArticle(background = false) {
    return request({ url: `${api.path}/articles/latest`, background: background })
  },
  getArticle(slug) {
    return request({ url: `${api.path}/articles/${slug}` })
  },
  getPage(slug, background = false) {
    return request({ url: `${api.path}/pages/${slug}`, background: background })
  },
  getPhotos() {
    return request({ url: `${api.path}/photos` })
  },
  getLatestPhotos(background = false) {
    return request({ url: `${api.path}/photos/latest`, background: background })
  }
}
