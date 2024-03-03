import { ReactNode } from 'react'
import * as $ from './Section.css'

type Props = {
  children: ReactNode
  totalIndex: number
  index: number
}

function Section({ children, totalIndex, index }: Props) {
  return (
    <section className={$.section}>
      <div className={$.sectionLabelContainer}>
        <div className={$.sectionLabel}>
          {totalIndex} 중 {index} 섹션
        </div>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default Section
