import axios from 'axios'

import { getApiUrl } from './api'

export const getTrending = (setTrending, type = 'movie', time = 'week') =>
  axios
    .get(getApiUrl(`trending/${type}/${time}`))
    .then(response => {
      setTrending(response.data)
    })
    .catch()
