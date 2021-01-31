import React from 'react';
import QuizComponent from '../../src/components/Quiz';
import { bg, questions } from '../../db.json';

export default function QuizPage() {
  return (
    <QuizComponent bg={bg} questions={questions} />
  );
}
