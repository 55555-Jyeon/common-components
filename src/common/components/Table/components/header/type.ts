export type HeaderCellProps = {
  key: string
  onClick: () => void
  className: string
}

export type HeaderProps = {
  headerTitleList: string[]
  isHorizontalScrollable: boolean
  getHeaderProps: (title: string, index: number) => HeaderCellProps
}
