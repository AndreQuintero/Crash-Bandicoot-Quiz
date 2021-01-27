import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { bg, title, description } from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{description}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input ref={input} name={name} onChange={(e) => setName(e.target.value)} placeholder="Diz aí seu nome pra jogar :)" />
              <Button disabled={name.length === 0} type="submit">
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AndreQuintero" />
    </QuizBackground>
  );
}
