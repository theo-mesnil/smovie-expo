import { THEMOVIEDB_API_KEY } from '../../env'
import { useLanguage } from '../contexts/language'

export const API_URL = 'https://api.themoviedb.org/3/'

export const useApiUrl = () => {
  const language = useLanguage()

  function apiUrl(query, params) {
    let paramsUrl = ''

    params &&
      params.map(param => {
        paramsUrl += `&${param.name}=${param.value}`
      })

    return `${API_URL}${query}?api_key=${THEMOVIEDB_API_KEY}&language=${language.locale}${paramsUrl}`
  }

  return apiUrl
}
