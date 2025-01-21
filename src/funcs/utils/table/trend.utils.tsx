import { EventType, TrialType } from '../../../types/valve/trend.type'
import {
  RowType,
  SelectableRowType,
} from '../../../common/components/Table/type'

/**
 * @description 트렌드 분석 페이지에서 사용되는 데이터를 공용 컴포넌트에서 사용할 수 있도록 가공해주는 유틸 함수
 * */

// 데이터 가공 함수
export const generateVerticalScrollData = (
  trialList: TrialType[],
  eventList: EventType[],
  data: number[][]
) => {
  return trialList.map((trial, trialIndex) => {
    const rowData = eventList.reduce(
      (acc, event, index) => {
        const value = data[trialIndex]?.[index] || '-'
        acc[event.label] = value
        return acc
      },
      {} as Record<string, any>
    )

    return {
      key: trial.label,
      label: trial.label,
      status: trial.status,
      value: rowData,
      ...rowData,
    }
  })
}

// 헤더 타이틀 생성 함수
export const generateHeaderTitles = (eventList: EventType[]) => {
  return ['가동 내역', ...eventList.map((event) => event.label)]
}

// 고정될 body의 첫 번째 열 반환
export const renderFixedContent = (row: SelectableRowType | RowType) => (
  <div>
    <span>{row.label}</span>
  </div>
)

// 스크롤 가능한 열 렌더링 함수
export const renderScrollableContent =
  () => (row: SelectableRowType | RowType) => {
    // console.log('row value', row.value)
    return row.value
  }
