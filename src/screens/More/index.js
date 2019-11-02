import React from 'react'
import { ScrollView } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import { Icon } from '../../components/Icon'
import { Switch } from '../../components/Switch'
import { BasicLayout } from '../../layouts/Basic'
import { Item, List } from '../../components/List'
import { Centered } from '../../components/Centered'
import { TitleScreen } from '../../components/TitleScreen'

export const More = ({ screenProps: { setThemeName, themeName } }) => {
  const setTheme = () => setThemeName(themeName === 'dark' ? '' : 'dark')
  const openLink = async link => {
    await WebBrowser.openBrowserAsync(link)
  }

  return (
    <BasicLayout>
      <ScrollView>
        <Centered>
          <TitleScreen>More</TitleScreen>
        </Centered>
        <List>
          <List.Title>User interface</List.Title>
          <Item activeOpacity={0.6} isLast onPress={setTheme}>
            <Item.Content>
              <Item.Title>Use dark mode</Item.Title>
              <Item.Subtitle>Get that whiteness out of my sight</Item.Subtitle>
            </Item.Content>
            <Switch onValueChange={setTheme} value={themeName === 'dark'} />
          </Item>
        </List>
        <List>
          <List.Title>Codebase</List.Title>
          <Item activeOpacity={0.6} onPress={() => openLink('https://www.expo.io')}>
            <Item.Content>
              <Item.Title>Expo</Item.Title>
              <Item.Subtitle>Platform for universal React applications</Item.Subtitle>
            </Item.Content>
            <Icon color="light100" name="external-link" size={20} />
          </Item>
          <Item activeOpacity={0.6} isLast onPress={() => openLink('https://www.themoviedb.org')}>
            <Item.Content>
              <Item.Title>The movie database</Item.Title>
              <Item.Subtitle>Community built movie and TV database</Item.Subtitle>
            </Item.Content>
            <Icon color="light100" name="external-link" size={20} />
          </Item>
        </List>
      </ScrollView>
    </BasicLayout>
  )
}
