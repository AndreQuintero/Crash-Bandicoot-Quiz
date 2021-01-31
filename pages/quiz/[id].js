import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizComponent from '../../src/components/Quiz';

export default function QuizDaGaleraPage({ bg, questions, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <QuizComponent external bg={bg} questions={questions} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const [projectName, githubUser] = id.split('___');
  let dbExternal = '';

  try {
    const resp = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`);
    dbExternal = await resp.json();
  } catch (e) {
    throw new Error('Falha ao obter dados');
  }

  return {
    props: {
      bg: dbExternal.bg,
      questions: dbExternal.questions,
      theme: dbExternal.theme,
    },
  };
}
