import { Col, ListGroup, Row } from 'react-bootstrap'

import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'
import ContactsForm from 'components/ContactsForm'
import { useActualLinkName } from 'lib'

const ContactsPage = () => {
  const title = useActualLinkName()

  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      <Row>
        <Col lg={6}>
          <ContactsForm />
        </Col>
        <Col lg={6}>
          <ListGroup>
            <ListGroup.Item active>Звоните нам:</ListGroup.Item>
            <ListGroup.Item action href="tel:+375 29 111 22 33">
              +375 29 111-22-33 (WhatsApp)
            </ListGroup.Item>
            <ListGroup.Item action href="tel:+375 29 111 22 33">
              +375 29 111-22-33 (Viber)
            </ListGroup.Item>
            <ListGroup.Item active>E-mail:</ListGroup.Item>
            <ListGroup.Item action href="mailto:test1@example.com">
              test1@example.com
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Layout>
  )
}

export default ContactsPage
