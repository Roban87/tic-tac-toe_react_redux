interface Player {
  name: string;
  steps: number;
  wins: number;
}

const aggregatedScores = (scores: Player[]): Player[] => {
  const aggregatedArray: Player[] = [];

  const names: string[] = [...new Set<string>(scores.map(item => item.name))];

  names.forEach(name => {
    const totalWins: number = scores
      .filter(data => data.name === name)
      .map(data => data.wins)
      .reduce((wins, curr: number) => wins + curr);

    const leastSteps: number = Math.min(
      ...scores.filter(data => data.name === name).map(data => data.steps)
    );

    aggregatedArray.push({ name, steps: leastSteps, wins: totalWins });
  });

  return aggregatedArray;
};

export default aggregatedScores;
