import React, { createRef, useState } from 'react'
import { ScrollView } from 'react-native'

import { screenHeight } from '../constants/screen'

import { Box } from './Box'
import * as S from './Modal.styled'

export function Modal({
  children,
  closeAction,
  maxHeight = screenHeight / 1.5,
  minHeight = 100,
  isVisible,
  pipeColor = 'light100',
  withPadding = true
}) {
  const scrollViewRef = createRef()
  const [scrollOffset, setScrollOffset] = useState()

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
      onBackdropPress={closeAction}
      onSwipeComplete={closeAction}
      propagateSwipe
      scrollOffset={scrollOffset}
      scrollOffsetMax={400 - 300}
      scrollTo={handleScrollTo}
      swipeDirection={['down']}
      testID="modal"
    >
      <S.Wrapper maxHeight={maxHeight} minHeight={minHeight} withPadding={withPadding}>
        <Box
          alignSelf="center"
          backgroundColor={pipeColor}
          borderRadius="sm"
          height={6}
          position="absolute"
          top={6}
          width={50}
          zIndex={1}
        />
        <ScrollView onScroll={handleOnScroll} ref={scrollViewRef} scrollEventThrottle={16}>
          {children}
        </ScrollView>
      </S.Wrapper>
    </S.Modal>
  )
}
