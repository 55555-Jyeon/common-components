import {
  RowType,
  SelectableRowType,
  selectableTableStateType,
} from '../../../../common/components/Table/type'

/**
 * @function toggleStatus
 * @description isSelectableTable인 경우, 클릭된 label 값에 해당하는 행의 활성화 여부를 변경하는 함수
 * @param {string} label - 클릭된 행의 라벨
 */
export const toggleStatus = (
  label: string,
  selectableTableState: selectableTableStateType
) => {
  if (selectableTableState?.setRowList) {
    selectableTableState?.setRowList((prevList: SelectableRowType[]) =>
      prevList.map((row) =>
        row.label === label ? { ...row, status: !row.status } : row
      )
    )
  }
}

/**
 * @function onClickShowDetailModal
 * @description 디테일 버튼 클릭 시 모달을 열어 위치를 설정
 *
 * @param {React.MouseEvent} event - 클릭 이벤트
 * @param {DataType<T>} row - 행 데이터
 */
export const onClickShowDetailModal = (
  event: React.MouseEvent,
  row: SelectableRowType | RowType,
  isSelectableTable: boolean,
  selectableTableState?: selectableTableStateType
) => {
  if (
    isSelectableTable &&
    selectableTableState?.setModalPosition &&
    selectableTableState?.setSelectedRow &&
    'label' in row &&
    'status' in row
  ) {
    event.stopPropagation()

    const position = {
      x: event.clientX,
      y: event.clientY,
    }

    // console.log('Setting modal position:', position) // 값 잘 나옴
    selectableTableState.setModalPosition(position)
    selectableTableState.setSelectedRow?.({
      label: row.label as string,
      status: row.status as boolean,
    })
  }
}
