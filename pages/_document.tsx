// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

import Analytics from 'components/Analytics'

import { isProduction } from 'lib/vercel'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>{isProduction ? <Analytics /> : <meta name="robots" content="noindex" />}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
