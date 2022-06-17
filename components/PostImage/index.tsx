import classNames from 'classnames'
import { Figure } from 'react-bootstrap'

import styles from './index.module.scss'

export type ImageDimensions = Readonly<{
  width: number
  height: number
}>

export type Props = Partial<ImageDimensions> &
  Readonly<{
    src: string
    alt?: string
    caption?: string
    captionSmall?: string
    autoWidth?: boolean
  }>

const PostImage = ({
  src,
  alt,
  caption,
  captionSmall,
  autoWidth
}: Props) => {
  const imageClasses = classNames(styles.image, autoWidth && styles.image__auto);
  return (
    <Figure className={styles.base}>
      <img
        className={imageClasses}
        alt={alt}
        src={src}
      />
      <Figure.Caption className={styles.caption}>
        {caption && <div>{caption}</div>}
        {captionSmall && <small>{captionSmall}</small>}
      </Figure.Caption>
    </Figure>
  )
}

export default PostImage
