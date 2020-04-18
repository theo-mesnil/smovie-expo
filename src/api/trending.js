import axios from 'axios'

import { getApiUrl } from './api'

export const getTrending = (callback, type = 'movie', time = 'day') =>
  axios
    .get(getApiUrl(`trending/${type}/${time}`))
    .then(response => {
      callback(response.data)
    })
    .catch()
