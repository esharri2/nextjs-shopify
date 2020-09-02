import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          html,
          body {
            margin: 0;
          }
          html {
            background-color: ${theme.colors.light};
          }
          body {
            font-family: ${theme.fontFamily.body};
            font-size: 16px;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
