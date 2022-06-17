import classNames from 'classnames'
import { Card } from 'react-bootstrap'
import Link from 'next/link'

import { BannerItem, Props as BannersProps } from 'components/Banners'

import styles from './index.module.scss'

type Props = Pick<BannersProps, 'imgMixClass'> &
  Readonly<{
    banner: BannerItem
  }>

const Banner = ({ banner, imgMixClass }: Props) => {
  const baseClasses = classNames(styles.base, banner.href && styles.base__link)
  const imgClasses = classNames(styles.img, imgMixClass)
  const titleClasses = classNames('h5', styles.name);
  const cardInner = (
    <>
      <div className={imgClasses}>
        {banner.image ? (
          <img src={banner.image} className={styles.imgValue} alt={banner.name} />
        ) : (
          <div className={styles.imgPlaceholder}></div>
        )}
      </div>
      <Card.Body>
        <Card.Title as="h3" className={titleClasses}>
          {banner.name}
        </Card.Title>
        {banner.description && <Card.Text className={styles.text}>{banner.description}</Card.Text>}
      </Card.Body>
    </>
  )

  return banner.href ? (
    <Link href={banner.href} passHref>
      <Card as="a" className={baseClasses}>
        {cardInner}
      </Card>
    </Link>
  ) : (
    <Card className={baseClasses}>{cardInner}</Card>
  )
}

export default Banner
