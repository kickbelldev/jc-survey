import { style } from '@vanilla-extract/css'
import { vars } from '../global.css'

export const card = style({
  backgroundColor: vars.color.grayScale00,
  border: `1px solid ${vars.color.grayScale100}`,
  borderRadius: '8px',
  position: 'relative',
  paddingTop: '22px',
  paddingBottom: '24px',
})

export const first = style({
  borderStartStartRadius: 0,
})

export const focused = style({})
