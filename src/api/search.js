import axios from 'axios'

import { getApiUrl } from './api'

export const getSearch = (callback, type = 'multi', params) =>
  axios
    .get(getApiUrl(`search/${type}`, params))
    .then(response => {
      callback(response?.data?.results)
    })
    .catch()
