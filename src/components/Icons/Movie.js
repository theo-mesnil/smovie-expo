import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

function SvgComponent({ color, size, ...props }) {
  return (
    <Svg
      className="prefix__feather prefix__feather-film"
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
      <Rect height={20} rx={2.18} ry={2.18} width={20} x={2} y={2} />
      <Path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
