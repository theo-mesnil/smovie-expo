import axios from 'axios'

import { getApiUrl } from './api'

export const getMovieDetail = (callback, id) =>
  axios
    .get(getApiUrl(`movie/${id}`))
    .then(response => {
      callback(response.data)
    })
    .catch()
