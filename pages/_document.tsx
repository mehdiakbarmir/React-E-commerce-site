import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add any global meta tags or links here */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <body suppressHydrationWarning={true}>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{
            __html: `
              // Aggressive cleanup of browser extension attributes
              (function() {
                function cleanupAttributes() {
                  document.querySelectorAll('*').forEach(el => {
                    const attributesToRemove = [];
                    for (let i = 0; i < el.attributes.length; i++) {
                      const attr = el.attributes[i];
                      if (attr.name.startsWith('bis_') || 
                          attr.name.startsWith('__') || 
                          attr.name.includes('skin_checked') ||
                          attr.name.includes('data-') && !attr.name.startsWith('data-next') ||
                          attr.name === 'style' && attr.value === '') {
                        attributesToRemove.push(attr.name);
                      }
                    }
                    attributesToRemove.forEach(attr => el.removeAttribute(attr));
                  });
                }
                
                // Run immediately
                cleanupAttributes();
                
                // Run after DOM content loaded
                document.addEventListener('DOMContentLoaded', cleanupAttributes);
                
                // Run after window load
                window.addEventListener('load', cleanupAttributes);
                
                // Run periodically
                setInterval(cleanupAttributes, 100);
              })();
            `
          }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 