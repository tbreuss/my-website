import {api} from '../api'

export const PhotoModel = {
  list: [],
  loadList: () => {
    return api.getPhotos()
      .then((result) => {
        PhotoModel.list = result
      })
  },
  latest: {},
  loadLatest: (background = false) => {
    return api.getLatestPhotos(background)
      .then((result) => {
        PhotoModel.latest = result
      })
  }
}
