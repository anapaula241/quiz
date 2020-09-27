import React from 'react';
import Radio from './Form/Radio';
import './Form/App.css';

const perguntas = [
  {
    pergunta: 'De quem é a famosa frase "Penso, logo existo?',
    options: [
      'Platão',
      'Galileu Galilei',
      'Descartes',
    ],
    resposta: 'Descartes',
    id: 'p1',
  },
  {
    pergunta: 'Qual o número mínimo de jogadores numa partida de futebol ?',
    options: [
      'sete',
      'nove',
      'oito',
    ],
    resposta: 'sete',
    id: 'p2',
  },
  {
    pergunta: 'Qual a nacionalidade de Che Guevara?',
    options: ['Boliviana', 'Argentina', 'Cubana'],
    resposta: 'Argentina',
    id: 'p3',
  },
  {
    pergunta: 'Qual data é comemorada em novembro?',
    options: ['Proclamação da República', 'Independência do Brasil', 'Carnaval'],
    resposta: 'Proclamação da República',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
          <button className=" btn btn-primary m-4" onClick={handleClick}>Próxima</button>
        )}
    </form>

  );
};

export default App;
