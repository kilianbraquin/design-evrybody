import { getCssText } from "@stitches";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="fr">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          {[
            "rubik-regular.woff2",
            "karla-regular.woff2",
            "rubik-bold.woff2",
          ].map((font) => (
            <link
              key={font}
              rel="preload"
              href={`/fonts/${font}`}
              as="font"
              type="font/woff2"
              crossOrigin=""
            />
          ))}
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
