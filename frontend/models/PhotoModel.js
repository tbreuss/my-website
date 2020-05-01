import m from 'mithril'

const PhotoModel = {
  list: [],
  loadList: () => m.request({
    method: 'GET',
    url: '/api/photo',
    withCredentials: true,
  })
    .then((result) => PhotoModel.list = result)
  ,
  latest: {},
  loadLatest: () => m.request({
    method: 'GET',
    url: '/api/photo/latest',
    withCredentials: true,
  })
    .then((result) => PhotoModel.latest = result)
}

export default PhotoModel
