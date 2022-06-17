import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

import { pageview } from 'lib/gtag'
import { hit } from 'lib/ytag'

import 'styles/all.scss'

const handleRouteChange = (url: string) => {
  pageview(url)
  hit(url)
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return <Component {...pageProps} />
}