import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Banners, { BannerItem } from 'components/Banners'
import { SUBCOLLECTION1, SUBCOLLECTION2 } from 'data/links'
import { useActualLinkName } from 'lib'

const banners: BannerItem[] = [
  {
    image: '/images/collection2/28.jpg',
    name: SUBCOLLECTION1[0],
    href: SUBCOLLECTION1[1]
  },
  {
    name: SUBCOLLECTION2[0],
    href: SUBCOLLECTION2[1]
  }
]

const Collection2 = () => {
  const title = useActualLinkName()

  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      <Banners banners={banners} md={6} />
    </Layout>
  )
}

export default Collection2
