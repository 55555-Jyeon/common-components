import clsx from 'clsx'
import { useCallback } from 'react'
import { ScrollableContentsProps } from './type'
import styles from './style.module.scss'
import { formattedCellData } from '../../../../../../../funcs/utils/table/common/body.utils'

/**
 * @description headerTitleList를 기준으로 행 데이터를 렌더링해 반환
 */
const ScrollableContents = ({
  row,
  headerTitleList,
  renderScrollableContent,
  selectableTableState,
}: ScrollableContentsProps) => {
  const selectedHeaderCell = selectableTableState?.selectedHeaderCell // 선택된 테이블의 header (default : 1)
  const selectedRow = selectableTableState?.selectedRow // 선택된 테이블의 행 (default X)
  /**
   * @function isHeaderHighlighted
   * @description header에서 선택된 값이 있다면 그 열을 확인해 반환하는 함수. 존재할 경우 스타일로 표시 (단, default 값이 있으므로 존재할 수 밖에 없음)
   * */
  const isHeaderHighlighted = useCallback(
    (columnIndex: number) => {
      if (selectedHeaderCell) return selectedHeaderCell.idx === columnIndex
    },
    [selectedHeaderCell]
  )

  /**
   * @function isIntersectionExist
   * @description header에서 선택된 열과 tableRow에서 선택된 행의 교집합 부분이 존재하는지 확인하는 함수. 교차 지점이 존재할 경우 스타일로 표시
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

  /**
   * @function renderCellData
   * @description formattedCellData 유틸 함수로 데이터 가공해서 td 컴포넌트로 감싸 반환
   * */
  const renderCellData = (key: string, index: number) => {
    const cellData = formattedCellData(key, row, renderScrollableContent)

    return (
      <td
        key={`${key}-${index}`}
        className={clsx(styles.scrollableContents, {
          [styles.highlighted]: isHeaderHighlighted(index) && !isRowDeactivated,
          [styles.markIntersection]: isIntersectionExist(index),
        })}
      >
        {cellData}
      </td>
    )
  }

  return <>{headerTitleList.map((key, index) => renderCellData(key, index))}</>
}
export default ScrollableContents
