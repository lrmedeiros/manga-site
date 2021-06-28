import { AppProps } from 'next/dist/next-server/lib/router/router'
import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
