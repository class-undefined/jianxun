import React, { useRef, useMemo, useState, useEffect } from 'react'
import styles from "./SvgIcon.module.css"
type IImport = {
  default?: Record<string, any>
  [key: string]: any
}

type ISvg = {
  iconClass: string
  className?: string
  width?: number
  height?: number
  color?: string
  style?: Record<string, any>
  onClick?: () => void
}

export const SvgIcon: React.FC<ISvg> = (props: any) => {
  const {
    iconClass,
    className,
    width = 16,
    height = 16,
    color = '#000',
    style = {},
    onClick,
  } = props
  const [svgModule, setSvgModule] = useState<IImport>()

  const getSvg = async () => {
    const svg = await import(`../../static/icons/svg/${props.iconClass}.svg`)
    setSvgModule(svg)
  }

  const iconPath = useMemo(() => {
    if (svgModule && svgModule.default) {
      return `#${svgModule.default.id}`
    }
  }, [iconClass, svgModule])

  const Style = {
    ...style,
    width: `${width}px`,
    height: `${height}px`,
    color,
  }

  useEffect(() => {
    getSvg()
  }, [])

  return (
    <svg
      onClick={onClick}
      style={Style}
      className={`svg-icon ${className}`}
      aria-hidden="true"
    >
      <use xlinkHref={iconPath} />
    </svg>
  )
}

