import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import PageHeading from 'components/PageHeading'
import collection5 from 'data/collection5'
import { useActualLinkName } from 'lib'

const Collection5 = () => {
  const title = useActualLinkName()
  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      <Gallery items={collection5} urlPrefix="/images/collection5/" />
    </Layout>
  )
}

export default Collection5
