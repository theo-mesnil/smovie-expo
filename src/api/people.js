import axios from 'axios'

import { getApiUrl } from './api'

export const getPeopleDetail = (callback, id) =>
  axios
    .get(getApiUrl(`person/${id}`))
    .then(response => {
      callback(response.data)
    })
    .catch()
