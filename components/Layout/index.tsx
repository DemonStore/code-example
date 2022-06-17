import { PropsWithChildren } from 'react'
import { SSRProvider } from 'react-bootstrap'
import Head from 'next/head'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import Header from './Header'

import { domain } from 'lib/vercel'

import styles from './index.module.scss'

type Props = PropsWithChildren<{
  title: string
  description?: string
  keywords?: string
  image?: string
}>

const Layout = ({
  children,
  title,
  description,
  keywords,
  image = '/images/about/about.jpg'
}: Props) => {
  const router = useRouter()
  const currentPageUrl = `${domain}${router.pathname}`
  const imageFull = `${domain}${image}`
  const containerClasses = classNames('container', styles.container)

  return (
    <SSRProvider>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta name="title" content={title} />
        {keywords && <meta name="keywords" content={keywords} />}
        {description && <meta name="description" content={description} />}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content={currentPageUrl} />
        <meta property="og:site_name" content="example.com" />
        <meta property="og:image" content={imageFull} />
        {description && <meta property="og:description" content={description} />}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentPageUrl} />
        <meta property="twitter:title" content={title} />
        {description && <meta property="twitter:description" content={description} />}
        <meta property="twitter:image" content={imageFull} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Header />
      <div className={containerClasses}>{children}</div>
    </SSRProvider>
  )
}

export default Layout
