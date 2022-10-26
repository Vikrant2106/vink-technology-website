import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Vink Technology Private Limited</title>
          <meta charset="UTF-8" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}

          <meta name="robots" content="index, follow" />
          <meta name="author" content="vvintech.com" />
          <meta name="copyright" content="vvintech.com" />
          <meta name="Publisher" content="Vink Technology Private Limited" />
          <Script src="js/jquery.min.js" strategy="beforeInteractive" />
          <Script
            src="js/bootstrap.bundle.min.js"
            strategy="beforeInteractive"
          />
          <Script src="js/wow.min.js" strategy="beforeInteractive" />
          <Script src="js/owl.carousel.min.js" strategy="beforeInteractive" />
          <Script
            src="js/jquery.magnific-popup.min.js"
            strategy="beforeInteractive"
          />
          <Script src="js/meanmenu.js" strategy="beforeInteractive" />
          <Script
            src="js/jquery.ajaxchimp.min.js"
            strategy="beforeInteractive"
          />
          <Script src="js/form-validator.min.js" strategy="beforeInteractive" />
          <Script
            src="js/contact-form-script.js"
            strategy="beforeInteractive"
          />
          <Script src="js/custom.js" strategy="lazyOnload" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
