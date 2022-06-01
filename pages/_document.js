import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

function MyDocument() { 
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />

        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="../path/to/flowbite/dist/flowbite.js" strategy='beforeInteractive'></Script>
        </body>
      </Html>
    )
}

export default MyDocument