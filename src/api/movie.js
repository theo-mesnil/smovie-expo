import axios from 'axios'

import { useApiUrl } from './api'

export const useGetMovieDetail = () => {
  const apiUrl = useApiUrl()

  function getMovieDetail(callback, id, url) {
    return axios
      .get(apiUrl(`movie/${id}${url}`))
      .then(response => {
        callback(response.data)
      })
      .catch()
  }

  return getMovieDetail
}
