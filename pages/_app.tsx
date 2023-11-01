import * as React from 'react'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'
// import {NextPage} from 'next'
import {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import '../css/app.scss'

import Layout from '@components/Layout'
import Redux from '@components/Redux'

// type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: React.ReactElement) => React.JSX.Element
// }

type AppPropsWithLayout = AppProps & {
  Component: any
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function App({
  Component,
  pageProps: {session, ...pageProps},
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: any) => {
      return <Layout>{page}</Layout>
    })

  React.useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  const title = 'Pat Wangrungarun'
  const description =
    'Front-end developer · React · Redux · Rails · Next.js · Node.js'

  return (
    <Redux>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description} />

          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1'
            // content='width=1300, viewport-fit=cover'
          />

          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:image' content='/images/og.png' />

          <link rel='icon' type='image/png' href='/images/pat.png' />

          <link rel='preconnect' href='https://fonts.gstatic.com' />

          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=block'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css?family=Roboto+Condensed|Lato:300,700|Oswald|Fjalla+One|Raleway:200&display=block'
            rel='stylesheet'
          />

          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-YC0W20YVMG'
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-YC0W20YVMG');
              `,
            }}
          />
        </Head>

        {getLayout(<Component {...pageProps} />)}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Redux>
  )
}
