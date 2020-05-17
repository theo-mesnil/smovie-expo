import axios from 'axios'

import { useApiUrl } from './api'

export const useGetDiscover = () => {
  const apiUrl = useApiUrl()

  function getDiscover(callback, type, params) {
    return axios
      .get(apiUrl(`discover/${type}`, params))
      .then(response => {
        callback(response?.data?.results)
      })
      .catch()
  }

  return getDiscover
}
