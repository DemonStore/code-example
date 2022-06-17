import { Alert } from 'react-bootstrap'

import Layout from 'components/Layout'

const Custom404 = () => {
  const title = 'Страница не найдена'
  return (
    <Layout title={title}>
      <Alert variant="secondary">
        <Alert.Heading as="h4">{title}</Alert.Heading>
        <p>Возможно она перемещена или удалена, воспользуйтесь навигацией вверху страницы.</p>
      </Alert>
    </Layout>
  )
}

export default Custom404
