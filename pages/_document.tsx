import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />

        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=block'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css?family=Roboto+Condensed|Lato:300,700|Oswald|Fjalla+One|Raleway:200&display=block'
          rel='stylesheet'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
