import React, { createRef, useState } from 'react'
import { ScrollView } from 'react-native'

import { screenHeight } from '../constants/screen'

import * as S from './Modal.styled'

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
          {children}
        </ScrollView>
      </S.Content>
    </S.Modal>
  )
}
