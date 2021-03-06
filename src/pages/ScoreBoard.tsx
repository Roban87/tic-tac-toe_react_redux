import React from 'react';
import { useHistory } from 'react-router-dom';
import TableHeader from '../components/TableHeader/TableHeader';
import TableRow from '../components/TableRow/TableRow';
import Button from '../components/Button/Button';
import { useAppSelector } from '../redux/hooks';
import aggregateScores from '../utilities/aggregateScores';
import './styles/ScoreBoard.css';

const ScoreBoard: React.FC = () => {
  const scores = useAppSelector(state => state.game.scores);
  const agregatedScores = aggregateScores(scores);
  const history = useHistory();

  return (
    <main>
      <section>
        <table className="score-board">
          <TableHeader scoreType="Wins" />
          <tbody>
            {agregatedScores
              .sort((a, b) => (a.wins < b.wins ? 1 : -1))
              .map((item, index) => {
                return (
                  <TableRow
                    name={item.name}
                    rank={index + 1}
                    score={item.wins}
                    key={index.toString()}
                  />
                );
              })}
          </tbody>
        </table>
        <table className="score-board">
          <TableHeader scoreType="Steps" />
          <tbody>
            {agregatedScores
              .sort((a, b) => (a.steps > b.steps ? 1 : -1))
              .map((item, index) => {
                return (
                  <TableRow
                    name={item.name}
                    rank={index + 1}
                    score={item.steps}
                    key={index.toString()}
                  />
                );
              })}
          </tbody>
        </table>
      </section>
      <Button
        type="button"
        buttonText="back to Starting Page"
        onClickHandler={() => {
          history.push('/');
        }}
      />
    </main>
  );
};

export default ScoreBoard;
