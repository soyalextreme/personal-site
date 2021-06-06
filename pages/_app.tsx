import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Signika:wght@600;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Pagina sobre el curso definitivo de HTML y CSS, esta pagina te mostrara lo aprendido durnate el curso."
        />
        <meta name="robots" content="index,follow" />
        <title>Alejandro AS | Portafolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/3f74b5250f.js"
          crossOrigin="anonymous"
        ></script>
        {/* Oswald font import */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
