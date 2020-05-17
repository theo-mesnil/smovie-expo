import axios from 'axios'

import { useApiUrl } from './api'

export const useGetShowDetail = () => {
  const apiUrl = useApiUrl()

  function getShowDetail(callback, id, url) {
    return axios
      .get(apiUrl(`tv/${id}${url}`))
      .then(response => {
        callback(response.data)
      })
      .catch()
  }

  return getShowDetail
}

export const useGetSeasonDetail = () => {
  const apiUrl = useApiUrl()

  function getSeasonDetail(callback, showId, seasonNumber) {
    return axios
      .get(apiUrl(`tv/${showId}/season/${seasonNumber}`))
      .then(response => {
        callback(response.data)
      })
      .catch()
  }

  return getSeasonDetail
}
