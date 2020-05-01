import m from 'mithril'

export const lastError = {
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

const request = method => (url, options = {}) => {
  lastError.code = ''
  lastError.response = ''
  return m.request({
    method,
    url: '/api/' + url,
    ...options // might need Object.assign for Edge
  })
    .catch(err => {
      if (err.code in handlers) handlers[err.code](err)
      else throw err
    })
}

export const api = {
  get: request('GET'),
  put: request('PUT'),
  post: request('POST'),
  delete: request('DELETE')
}
