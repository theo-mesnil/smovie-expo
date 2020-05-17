import axios from 'axios'

import { useApiUrl } from './api'

export const useGetGenres = () => {
  const apiUrl = useApiUrl()

  function getGenres(callback, type = 'movie') {
    return axios
      .get(apiUrl(`genre/${type}/list`))
      .then(response => {
        callback(response.data)
      })
      .catch()
  }

  return getGenres
}
