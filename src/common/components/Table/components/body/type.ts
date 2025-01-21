import {
    RowType,
    SelectableRowType,
    selectableTableStateType,
} from "../../type";
import React from "react";

export type BodyProps<T extends SelectableRowType | RowType> = {
    verticalScrollData: T[];
    headerTitleList: string[];
    isHorizontalScrollable: boolean;
    isSelectableTable: boolean;
    renderFixedContent?: (row: SelectableRowType | RowType) => React.ReactNode;
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
