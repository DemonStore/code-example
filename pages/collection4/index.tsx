import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import PageHeading from 'components/PageHeading'
import collection4 from 'data/collection4'
import { useActualLinkName } from 'lib'

const Collection4 = () => {
  const title = useActualLinkName()
  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      <Gallery items={collection4} urlPrefix="/images/collection4/" />
    </Layout>
  )
}

export default Collection4
