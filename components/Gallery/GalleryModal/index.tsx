import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { Spinner } from 'react-bootstrap'

import { Backdrop } from './Backdrop'
import { GalleryItem, Props as GalleryProps } from 'components/Gallery'

import styles from './index.module.scss'

type Props = Pick<GalleryProps, 'urlPrefix'> &
  Readonly<{
    item: GalleryItem | null
    onHide: () => void
  }>

const GalleryModal = ({ item, urlPrefix, onHide }: Props) => {
  const description = item?.renderContent && item?.renderContent()

  const [isLoaded, setIsLoaded] = useState(false)
  const handleLoad = useCallback(() => setIsLoaded(true), [])

  const imageClasses = classNames(styles.image, isLoaded && styles.image__loaded)

  useEffect(() => {
    const { style } = document.body;
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    style.overflow = 'hidden';
    style.paddingRight = `${scrollWidth}px`

    return () => {
      style.overflow = 'visible'
      style.paddingRight = '0'
    }
  }, [])

  return createPortal(
    <div className={styles.base}>
      <Backdrop onClick={onHide} />
      {!isLoaded && (
        <Spinner animation="border" variant="secondary" className={styles.spinner} />
      )}
      {Boolean(item) && (
        <img
          className={imageClasses}
          src={`${urlPrefix}${item?.image}`}
          alt={item?.title}
          onLoad={handleLoad}
        />
      )}
      <div className={styles.close} onClick={onHide}>×</div>
      {Boolean(description) && (
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>{description}</div>
        </div>
      )}
    </div>,
    document.body
  )
}

export default GalleryModal
