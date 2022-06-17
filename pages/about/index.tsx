import { Col, Row } from 'react-bootstrap'

import { useActualLinkName } from 'lib'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

import styles from './index.module.scss'

const AboutPage = () => {
  const title = useActualLinkName()
  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      <div className={styles.post}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error illo in ipsam modi nihil nulla officia possimus recusandae vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore dolores eligendi explicabo illum nemo placeat porro possimus quaerat quis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi beatae dolores earum enim fugiat numquam officia placeat quae. Consequuntur dolore ducimus nulla optio placeat quas recusandae, tempora voluptatibus voluptatum. Impedit ipsam molestiae nihil voluptas voluptatum! Iusto officiis, veniam.
        </p>
      </div>
      <Row>
        <Col md={6} lg={3} className={styles.imageColumn}>
          <img
            className={styles.image}
            src="/images/about/about.jpg"
            alt="Lorem ipsum dolor"
          />
        </Col>
        <Col md={6} lg={9} className={styles.post}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis inventore ipsa ipsam, laborum maxime minus necessitatibus rerum similique veniam voluptate. Iure placeat quia quo. Ad dignissimos eaque enim in incidunt quae quam quas sint voluptatem. Accusamus cupiditate mollitia suscipit. Cum delectus eaque eius fuga fugit necessitatibus, nesciunt qui quos repellendus?
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Col>
      </Row>
    </Layout>
  )
}

export default AboutPage
