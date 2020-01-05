import axios from 'axios'

import { getApiUrl } from './api'

export const getMovieDetail = (callback, id, url) =>
  axios
    .get(getApiUrl(`movie/${id}${url}`))
    .then(response => {
      callback(response.data)
    })
    .catch()
