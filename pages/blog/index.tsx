import Link from 'next/link'
import { Button } from 'react-bootstrap'

import Layout from 'components/Layout'
import Post from 'components/Post'
import PageHeading from 'components/PageHeading'

import posts from 'data/posts'
import { useActualLinkName } from 'lib'

import styles from './index.module.scss'

const BlogPage = () => {
  const title = useActualLinkName()
  return (
    <Layout title={title}>
      <PageHeading>{title}</PageHeading>
      {posts.map((post) => {
        const showShortContent = Boolean(post.renderShortContent)
        return (
          <article key={post.url} className={styles.post}>
            <h3>
              <Link href="/blog/[url]" as={`/blog/${post.url}`}>
                <a>{post.name}</a>
              </Link>
            </h3>
            <Post data={post} showFullContent={!showShortContent} />
            {showShortContent && (
              <Button size="sm" href={`/blog/${post.url}`}>
                Читать далее »
              </Button>
            )}
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogPage
