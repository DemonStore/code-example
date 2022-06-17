import { Alert } from 'react-bootstrap'

import Layout from 'components/Layout'
import { useActualLinkName } from 'lib'

const Collection2 = () => {
  const title = useActualLinkName()
  return (
    <Layout title={title}>
      <Alert variant="secondary">
        <Alert.Heading as="h4">{title}</Alert.Heading>
        <p>В разработке</p>
      </Alert>
    </Layout>
  )
}

export default Collection2
