import { GA_TRACKING_ID } from 'lib/gtag'
import { YM_TRACKING_ID } from 'lib/ytag'

const gTagUrl = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
const gTagInitCode = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
`
const yTagInitCode = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(${YM_TRACKING_ID}, "init", {
        defer: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    });
`

const Analytics = () => (
  <>
    <script async src={gTagUrl} />
    <script dangerouslySetInnerHTML={{ __html: gTagInitCode }} />
    <script dangerouslySetInnerHTML={{ __html: yTagInitCode }} />
  </>
)

export default Analytics
