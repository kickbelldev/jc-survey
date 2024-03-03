import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../global.css'

export const container = style({})

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  padding: '0.5rem',
})

export const title = style({
  backgroundColor: vars.color.grayScale50,
  padding: '1rem',
})

export const placeholder = style({
  position: 'absolute',
  pointerEvents: 'none',
  padding: '0.5rem',
  color: vars.color.grayScale500,
})

export const input = style({
  border: 'none',
  backgroundColor: 'transparent',
  lineHeight: 1.5,
  padding: '0.2rem',
})

const widthBroader = keyframes({
  '0%': { transform: 'scaleX(0)', height: '1px' },
  '100%': { transform: 'scaleX(1) scaleY(3)', height: '1px' },
})

export const bottomLine = style({
  height: '0',
  backgroundColor: vars.color.primary500,
  selectors: {
    [`${input}:focus + &`]: {
      animation: `${widthBroader} 0.3s forwards`,
    },
  },
})
