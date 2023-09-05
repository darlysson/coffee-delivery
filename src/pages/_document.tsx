import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='antialiased'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <body className='bg-defaultBgColor text-defaultText font-roboto font-normal pb-16'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
