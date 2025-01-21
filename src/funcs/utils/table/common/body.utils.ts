import clsx from 'clsx'
import {
  DataType,
  RowType,
  SelectableRowType,
} from '../../../../common/components/Table/type'
import { selectableTableStateType } from '../../../../common/components/Table/type'

/**
 * @function getRowClassNames
 * @description 행(row)이 가질 동적 스타일 클래스를 모아서 반환하는 함수. return 문에 작성하기에는 너무 길어서 분리
 *
 * @param {SelectableRowType | RowType} row - 스타일을 적용할 행 데이터
 * @param {boolean} isSelectableTable
 * @param {boolean} isHorizontalScrollable
 * @param {Record<string, string>} styles
 * @param {selectableTableStateType} selectableTableState
 *
 *  @returns {string} 스타일 클래스 이름
 *
 * [상황별 적용될 스타일 목록]
 * - { isHorizontalScrollable ? widerCell : cell } : 가로스크롤 가능 여부에 따라 다른 스타일 적용. 셀의 너비가 달라짐
 * - { isSelectableTable && tableRow } : 표의 행을 선택할 수 있다면 적용되는 스타일
 * - selected : 현재 선택된 행과 일치할 때
 * - focused : 현재 포커스된 행과 일치할 때
 * - deactivated : 행의 상태가 비활성화일 때
 */
export const getTableRowClassNames = (
  row: SelectableRowType | RowType,
  isSelectableTable: boolean,
  isHorizontalScrollable: boolean,
  styles: Record<string, string>,
  selectableTableState?: selectableTableStateType
): string => {
  const isSelectableRow = isSelectableTable && 'label' in row && 'status' in row
  const isSelected =
    isSelectableRow && selectableTableState?.selectedRow?.label === row.label
  const isFocused =
    isSelectableRow && selectableTableState?.focusedRow?.label === row.label

  return clsx({
    [styles.cell]: !isHorizontalScrollable,
    [styles.widerCell]: isHorizontalScrollable,
    [styles.tableRow]: isSelectableTable,
    [styles.selected]: isSelected,
    [styles.focused]: isFocused,
    [styles.deactivated]: !row.status,
  })
}

/**
 * @function handleMouseEnter
 * @description 마우스가 행 위로 올라왔을 때 포커스를 설정
 *
 * @param {DataType<T>} row - 포커스를 설정할 행 데이터
 * @param {boolean} isSelectableTable
 * @param {selectableTableStateType} selectableTableState
 */
export const handleMouseEnter = <T extends boolean>(
  row: DataType<T>,
  isSelectableTable: boolean,
  selectableTableState?: selectableTableStateType
) => {
  if (isSelectableTable && 'label' in row && 'status' in row) {
    selectableTableState?.setFocusedRow?.({
      label: row.label as string,
      status: row.status as boolean,
    })
  }
}

/**
 * @function handleRowClick
 * @description 행(row)을 클릭했을 때 선택 상태를 토글
 *
 * @param {SelectableRowType | RowType} row - 선택할 행 데이터
 * @param {boolean} isSelectableTable
 * @param {selectableTableStateType} selectableTableState
 */
export const handleRowClick = (
  row: SelectableRowType | RowType,
  isSelectableTable: boolean,
  selectableTableState?: selectableTableStateType
) => {
  if (isSelectableTable && 'label' in row && 'status' in row) {
    if (selectableTableState?.selectedRow?.label === row.label) {
      selectableTableState?.setSelectedRow?.(undefined) // 이미 선택된 경우 선택 해제
    } else {
      selectableTableState?.setSelectedRow?.({
        label: row.label as string,
        status: row.status as boolean,
      }) // 새로운 행 선택
    }
  }
}

/**
 * @function formattedCellData 셀(cell)에 들어갈 데이터를 반환
 *
 * @param {string} key - 현재 셀의 키 값
 * @param {SelectableRowType | RowType} row
 * @param {(row: SelectableRowType | RowType) => React.ReactNode} data
 *
 * @returns {string} 포맷된 셀 내용 (data ? data : '-')
 */
export const formattedCellData = (
  key: string,
  row: SelectableRowType | RowType,
  data?: (
    row: SelectableRowType | RowType
  ) =>
    | string
    | number
    | boolean
    | Record<string, string | number | boolean>
    | undefined
): string => {
  const content = data ? data(row) : row[key]

  if (typeof content === 'object' && content !== null) {
    // 객체인 경우 해당 key에 맞는 값을 반환
    return String(content[key] || '-')
  }
  return String(content || '-')
}
