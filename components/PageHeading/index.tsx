import { PropsWithChildren } from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

type Props = PropsWithChildren<{
  className?: string
}>

const PageHeading = ({ children, className }: Props) => {
  const baseClasses = classNames(styles.base, className)

  return <h2 className={baseClasses}>{children}</h2>
}

export default PageHeading
