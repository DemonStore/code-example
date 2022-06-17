import { useCallback } from 'react'
import { Figure } from 'react-bootstrap'

import { GalleryItem, Props as GalleryProps } from 'components/Gallery'

import styles from './index.module.scss'

type Props = Pick<GalleryProps, 'urlPrefix'> &
  Readonly<{
    item: GalleryItem
    onClick: () => void
  }>

const GalleryImage = ({ urlPrefix, item, onClick }: Props) => {
  const clickHandler = useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <Figure
      className={styles.base}
      itemScope
      itemType="http://schema.org/ImageObject"
      onClick={clickHandler}
    >
      <div className={styles.image}>
        <img
          className={styles.imageValue}
          src={`${urlPrefix}thumbnails/${item.image}`}
          alt={item.title}
        />
        <meta itemProp="thumbnail" content={`${urlPrefix}thumbnails/${item.image}`} />
        <meta itemProp="image" content={`${urlPrefix}${item.image}`} />
      </div>
      {item?.title && (
        <Figure.Caption as="h3" className={styles.caption} itemProp="name">
          {item.title}
        </Figure.Caption>
      )}
    </Figure>
  )
}

export default GalleryImage
