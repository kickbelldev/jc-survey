import { FormEvent, MouseEvent, useState } from 'react'
import { Card, Input, styles } from '@jc-survey/ui'
import { useInput } from '@/hooks'
import Section from '@/components/Section/Section.component'
import * as $ from './App.css'
import { useFocusCard } from '@/hooks/useFocusCard'
import SectionTitle from '@/components/SectionTitle/SectionTitle.component'

interface ISection {
  id: string
  title: string
  description: string
}

function App() {
  const { value: title, handleChange: handleSurveyTitleChange } = useInput()
  const { value: description, handleChange: handleSurveyDescriptionChange } =
    useInput()

  const [sectionList, setSectionList] = useState<ISection[]>([
    { id: 'asd', title: '', description: '' },
    { id: 'dsa', title: '', description: '' },
    { id: 'sda', title: '', description: '' },
  ])

  const { handleCardFocus, handleCardBlur, isFocused, cardRef } = useFocusCard()

  const totalIndex = sectionList.length

  const handleSectionTitleChange = (
    e: FormEvent<HTMLInputElement>,
    editIdx: number,
  ) => {
    const newSectionList = sectionList.map((section, idx) => {
      if (editIdx === idx) {
        return { ...section, title: e.currentTarget.value }
      }

      return { ...section }
    })

    setSectionList(newSectionList)
  }

  const handleSectionDescriptionChange = (
    e: FormEvent<HTMLInputElement>,
    editIdx: number,
  ) => {
    const newSectionList = sectionList.map((section, idx) => {
      if (editIdx === idx) {
        return { ...section, description: e.currentTarget.value }
      }

      return { ...section }
    })

    setSectionList(newSectionList)
  }

  return (
    <main className={styles.container}>
      {sectionList.map((section, index) => (
        <Section index={index + 1} key={section.id} totalIndex={totalIndex}>
          {index === 0 ? (
            <div className={$.firstCard}>
              <div className={$.firstCardHighlighter}>
                <Card
                  isFirst
                  isFocused={isFocused}
                  onBlur={handleCardBlur}
                  onFocus={handleCardFocus}
                  ref={cardRef}
                >
                  <Input
                    fontSize="2rem"
                    onChange={handleSurveyTitleChange}
                    placeholder="설문지 제목"
                    value={title}
                  />
                  <Input
                    fontSize="11pt"
                    onChange={handleSurveyDescriptionChange}
                    placeholder="설문지 설명"
                    value={description}
                  />
                </Card>
              </div>
            </div>
          ) : (
            <SectionTitle
              description={section.description}
              onDescriptionChange={(e) =>
                handleSectionDescriptionChange(e, index)
              }
              onTitleChange={(e) => handleSectionTitleChange(e, index)}
              title={section.title}
            />
          )}
        </Section>
      ))}
    </main>
  )
}

export default App
