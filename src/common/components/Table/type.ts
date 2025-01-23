/**
 * @typedef {Object} SelectableRowType
 *
 * @property {string} label - 행의 이름
 * @property {boolean} status - 활성화 여부
 * @property {string | number | undefined} [key] - 고유 키
 * @property {string | boolean | number | undefined | Record<string, string | boolean | number>} [key: string] - 확장 가능한 프로퍼티
 */
export type SelectableRowType = {
  label: string
  status: boolean
  key?: string | number | undefined
  value?: Record<string, string | boolean | number>
  [key: string]:
    | string
    | boolean
    | number
    | undefined
    | Record<string, string | boolean | number>
}

/**
 * @typedef {Object} RowType
 *
 * @property {string} label - 행의 이름
 * @property {boolean} status - 활성화 여부
 * @property {string | number} [key] - 고유 키
 * @property {string | number | boolean | undefined} [key: string] - 확장 가능한 프로퍼티
 */
export type RowType = {
  label?: string
  status?: boolean
  key?: string | number
  [key: string]: string | number | boolean | undefined
}

export type HeaderCellType = {
  idx: number
  label: string
}

export type PositionType = {
  x: number
  y: number
}

// 테이블의 행, 열을 선택할 수 있는 경우 필요한 type
export type selectableTableStateType = {
  selectedHeaderCell?: HeaderCellType
  setSelectedHeaderCell?: (selectedHeaderCell: HeaderCellType) => void
  rowList?: SelectableRowType[]
  setRowList?: React.Dispatch<React.SetStateAction<SelectableRowType[]>>
  selectedRow?: SelectableRowType
  setSelectedRow?: (row: SelectableRowType | undefined) => void
  focusedRow?: SelectableRowType
  setFocusedRow?: (row: SelectableRowType | undefined) => void
  modalPosition?: PositionType
  setModalPosition?: (position: PositionType | undefined) => void
  needAdditionalFuncs?: {
    detailInfoModal?: boolean
    rowActivation?: boolean
  }
}

/**
 * @template T
 * @typedef {T extends true ? SelectableRowType : RowType} DataType
 */
export type DataType<T extends boolean> = T extends true
  ? SelectableRowType
  : RowType

export type MMTableProps<T extends boolean> = {
  headerTitleList: string[]
  isHorizontalScrollable: boolean
  isSelectableTable: T
  verticalScrollData: (SelectableRowType | RowType)[]
  renderFixedContent?: (row: SelectableRowType | RowType) => React.ReactNode
  renderScrollableContent?: (
    row: SelectableRowType | RowType
  ) =>
    | string
    | number
    | boolean
    | Record<string, string | number | boolean>
    | undefined
  selectableTableState?: selectableTableStateType
}
