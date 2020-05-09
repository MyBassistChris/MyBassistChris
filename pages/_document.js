import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navbar />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument