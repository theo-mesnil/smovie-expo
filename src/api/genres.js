import axios from 'axios'

import { getApiUrl } from './api'

export const getGenres = (callback, type = 'movie') =>
  axios
    .get(getApiUrl(`genre/${type}/list`))
    .then(response => {
      callback(response.data)
    })
    .catch()
