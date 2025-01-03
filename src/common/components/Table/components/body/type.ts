import {
  DataType,
  RowType,
  SelectableRowType,
  selectableTableStateType,
} from '../../type'
import React from 'react'

export type BodyProps<T extends boolean> = {
  verticalScrollData: DataType<T>[]
  headerTitleList: string[]
  isHorizontalScrollable: boolean
  isSelectableTable: boolean
  renderFixedContent?: (row: SelectableRowType | RowType) => React.ReactNode
  renderScrollableContent?: (
    row: SelectableRowType | RowType
  ) => React.ReactNode
  selectableTableState?: selectableTableStateType
}
