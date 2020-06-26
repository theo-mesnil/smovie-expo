import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent({ color, size, ...props }) {
  return (
    <Svg
      className="prefix__feather prefix__feather-chevron-right"
      fill="none"
      height={size}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <Path d="M9 18l6-6-6-6" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
