import React, { createRef, useState } from 'react'
import { ScrollView } from 'react-native'

import { screenHeight } from '../constants/screen'

import * as S from './Modal.styled'
import { Box } from './Box'

export function Modal({ children, closeModal, isVisible, ...rest }) {
  const [scrollOffset, setScrollOffset] = useState(null)
  const scrollViewRef = createRef()
  const maxHeight = screenHeight - 100

  function handleOnScroll(event) {
    setScrollOffset(event.nativeEvent.contentOffset.y)
  }

  function handleScrollTo(p) {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p)
    }
  }

  return (
    <S.Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      scrollOffset={scrollOffset}
      scrollOffsetMax={maxHeight - 100}
      scrollTo={handleScrollTo}
      swipeDirection={['down']}
      {...rest}
    >
      <S.Content maxHeight={maxHeight}>
        <ScrollView
          onScroll={handleOnScroll}
          ref={scrollViewRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Box
            alignSelf="center"
            backgroundColor="light400"
            borderRadius={3}
            height={6}
            mb="lg"
            width={50}
          />
          {children}
        </ScrollView>
      </S.Content>
    </S.Modal>
  )
}
