/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */
import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { ScrollView } from 'react-native-gesture-handler'

import { useTheme } from '../../contexts/theme'
import { BasicLayout } from '../../layouts'
import { Icon, Item, List, Modal } from '../../components'

export function More() {
  const theme = useTheme()
  const [themeModalVisible, setThemeModalVisible] = useState(false)

  const setTheme = name => {
    setThemeModalVisible(false)
    theme.setThemeName(name)
  }

  const openLink = async link => {
    await WebBrowser.openBrowserAsync(link)
  }

  function ThemeItem({ isLast, name, subtitle }) {
    return (
      <Item isLast={isLast} onPress={() => setTheme(name)}>
        <Item.Content>
          <Item.Title>{name}</Item.Title>
          <Item.Subtitle>{subtitle}</Item.Subtitle>
        </Item.Content>
      </Item>
    )
  }

  return (
    <>
      <BasicLayout>
        <ScrollView showsVerticalScrollIndicator={false}>
          <List>
            <List.Title>Theme</List.Title>
            <Item isLast onPress={() => setThemeModalVisible(true)}>
              <Item.Content>
                <Item.Title>{theme.name}</Item.Title>
                <Item.Subtitle>Choose another theme</Item.Subtitle>
              </Item.Content>
            </Item>
          </List>
          <List>
            <List.Title>Codebase</List.Title>
            <Item onPress={() => openLink('https://www.expo.io')}>
              <Item.Content>
                <Item.Title>Expo</Item.Title>
                <Item.Subtitle>Platform for universal React applications</Item.Subtitle>
              </Item.Content>
              <Icon color="dark100" name="external-link" size={20} />
            </Item>
            <Item isLast onPress={() => openLink('https://www.themoviedb.org')}>
              <Item.Content>
                <Item.Title>The movie database</Item.Title>
                <Item.Subtitle>Community built movie and TV database</Item.Subtitle>
              </Item.Content>
              <Icon color="dark100" name="external-link" size={20} />
            </Item>
          </List>
        </ScrollView>
      </BasicLayout>
      <Modal closeModal={() => setThemeModalVisible(false)} isVisible={themeModalVisible}>
        <ThemeItem name="dark" subtitle="Get that whiteness out of my sight" />
        <ThemeItem name="light" subtitle="Turn on the light" />
        <ThemeItem isLast name="native" subtitle="Get theme from your device settings" />
      </Modal>
    </>
  )
}
