import React from 'react';
import TableHeader from '../components/TableHeader/TableHeader';
import TableRow from '../components/TableRow/TableRow';
import { useAppSelector } from '../redux/hooks';
import aggregateScores from '../utilities/aggregateScores';

const ScoreBoard: React.FC = () => {
  const scores = useAppSelector(state => state.game.scores);
  const agregatedScores = aggregateScores(scores);

  return (
    <>
      <table className="score-board">
        <TableHeader scoreType="Wins" />
        <tbody>
          {agregatedScores
            .sort((a, b) => (a.wins < b.wins ? 1 : -1))
            .map((item, index) => {
              return (
                <TableRow name={item.name} rank={index + 1} score={item.wins} />
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
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ScoreBoard;
