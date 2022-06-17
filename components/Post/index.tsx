import { memo, ReactNode } from 'react'

import { formatDate } from 'lib'
import styles from './index.module.scss'

export type PostData = {
  url: string
  name: string
  date: Date
  keywords?: string
  renderShortContent?: () => ReactNode
  renderContent: () => ReactNode
}

type PostProps = {
  data: PostData
  showFullContent?: boolean
}

const Post = ({ data, showFullContent }: PostProps) => {
  const content = showFullContent ? data.renderContent : data.renderShortContent

  return (
    <div className={styles.base}>
      <div className={styles.date}>Опубликовано: {formatDate(data.date)}</div>
      {content && content()}
    </div>
  )
}

Post.defaultProps = {
  withoutLink: false
}

export default memo(Post)
