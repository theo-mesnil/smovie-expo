/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */
import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { ScrollView } from 'react-native-gesture-handler'

import { useTheme } from '../../contexts/theme'
import { BasicLayout } from '../../layouts'
import { Icon, List, Modal } from '../../components'
import { Touchable } from '../../components/Touchable'

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
      <Touchable onPress={() => setTheme(name)}>
        <List.Item isLast={isLast}>
          <List.Item.Content>
            <List.Item.Title>{name}</List.Item.Title>
            <List.Item.Subtitle>{subtitle}</List.Item.Subtitle>
          </List.Item.Content>
        </List.Item>
      </Touchable>
    )
  }

  return (
    <>
      <BasicLayout>
        <ScrollView showsVerticalScrollIndicator={false}>
          <List>
            <List.Title>Theme</List.Title>
            <Touchable onPress={() => setThemeModalVisible(true)}>
              <List.Item isLast>
                <List.Item.Content>
                  <List.Item.Title>{theme.name}</List.Item.Title>
                  <List.Item.Subtitle>Choose another theme</List.Item.Subtitle>
                </List.Item.Content>
              </List.Item>
            </Touchable>
          </List>
          <List>
            <List.Title>Codebase</List.Title>
            <Touchable onPress={() => openLink('https://www.expo.io')}>
              <List.Item>
                <List.Item.Content>
                  <List.Item.Title>Expo</List.Item.Title>
                  <List.Item.Subtitle>Platform for universal React applications</List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" name="external-link" size={20} />
              </List.Item>
            </Touchable>
            <Touchable onPress={() => openLink('https://www.themoviedb.org')}>
              <List.Item isLast>
                <List.Item.Content>
                  <List.Item.Title>The movie database</List.Item.Title>
                  <List.Item.Subtitle>Community built movie and TV database</List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" name="external-link" size={20} />
              </List.Item>
            </Touchable>
          </List>
        </ScrollView>
      </BasicLayout>
      <Modal closeAction={() => setThemeModalVisible(false)} isVisible={themeModalVisible}>
        <ThemeItem name="dark" subtitle="Get that whiteness out of my sight" />
        <ThemeItem name="light" subtitle="Turn on the light" />
        <ThemeItem isLast name="native" subtitle="Get theme from your device settings" />
      </Modal>
    </>
  )
}
