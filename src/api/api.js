import { THEMOVIEDB_API_KEY } from '../../env'

export const API_URL = 'https://api.themoviedb.org/3/'

export const getApiUrl = query => `${API_URL}${query}?api_key=${THEMOVIEDB_API_KEY}`