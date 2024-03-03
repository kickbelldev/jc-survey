import { FocusEvent, MouseEvent, useRef, useState } from 'react'

export const useFocusCard = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleCardFocus = (e: FocusEvent<HTMLDivElement>) => {
    if (!cardRef.current) {
      return
    }

    setIsFocused(true)
  }

  const handleCardBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!cardRef.current) {
      return
    }

    setIsFocused(false)
  }

  return { isFocused, cardRef, handleCardFocus, handleCardBlur }
}
