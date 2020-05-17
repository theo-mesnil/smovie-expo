import axios from 'axios'

import { useApiUrl } from './api'

export const useGetSearch = () => {
  const apiUrl = useApiUrl()

  function getSearch(callback, type = 'multi', params) {
    return axios
      .get(apiUrl(`search/${type}`, params))
      .then(response => {
        callback(response?.data?.results)
      })
      .catch()
  }

  return getSearch
}
