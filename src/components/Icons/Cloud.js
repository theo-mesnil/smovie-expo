import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent({ color, size, ...props }) {
  return (
    <Svg
      className="prefix__feather prefix__feather-cloud"
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
      <Path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
