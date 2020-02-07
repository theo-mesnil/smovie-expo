import axios from 'axios'

import { getApiUrl } from './api'

export const getPeopleDetail = (callback, id, url = '') =>
  axios
    .get(getApiUrl(`person/${id}${url}`))
    .then(response => {
      callback(response.data)
    })
    .catch()
