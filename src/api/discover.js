import axios from 'axios'

import { getApiUrl } from './api'

export const getDiscover = (callback, type, params) =>
  axios
    .get(getApiUrl(`discover/${type}`), { params })
    .then(response => {
      callback(response.data)
    })
    .catch()
