import { FormEvent, ReactNode } from 'react'
import * as $ from './SectionTitle.css'
import { useFocusCard } from '@/hooks/useFocusCard'
import { Card, Input } from '@jc-survey/ui'

type Props = {
  title: string
  onTitleChange: (e: FormEvent<HTMLInputElement>) => void
  description: string
  onDescriptionChange: (e: FormEvent<HTMLInputElement>) => void
}

function SectionTitle({
  title,
  onTitleChange,
  description,
  onDescriptionChange,
}: Props) {
  const { cardRef, handleCardBlur, handleCardFocus, isFocused } = useFocusCard()
  return (
    <div>
      <Card
        isFirst
        isFocused={isFocused}
        onBlur={handleCardBlur}
        onFocus={handleCardFocus}
        ref={cardRef}
      >
        <Input
          fontSize="12pt"
          onChange={onTitleChange}
          placeholder="섹션 제목(선택 사항)"
          value={title}
        />
        <Input
          fontSize="11pt"
          onChange={onDescriptionChange}
          placeholder="섹션 설명(선택 사항)"
          value={description}
        />
      </Card>
    </div>
  )
}

export default SectionTitle
