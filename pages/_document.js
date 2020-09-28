import Document, { Head, Main, NextScript } from "next/document";
// import "slick-carousel/slick/slick.css";
import "../static/index.css";

// import "slick-carousel/slick/slick-theme.css";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link
            href="//db.onlinewebfonts.com/c/175bb37214e59d8e24ee6ea635b2eeff?family=Px+Grotesk+Bold"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
