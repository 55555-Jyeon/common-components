import styles from '../../../../style.module.scss'
import React from 'react'
import clsx from 'clsx'

export type EmptyContentProps = {
  isHorizontalScrollable: boolean
}

const EmptyContent = ({ isHorizontalScrollable }: EmptyContentProps) => {
  return (
    <tr
      className={clsx({
        [styles.widerCell]: isHorizontalScrollable,
        [styles.cell]: !isHorizontalScrollable,
      })}
    >
      <td className={styles.emptyCell}>No data available</td>
    </tr>
  )
}
export default EmptyContent
