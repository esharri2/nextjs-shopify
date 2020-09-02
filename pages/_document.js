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
          a {
            color: ${theme.colors.dark};
            text-decoration: none;
          }
          body {
            font-family: ${theme.fontFamily.body};
            font-size: 16px;
          }
          button {
            background-color: transparent;
            border: none;
          }
          svg {
            width: 100%;
            fill: inherit;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
