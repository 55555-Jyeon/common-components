import {
  RowType,
  SelectableRowType,
  selectableTableStateType,
} from '../../../../type'
import React from 'react'

export type FixedContentsProps = {
  row: SelectableRowType | RowType
  isSelectableTable: boolean
  renderFixedContent?: (row: SelectableRowType | RowType) => React.ReactNode
  selectableTableState?: selectableTableStateType
}
