import axios from 'axios'

import { getApiUrl } from './api'

export const getTrending = (callback, type = 'movie', time = 'week') =>
  axios
    .get(getApiUrl(`trending/${type}/${time}`))
    .then(response => {
      callback(response.data)
    })
    .catch()
