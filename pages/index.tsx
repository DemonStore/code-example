import Layout from 'components/Layout'
import Banners, { BannerItem } from 'components/Banners'
import { COLLECTION2, COLLECTION1, COLLECTION3, COLLECTION5 } from 'data/links'

import styles from './index.module.scss'

const topBanners: BannerItem[] = [
  {
    image: '/images/home/hero.jpg',
    name: 'Lorem ipsum dolor sit amet, consectetur',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, repudiandae?`,
    href: COLLECTION1[1]
  },
  {
    image: '/images/home/cup.jpg',
    name: 'Lorem ipsum dolor sit amet, consectetur',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, repudiandae?`
  }
]

const bottomBanners: BannerItem[] = [
  {
    image: '/images/home/chess.jpg',
    name: COLLECTION2[0],
    href: COLLECTION2[1]
  },
  {
    image: '/images/home/souvenirs.jpg',
    name: COLLECTION3[0],
    href: COLLECTION3[1]
  },
  {
    image: '/images/home/products.jpg',
    name: COLLECTION5[0],
    href: COLLECTION5[1]
  }
]

const IndexPage = () => {
  return (
    <Layout title="Lorem ipsum dolor sit">
      <Banners banners={topBanners} sm={12} md={6} imgMixClass={styles.bannerImg} />
      <Banners banners={bottomBanners} sm={12} md={4} />
    </Layout>
  )
}

export default IndexPage
