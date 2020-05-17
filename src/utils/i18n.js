import { enUS as en, fr } from 'date-fns/locale'

import { useLanguage } from '../contexts/language'

export const dateFnsLocales = { en, fr }

export function useDateFnsLocale() {
  const language = useLanguage()

  return dateFnsLocales[language.locale]
}
