import clsx from 'clsx'
import { useCallback } from 'react'
import { ScrollableContentsProps } from './type'
import styles from './style.module.scss'

const ScrollableContents = ({
  row,
  headerTitleList,
  renderScrollableContent,
  selectableTableState,
}: ScrollableContentsProps) => {
  const selectedHeaderCell = selectableTableState?.selectedHeaderCell
  const selectedRow = selectableTableState?.selectedRow
  /**
   * @function isHeaderHighlighted
   * @description
   * header에서 선택된 값이 있다면 그 열을 확인해 반환하는 함수.
   * 존재할 경우 스타일로 표시 (단, default 값이 있으므로 존재할 수 밖에 없음)
   *
   * @TODO highlight된 열들 중 deactivated된 부분은 스타일 적용에서 제외하기
   * */
  const isHeaderHighlighted = useCallback(
    (columnIndex: number) => {
      if (selectedHeaderCell) return selectedHeaderCell.idx === columnIndex
    },
    [selectedHeaderCell]
  )

  /**
   * @function isIntersectionExist
   * @description
   * header에서 선택된 열과 tableRow에서 선택된 행의 교집합 부분이 존재하는지 확인하는 함수.
   * 교차 지점이 존재할 경우 스타일로 표시
   * */
  const isIntersectionExist = (columnIndex: number) => {
    if (isHeaderHighlighted(columnIndex) && selectedRow)
      return selectedRow.label === row.label
  }

  /**
   * @function isRowDeactivated
   * @description 해당 행이 비활성화 상태인지 확인하는 함수.
   * */
  const isRowDeactivated = selectableTableState?.rowList?.some(
    (oneRow) => oneRow.label === row.label && !oneRow.status
  )

  return (
    <>
      {headerTitleList.map((key, index) => {
        const cellContent = renderScrollableContent
          ? renderScrollableContent(row)
          : row[key]

        return (
          <td
            key={index}
            className={clsx(styles.scrollableContents, {
              [styles.highlighted]:
                isHeaderHighlighted(index) && !isRowDeactivated,
              [styles.markIntersection]: isIntersectionExist(index),
            })}
          >
            {renderScrollableContent
              ? typeof cellContent === 'object' && cellContent !== null
                ? cellContent[key] || '-'
                : cellContent
              : cellContent}
          </td>
        )
      })}
    </>
  )
}
export default ScrollableContents
