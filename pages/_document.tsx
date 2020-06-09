import Document, { Html, Head, Main, NextScript } from 'next/document'
import Menu from "../components/Menu/Menu"
import Footer from "../components/Footer/Footer"
import ReactGA from 'react-ga'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    ReactGA.initialize('UA-155083063-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </Head>
        <body>
          <Menu />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument