import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import PageHeading from 'components/PageHeading'
import collection3 from 'data/collection3'
import { useActualLinkName } from 'lib'

const Collection3 = () => {
  const title = useActualLinkName()
  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      <Gallery items={collection3} urlPrefix="/images/collection3/" />
    </Layout>
  )
}

export default Collection3
