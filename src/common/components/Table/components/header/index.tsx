import React from 'react'
import clsx from 'clsx'
import styles from '../../style.module.scss'
import { HeaderProps } from './type'

const Header = ({
  headerTitleList,
  isHorizontalScrollable,
  getHeaderProps,
}: HeaderProps) => {
  return (
    <thead className={styles.header}>
      <tr
        className={clsx({
          [styles.cell]: !isHorizontalScrollable,
          [styles.widerCell]: isHorizontalScrollable,
        })}
      >
        {headerTitleList.map((title, index) => {
          const props = getHeaderProps(title, index)
          return (
            <th
              key={props.key ? props.key : `${title}-${index}`}
              onClick={props.onClick}
              className={props.className}
            >
              {title}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default Header
