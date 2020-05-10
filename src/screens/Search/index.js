import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { Header, paddingHeader, TextInput } from '../../components'
import { BasicLayout } from '../../layouts/Basic'
import { useTheme } from '../../contexts/theme'
import { isTablet } from '../../constants/screen'
import { getSearch } from '../../api/search'

import { SearchItem } from './SearchItem'

export function Search() {
  const [value, setValue] = useState()
  const [results, setResults] = useState()
  const theme = useTheme()
  const numberOfColumns = isTablet ? 6 : 3

  useEffect(() => {
    if (value !== '') {
      getSearch(setResults, 'multi', [{ name: 'query', value: encodeURI(value) }])
    }
  }, [value])

  function handleClean() {
    setValue()
    setResults()
  }

  return (
    <BasicLayout>
      <Header
        content={
          <TextInput
            autoFocus
            handleClean={handleClean}
            iconName="search"
            onChangeText={value => setValue(value)}
            placeholder="Search"
            value={value}
          />
        }
      />
      {!!value && !!results && (
        <FlatList
          contentContainerStyle={{
            paddingTop: paddingHeader + theme.values.space.sm,
            paddingBottom: theme.values.space.lg,
            paddingHorizontal: theme.values.space.xs
          }}
          data={results}
          initialNumToRender={20}
          keyExtractor={item => `${item.id}_${Math.random()}`}
          numColumns={numberOfColumns}
          renderItem={props => <SearchItem numberOfColumns={numberOfColumns} {...props} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </BasicLayout>
  )
}
