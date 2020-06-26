import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent({ color, size, ...props }) {
  return (
    <Svg
      className="prefix__feather prefix__feather-cloud-lightning"
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
      <Path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
      <Path d="M13 11l-4 6h6l-4 6" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
