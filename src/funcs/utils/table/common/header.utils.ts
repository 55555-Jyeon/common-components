import clsx from 'clsx'

/**
 * @function initializeHeaderState
 * @description 0번째 인덱스는 가로 스크롤 시 고정되는 값이므로 제외되며 headerTitleList 값이 변경될 때만 실행
 * @param {string[]} headerTitleList - 헤더 제목 목록.
 * @param {(event: { idx: number; label: string }) => void} [setSelectedHeaderCell] - 선택된 헤더 셀 상태를 업데이트하는 함수.
 * */
export const initializeHeaderState = (
  headerTitleList: string[],
  setSelectedHeaderCell?: (event: { idx: number; label: string }) => void
) => {
  if (headerTitleList.length > 1 && setSelectedHeaderCell) {
    const defaultEvent = {
      idx: 1,
      label: headerTitleList[1],
    }
    setSelectedHeaderCell(defaultEvent)
  }
}

/**
 * @function handleHeaderClick
 * @description
 * isHorizontalScrollable && isSelectableTable일 경우에 필요한 기능
 * 전달 받은 headerTitleList 중에서 클릭된 데이터를 저장하는 함수
 * 0번째 인덱스는 고정되는 값이므로 선택이 불가능하도록 설정되어 있으며 저장되는 값은 전역으로 관리
 * */
export const handleHeaderClick = (
  label: string,
  index: number,
  setSelectedHeaderCell?: (event: { idx: number; label: string }) => void
) => {
  if (index === 0 || !setSelectedHeaderCell) return
  const newEvent = { idx: index, label }
  setSelectedHeaderCell(newEvent)
}

/**
 * @function getHeaderProps
 * @description 테이블 헤더의 셀에 대한 속성 객체를 반환하는 함수
 * 각 셀은 클릭 이벤트와 스타일을 적용하는 데 필요한 속성을 가지며  handleHeaderClick 함수 및 선택된 항목이 변경될 때마다 새로 생성
 * 기본적으로 0번째 인덱스는 클릭할 수 없도록 제한
 *
 * @param {string} title - 헤더 셀의 제목.
 * @param {number} index - 헤더 셀의 인덱스.
 * @returns {HeaderCellProps} - 헤더 셀에 적용할 속성 객체.
 *
 * [상황별 적용될 스타일 목록]
 * - selected : 클릭된 항목에게 적용
 * - disabled : 0번째 인덱스에게만 적용
 */
export const getHeaderProps = (
  title: string,
  index: number,
  handleClick: (label: string, index: number) => void,
  styles: Record<string, string>,
  selectedHeaderCell?: { label: string }
) => ({
  key: `${title}-${index}`,
  onClick: () => handleClick(title, index),
  className: clsx({
    [styles.selected]: selectedHeaderCell?.label === title,
    [styles.disabled]: index === 0,
  }),
})
