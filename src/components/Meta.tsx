import Head from 'next/head';

function Meta() {
  return (
    <Head>
      <title>GalaxyWeather</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Acompanhe a previsão do tempo em tempo real com o GalaxyWeather. "
      />
      <meta name="keywords" content="next.js, typescript" />
      <meta name="author" content="Vitor" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Weather App" />
      <meta
        property="og:description"
        content="previsão do tempo em tempo real com o GalaxyWeather"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
