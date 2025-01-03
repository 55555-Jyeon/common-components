import {
  RowType,
  SelectableRowType,
  selectableTableStateType,
} from '../../../../type'

export type ScrollableContentsProps = {
  row: SelectableRowType | RowType
  headerTitleList: string[]
  renderScrollableContent?: (
    row: SelectableRowType | RowType
  ) => React.ReactNode
  selectableTableState?: selectableTableStateType
}
