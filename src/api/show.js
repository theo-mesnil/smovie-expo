import axios from 'axios'

import { getApiUrl } from './api'

export const getShowDetail = (callback, id, url) =>
  axios
    .get(getApiUrl(`tv/${id}${url}`))
    .then(response => {
      callback(response.data)
    })
    .catch()
