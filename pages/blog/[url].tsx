import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

import Layout from 'components/Layout'
import Post from 'components/Post'
import PageHeading from 'components/PageHeading'

import posts from 'data/posts'
import { BLOG } from 'data/links'

import styles from './[url].module.scss'

type Props = {
  url: string
}

const BlogPost = ({ url }: Props) => {
  const post = posts.find((p) => p.url === url)
  const postName = post ? post.name : ''
  return (
    <Layout title={postName} keywords={post?.keywords}>
      {post && (
        <article>
          <Link href={BLOG[1]} passHref>
            <Button className={styles.button} size="sm">
              « Назад к блогу
            </Button>
          </Link>
          <PageHeading className={styles.heading}>{postName}</PageHeading>
          <Post showFullContent data={post} />
        </article>
      )}
    </Layout>
  )
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map(({ url }) => ({
    params: { url }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = params?.url
  return { props: { url } }
}
