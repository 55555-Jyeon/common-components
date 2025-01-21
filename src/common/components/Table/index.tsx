import React, { useCallback, useEffect, useMemo } from 'react'
import clsx from 'clsx'
import { DetailModal } from '../../../Main/sections/ContentsSection/Valve/Trend/components/historyTable/components/DetailModal'
import { MMTableProps } from './type'
import styles from './style.module.scss'
import Header from './components/header'
import Body from './components/body'
import {
  getHeaderProps,
  handleHeaderClick,
  initializeHeaderState,
} from '../../../funcs/utils/table/common/header.utils'

/**
 * @name MMTable Movids-M의 공용 표 컴포넌트
 * @description
 * MMTable 컴포넌트는 동적으로 헤더와 본문을 렌더링하는 테이블을 제공
 * 기본적으로 표 높이 초과 시 세로 스크롤 기능을 제공하며 props를 통해 가로 스크롤 여부, 표의 열과 행 선택 가능 여부 등 설정 가능
 *
 * @template T - 테이블의 선택 가능 여부에 대한 타입을 설정
 * @param {Object} props - 컴포넌트의 props.
 * @param {string[]} props.headerTitleList - thead 부분에 표시될 이름 목록
 * @param {boolean} props.isHorizontalScrollable - 테이블이 가로로 스크롤을 가능하게 할 지에 대한 여부
 * @param {boolean} props.isSelectableTable - 표의 열과 행을 선택 가능하게 할 것인지에 대한 여부
 * @param {Array} props.verticalScrollData - 가로 스크롤이 가능할 경우, tbody 부분에 표시될 데이터 목록
 * @param {ReactNode} props.renderFixedContent - 가로 스크롤이 가능할 경우, 고정되게 할 표의 첫 번째 열에 해당하는 데이터 목록
 * @param {ReactNode} props.renderScrollableContent - 가로 스크롤이 가능할 경우, tbody 부분에 표시될 데이터 목록
 * @returns {JSX.Element} - 위 조건들을 충족하는 표 컴포넌트를 반환
 */
const MMTable = <T extends boolean>({
  headerTitleList,
  isHorizontalScrollable,
  isSelectableTable,
  verticalScrollData,
  renderFixedContent,
  renderScrollableContent,
  selectableTableState,
}: MMTableProps<T>) => {
  const memoizedTableState = useMemo(
    () => selectableTableState,
    [selectableTableState]
  )

  /**
   * @effect 가로 스크롤을 위한 기능으로 전달 받은 headerTitleList 중에서 1번째 인덱스를 기본 선택 값을 설정하는 사이드 이펙트
   * @description 0번째 인덱스는 가로 스크롤 시 고정되는 값이므로 제외되며 headerTitleList 값이 변경될 때만 실행
   * @dependencies headerTitleList
   * */
  useEffect(() => {
    initializeHeaderState(
      headerTitleList,
      memoizedTableState?.setSelectedHeaderCell
    )
  }, [headerTitleList])

  const onHeaderClick = useCallback(
    (label: string, index: number) =>
      handleHeaderClick(
        label,
        index,
        memoizedTableState?.setSelectedHeaderCell
      ),
    [memoizedTableState]
  )

  const headerPropsGetter = useCallback(
    (title: string, index: number) =>
      getHeaderProps(
        title,
        index,
        onHeaderClick,
        styles,
        memoizedTableState?.selectedHeaderCell
      ),
    [memoizedTableState, onHeaderClick]
  )

  return (
    <div
      className={clsx(styles.container, {
        [styles.fullPageContainer]: !isHorizontalScrollable,
        [styles.halfPageContainer]: isHorizontalScrollable,
      })}
    >
      <table
        className={clsx({
          [styles.table]: !isHorizontalScrollable,
          [styles.HorizontalScrollableTable]: isHorizontalScrollable,
        })}
      >
        <Header
          headerTitleList={headerTitleList}
          isHorizontalScrollable={isHorizontalScrollable}
          getHeaderProps={headerPropsGetter}
        />
        <Body
          headerTitleList={headerTitleList}
          isHorizontalScrollable={isHorizontalScrollable}
          isSelectableTable={isSelectableTable}
          verticalScrollData={verticalScrollData}
          renderFixedContent={renderFixedContent}
          renderScrollableContent={renderScrollableContent}
          selectableTableState={memoizedTableState}
        />
      </table>
      {memoizedTableState?.modalPosition && (
        <DetailModal
          x={memoizedTableState.modalPosition.x}
          y={memoizedTableState.modalPosition.y}
          onClose={() => memoizedTableState.setModalPosition?.(undefined)}
        />
      )}
    </div>
  )
}

export default MMTable
