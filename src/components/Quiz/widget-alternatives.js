import React, { useEffect, useState } from 'react';
import colors from '../../enum/colors';
import Widget from '../Widget';

const WidgetAlternatives = ({
  index, question, handleSelected, selected,
  onClick, questionId, alternative, idAlternative, addResults,
}) => {
  const [changeColor, setChangeColor] = useState(colors.DEFAULT);
  const isCorrect = question.answer === index;
  useEffect(() => {
    if (isCorrect) {
      setChangeColor(colors.GREEN);
    }
  }, []);

  const resposta = () => {
    if (!selected) {
      handleSelected(true);
      if (!isCorrect) {
        setChangeColor(colors.RED);
      }
    }
  };

  return (
    <Widget.Topic
      as="label"
      htmlFor={idAlternative}
      delay={`${0.2 * index}s`}
      color={changeColor}
      selected={selected}
    >
      <input
        style={{ display: 'none' }}
        id={idAlternative}
        name={questionId}
        type="radio"
        onClick={(e) => {
          resposta();
          onClick(e, index);
          if (!selected) {
            addResults(question, alternative, isCorrect);
          }
        }}
      />
      {alternative}
    </Widget.Topic>
  );
};

export default WidgetAlternatives;
