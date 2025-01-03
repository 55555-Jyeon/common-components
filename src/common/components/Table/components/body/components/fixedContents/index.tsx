import React, { useCallback } from 'react'
import { BasicIcons } from '../../../../../../../assets/icons'
import styles from './style.module.scss'
import { FixedContentsProps } from './type'
import {
  onClickShowDetailModal,
  toggleStatus,
} from '../../../../../../../funcs/utils/table/common/additional.utils'

const FixedContents = ({
  row,
  isSelectableTable,
  renderFixedContent,
  selectableTableState,
}: FixedContentsProps) => {
  const onClickToggleStatus = useCallback(() => {
    if (selectableTableState?.setRowList) {
      toggleStatus(row.label, selectableTableState)
    }
  }, [row.label, selectableTableState?.setRowList])

  const handleDetailClick = useCallback(
    (event: React.MouseEvent) =>
      onClickShowDetailModal(
        event,
        row,
        isSelectableTable,
        selectableTableState
      ),
    [
      isSelectableTable,
      selectableTableState?.setSelectedRow,
      selectableTableState?.setModalPosition,
    ]
  )

  return (
    <td className={styles.fixedContents}>
      <p>
        <span>{renderFixedContent ? renderFixedContent(row) : null}</span>
        {/* 테이블 행의 활성화 가능 여부 */}
        {selectableTableState?.needAdditionalFuncs?.rowActivation && (
          <span onClick={onClickToggleStatus} className={styles.isActivate}>
            <img
              src={row.status ? BasicIcons.eye.open : BasicIcons.eye.close}
              alt='activate'
            />
          </span>
        )}
        {/* 테이블의 행에 detailInfo 모달 제공 여부 */}
        {selectableTableState?.needAdditionalFuncs?.detailInfoModal &&
          selectableTableState.focusedRow?.label === row.label && (
            <span className={styles.infoButton}>
              <button onClick={(e) => handleDetailClick(e)}>
                <p>+</p>
              </button>
            </span>
          )}
      </p>
    </td>
  )
}

export default FixedContents
