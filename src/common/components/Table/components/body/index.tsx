import styles from "../../style.module.scss";
import FixedContents from "./components/fixedContents";
import ScrollableContents from "./components/scrollableContents";
import { BodyProps } from "./type";
import EmptyContent from "./components/emptyContent";
import {
    getTableRowClassNames,
    handleMouseEnter,
    handleRowClick,
} from "../../../../../funcs/utils/table/common/body.utils";
import { RowType, SelectableRowType } from "../../type";

const Body = <T extends SelectableRowType | RowType>({
    verticalScrollData,
    headerTitleList,
    isHorizontalScrollable,
    isSelectableTable,
    renderFixedContent,
    renderScrollableContent,
    selectableTableState,
}: BodyProps<T>) => {
    return (
        <tbody className={styles.body}>
            {verticalScrollData.length === 0 ? (
                <EmptyContent isHorizontalScrollable={isHorizontalScrollable} />
            ) : (
                verticalScrollData.map((row, rowIndex) => (
                    <tr
                        key={row.key || rowIndex}
                        onClick={() =>
                            handleRowClick(
                                row,
                                isSelectableTable,
                                selectableTableState
                            )
                        }
                        onMouseEnter={() =>
                            handleMouseEnter(
                                row,
                                isSelectableTable,
                                selectableTableState
                            )
                        }
                        onMouseLeave={() =>
                            selectableTableState?.setFocusedRow?.(undefined)
                        }
                        className={getTableRowClassNames(
                            row,
                            isSelectableTable,
                            isHorizontalScrollable,
                            styles,
                            selectableTableState
                        )}
                    >
                        {isHorizontalScrollable ? (
                            /* isHorizontalScrollable (가로스크롤 기능 O) */
                            <>
                                <FixedContents
                                    row={row}
                                    isSelectableTable={isSelectableTable}
                                    renderFixedContent={renderFixedContent}
                                    selectableTableState={selectableTableState}
                                />
                                <ScrollableContents
                                    row={row}
                                    headerTitleList={headerTitleList}
                                    renderScrollableContent={
                                        renderScrollableContent
                                    }
                                    selectableTableState={selectableTableState}
                                />
                            </>
                        ) : (
                            /* !isHorizontalScrollable (가로스크롤 기능 X) */
                            headerTitleList.map((key, index) => {
                                return (
                                    <td key={`${key}-${index}`}>
                                        {String(row[key])}
                                    </td>
                                );
                            })
                        )}
                    </tr>
                ))
            )}
        </tbody>
    );
};
export default Body;
