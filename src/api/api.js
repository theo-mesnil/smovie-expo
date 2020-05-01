import { THEMOVIEDB_API_KEY } from '../../env'

export const API_URL = 'https://api.themoviedb.org/3/'

export const getApiUrl = (query, params) => {
  let paramsUrl = ''
  params &&
    params.map(param => {
      paramsUrl += `&${param.name}=${param.value}`
    })

  return `${API_URL}${query}?api_key=${THEMOVIEDB_API_KEY}${paramsUrl}`
}
