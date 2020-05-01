import {api} from '../api'

export const PhotoModel = {
  list: [],
  loadList: () => api.get('photo')
    .then((result) => PhotoModel.list = result)
  ,
  latest: {},
  loadLatest: () => api.get('photo/latest')
    .then((result) => PhotoModel.latest = result)
}
