/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */
import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { ScrollView } from 'react-native-gesture-handler'
import { Linking } from 'react-native'
import i18n from 'i18n-js'

import { useTheme } from '../../contexts/theme'
import { BasicLayout } from '../../layouts'
import { Header, List, Modal, paddingHeader } from '../../components'
import {
  ExternalLinkIcon,
  GithubIcon,
  Icon,
  MailIcon,
  MoonIcon,
  SmartphoneIcon,
  SunIcon
} from '../../components/Icons'
import { Touchable } from '../../components/Touchable'
import { useLanguage } from '../../contexts/language'

export function More() {
  const theme = useTheme()
  const language = useLanguage()
  const [themeModalVisible, setThemeModalVisible] = useState(false)
  const [languageModalVisible, setLanguageModalVisible] = useState(false)

  const themeIcon = {
    dark: MoonIcon,
    light: SunIcon
  }

  const setTheme = name => {
    setThemeModalVisible(false)
    theme.setThemeName(name)
  }

  const setLanguage = name => {
    setLanguageModalVisible(false)
    language.setLocale(name)
  }

  const openLink = async link => {
    await WebBrowser.openBrowserAsync(link)
  }

  function ThemeItem({ isLast, value }) {
    return (
      <Touchable onPress={() => setTheme(value)}>
        <List.Item isLast={isLast} py="xxl">
          <List.Item.Content>
            <List.Item.Title>{i18n.t(`themeoptions.${value}.title`)}</List.Item.Title>
            <List.Item.Subtitle>{i18n.t(`themeoptions.${value}.baseline`)}</List.Item.Subtitle>
          </List.Item.Content>
          <Icon color="dark100" icon={themeIcon[value] || SmartphoneIcon} size="20" />
        </List.Item>
      </Touchable>
    )
  }

  function LanguageItem({ isLast, value }) {
    return (
      <Touchable onPress={() => setLanguage(value)}>
        <List.Item isLast={isLast} py="xxl">
          <List.Item.Content>
            <List.Item.Title>{i18n.t(value)}</List.Item.Title>
          </List.Item.Content>
        </List.Item>
      </Touchable>
    )
  }

  return (
    <>
      <BasicLayout>
        <Header title={i18n.t('more')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <List style={{ marginTop: paddingHeader + theme.values.space.xl }}>
            <List.Title>{i18n.t('settings')}</List.Title>
            <Touchable onPress={() => setThemeModalVisible(true)}>
              <List.Item>
                <List.Item.Content>
                  <List.Item.Title>{i18n.t('theme')}</List.Item.Title>
                  <List.Item.Subtitle>
                    {i18n.t(`themeoptions.${theme.name}.title`)}
                  </List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" icon={themeIcon[theme.name] || SmartphoneIcon} size="20" />
              </List.Item>
            </Touchable>
            <Touchable onPress={() => setLanguageModalVisible(true)}>
              <List.Item isLast>
                <List.Item.Content>
                  <List.Item.Title style={{ textTransform: 'capitalize' }}>
                    {i18n.t('language')}
                  </List.Item.Title>
                  <List.Item.Subtitle>{i18n.t(language.locale)}</List.Item.Subtitle>
                </List.Item.Content>
              </List.Item>
            </Touchable>
          </List>
          <List>
            <List.Title>{i18n.t('morescreen.titles.author')}</List.Title>
            <Touchable onPress={() => openLink('https://www.theomesnil.com')}>
              <List.Item>
                <List.Item.Content>
                  <List.Item.Title>Théo Mesnil</List.Item.Title>
                  <List.Item.Subtitle>{i18n.t('morescreen.author.baseline')}</List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" icon={ExternalLinkIcon} size="20" />
              </List.Item>
            </Touchable>
            <Touchable
              onPress={
                () => openLink('https://github.com/theo-mesnil/smovie-expo/')
                // eslint-disable-next-line react/jsx-curly-newline
              }
            >
              <List.Item>
                <List.Item.Content>
                  <List.Item.Title>{i18n.t('morescreen.opensource.title')}</List.Item.Title>
                  <List.Item.Subtitle>
                    {i18n.t('morescreen.opensource.baseline')}
                  </List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" icon={GithubIcon} size="20" />
              </List.Item>
            </Touchable>
            <Touchable
              onPress={
                () => Linking.openURL(`mailto:smovie.contact@gmail.com`)
                // eslint-disable-next-line react/jsx-curly-newline
              }
            >
              <List.Item isLast>
                <List.Item.Content>
                  <List.Item.Title>{i18n.t('morescreen.contactme.title')}</List.Item.Title>
                  <List.Item.Subtitle>{i18n.t('morescreen.contactme.baseline')}</List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" icon={MailIcon} size="20" />
              </List.Item>
            </Touchable>
          </List>
          <List style={{ marginBottom: theme.values.space.xl }}>
            <List.Title>Codebase</List.Title>
            <Touchable onPress={() => openLink('https://www.expo.io')}>
              <List.Item>
                <List.Item.Content>
                  <List.Item.Title>Expo</List.Item.Title>
                  <List.Item.Subtitle>{i18n.t('morescreen.expo.baseline')}</List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" icon={ExternalLinkIcon} size="20" />
              </List.Item>
            </Touchable>
            <Touchable onPress={() => openLink('https://www.themoviedb.org')}>
              <List.Item isLast>
                <List.Item.Content>
                  <List.Item.Title>The Movie Database - API</List.Item.Title>
                  <List.Item.Subtitle>{i18n.t('morescreen.tmdb.baseline')}</List.Item.Subtitle>
                </List.Item.Content>
                <Icon color="dark100" icon={ExternalLinkIcon} size="20" />
              </List.Item>
            </Touchable>
          </List>
        </ScrollView>
      </BasicLayout>
      <Modal
        closeAction={() => setThemeModalVisible(false)}
        isVisible={themeModalVisible}
        withPadding={false}
      >
        <ThemeItem value="dark" />
        <ThemeItem value="light" />
        <ThemeItem isLast value="native" />
      </Modal>
      <Modal
        closeAction={() => setLanguageModalVisible(false)}
        isVisible={languageModalVisible}
        withPadding={false}
      >
        <LanguageItem value="en" />
        <LanguageItem isLast value="fr" />
      </Modal>
    </>
  )
}
