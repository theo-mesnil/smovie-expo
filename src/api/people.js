import axios from 'axios'

import { getApiUrl } from './api'

export const getPeopleDetail = (callback, id, url = '') =>
  axios
    .get(getApiUrl(`person/${id}${url}`))
    .then(response => {
      callback(response.data)
    })
    .catch()

export const getPeoplePopular = callback =>
  axios
    .get(getApiUrl(`person/popular`))
    .then(response => {
      callback(response.data)
    })
    .catch()
