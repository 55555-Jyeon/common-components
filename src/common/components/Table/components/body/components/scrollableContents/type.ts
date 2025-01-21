import {
    RowType,
    SelectableRowType,
    selectableTableStateType,
} from "../../../../type";

export type ScrollableContentsProps = {
    row: SelectableRowType | RowType;
    headerTitleList: string[];
    renderScrollableContent?: (
        row: SelectableRowType | RowType
    ) =>
        | string
        | number
        | boolean
        | Record<string, string | number | boolean>
        | undefined;
    selectableTableState?: selectableTableStateType;
};
