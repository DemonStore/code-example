import styles from './Backdrop.module.scss'

export type Props = {
  onClick: () => void
}

export const Backdrop = ({ onClick }: Props) => {
  return <div className={styles.base} onClick={onClick} />
}
