import React from 'react'

import * as S from './Modal.styled'

export function Modal({ children, isVisible, setIsVisible, ...rest }) {
  function hideModal() {
    setIsVisible(false)
  }

  return (
    <S.Modal
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onSwipeComplete={hideModal}
      swipeDirection="down"
      {...rest}
    >
      <S.Content>{children}</S.Content>
    </S.Modal>
  )
}
