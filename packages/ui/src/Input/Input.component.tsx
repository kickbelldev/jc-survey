import { assignInlineVars } from '@vanilla-extract/dynamic'
import { FormEvent, forwardRef } from 'react'
import * as $ from './Input.css'
import classNames from 'classnames'

type Props = {
  placeholder: string
  value: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
  isTitle?: boolean
  fontSize?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { placeholder, value, onChange, isTitle = false, fontSize = '16px' },
    ref,
  ) => {
    return (
      <div className={classNames([$.container, isTitle ? $.title : null])}>
        <div className={$.wrapper}>
          {!value && (
            <div
              className={$.placeholder}
              style={assignInlineVars({ fontSize, lineHeight: '1' })}
            >
              {placeholder}
            </div>
          )}
          <input
            className={$.input}
            style={assignInlineVars({ fontSize })}
            onChange={onChange}
            value={value}
            ref={ref}
          />
          <div className={$.bottomLineWrapper}>
            <div className={$.bottomLine} />
          </div>
        </div>
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
