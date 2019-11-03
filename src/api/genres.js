import axios from 'axios'

import { getApiUrl } from './api'

export const getGenres = (setGenres, type = 'movie') =>
  axios
    .get(getApiUrl(`genre/${type}/list`))
    .then(response => {
      setGenres(response.data)
    })
    .catch()
