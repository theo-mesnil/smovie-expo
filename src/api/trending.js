import axios from 'axios'

import { useApiUrl } from './api'

export const useGetTrending = () => {
  const apiUrl = useApiUrl()

  function getTrending(callback, type = 'movie', time = 'day') {
    return axios
      .get(apiUrl(`trending/${type}/${time}`))
      .then(response => {
        callback(response.data)
      })
      .catch()
  }

  return getTrending
}
