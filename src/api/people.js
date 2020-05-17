import axios from 'axios'

import { useApiUrl } from './api'

export const useGetPeopleDetail = () => {
  const apiUrl = useApiUrl()

  function getPeopleDetail(callback, id, url = '') {
    return axios
      .get(apiUrl(`person/${id}${url}`))
      .then(response => {
        callback(response.data)
      })
      .catch()
  }

  return getPeopleDetail
}

export const useGetPeoplePopular = () => {
  const apiUrl = useApiUrl()

  function getTrending(callback) {
    return axios
      .get(apiUrl(`person/popular`))
      .then(response => {
        callback(response.data)
      })
      .catch()
  }

  return getTrending
}
