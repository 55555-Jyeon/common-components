/**
 * @typedef {Object} SelectableRowType
 * @property {string} label - 행의 이름
 * @property {boolean} status - 활성화 여부
 * @property {any} [key] - 고유 키
 * @property {any} [key: string] - 확장 가능한 프로퍼티
 */
export type SelectableRowType = {
  label: string
  status: boolean
  [key: string]: any
  key?: string | number
}

/**
 * @typedef {Object} RowType
 * @property {any} [key] - 고유 키
 * @property {any} [key: string] - 확장 가능한 프로퍼티
 */
export type RowType = {
  [key: string]: any
  key?: string | number
}

export type HeaderCellType = {
  idx: number
  label: string
}
export type TableRowType = {
  label: string
  status: boolean
}
export type PositionType = {
  x: number
  y: number
}

export type selectableTableStateType =  {
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
    detailInfoModal?: boolean,
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
  verticalScrollData: DataType<T>[]
  renderFixedContent?: (row: SelectableRowType | RowType) => React.ReactNode
  renderScrollableContent?: (
    row: SelectableRowType | RowType
  ) => React.ReactNode
  selectableTableState?: selectableTableStateType
}
