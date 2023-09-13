import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='antialiased'>
      <Head />

      <body className='bg-defaultBgColor text-defaultText font-normal pb-16'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
