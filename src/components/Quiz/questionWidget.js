import React, { useState } from 'react';
import Widget from '../Widget';
import WidgetAlternatives from './widget-alternatives';
import Img from '../Img';
import BackLinkArrow from '../BackLinkArrow';

const QuestionWidget = ({
  question, totalQuestions, questionIndex, onClick, addResults,
}) => {
  const questionId = `question__${questionIndex}`;
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Widget>
        <Widget.Header>
          <BackLinkArrow href="/" />
          <h3>Pergunta {questionIndex + 1} de {totalQuestions} </h3>
        </Widget.Header>
        <Img alt="Descrição" src={question.image} />
        <Widget.Content>
          <h2> {question.title} </h2>
          <p> {question.description} </p>
          <form>
            {question.alternatives.map((alternative, index) => {
              const idAlternative = `alternative-${index}`;
              return (

                <WidgetAlternatives
                  index={index}
                  question={question}
                  handleSelected={setSelected}
                  selected={selected}
                  onClick={onClick}
                  questionId={questionId}
                  alternative={alternative}
                  key={idAlternative}
                  addResults={addResults}
                />
              );
            })}
          </form>
        </Widget.Content>
      </Widget>
    </>
  );
};

export default QuestionWidget;
