/* eslint-disable react/no-multi-comp */
import React, { useContext, useEffect, useState } from 'react'
import { Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { ThemeContext } from '../utils/context'

export const ShapeLoader = ({
  children,
  style,
  size,
  linearStartPosition = [0.2, 0.3],
  delay,
  ...rest
}) => {
  const theme = useContext(ThemeContext)
  const startValue = 0.2
  const [fadeAnim] = useState(new Animated.Value(startValue))

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000
        }),
        Animated.timing(fadeAnim, {
          toValue: startValue,
          duration: 1000
        })
      ])
    ).start()
  })

  return (
    <Animated.View
      style={{
        ...style,
        overflow: 'hidden',
        opacity: fadeAnim,
        height: size
      }}
      {...rest}
    >
      <>
        {children}
        <LinearGradient
          colors={[theme.colors.light400, theme.colors.light700]}
          start={linearStartPosition}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%'
          }}
        />
      </>
    </Animated.View>
  )
}

export const LineGradient = ({ size = 'md', style, ...rest }) => {
  const getSize = {
    sm: 5,
    md: 10,
    lg: 20
  }

  return (
    <ShapeLoader
      linearStartPosition={[0, 0]}
      size={getSize[size] || size}
      style={{ ...style, borderRadius: '50%' }}
      {...rest}
    />
  )
}
