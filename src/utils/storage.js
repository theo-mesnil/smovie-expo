import { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'

export function useAsyncStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue)
  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (value === null) return initialValue
        return JSON.parse(value)
      })
      .then(setStoredValue)
  }, [key, initialValue])

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    AsyncStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [storedValue, setValue]
}
