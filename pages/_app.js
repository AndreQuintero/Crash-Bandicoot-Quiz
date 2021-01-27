/* eslint-disable react/jsx-props-no-spreading */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  // Deixa branco no começo
  // eslint-disable-next-line no-shadow
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Crash Bandicoot It&apos;s About Time Quiz</title>
        <meta name="title" content="Crash Bandicoot It's About Time Quiz" />
        <meta name="description" content="Quiz sobre o jogo Crash Bandicoot It's About Time." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crash-bandicoot-quiz.vercel.app/" />
        <meta property="og:title" content="Crash Bandicoot It's About Time Quiz" />
        <meta property="og:description" content="Quiz sobre o jogo Crash Bandicoot It's About Time." />
        <meta property="og:image" content="https://i.ibb.co/09pS05w/metatag.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://crash-bandicoot-quiz.vercel.app/" />
        <meta property="twitter:title" content="Crash Bandicoot It's About Time Quiz" />
        <meta property="twitter:description" content="Quiz sobre o jogo Crash Bandicoot It's About Time." />
        <meta property="twitter:image" content="https://i.ibb.co/09pS05w/metatag.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
