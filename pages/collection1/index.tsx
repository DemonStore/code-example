import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import PageHeading from 'components/PageHeading'
import collection1 from 'data/collection1'

import styles from './index.module.scss'

const title = 'Lorem ipsum dolor sit amet, consectetur'

const Collection1 = () => {
  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      <div className={styles.info}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae corporis ipsum, laborum nobis quaerat quis sapiente sunt temporibus velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eveniet, ex mollitia obcaecati similique ullam! Adipisci corporis earum minus non nulla omnis pariatur repellendus ullam voluptate. Deserunt dolor explicabo ipsum iure provident rem unde, voluptatem voluptates! Consequatur cumque nostrum ut.
        </p>
      </div>
      <Gallery items={collection1} urlPrefix="/images/collection1/" />
    </Layout>
  )
}

export default Collection1
