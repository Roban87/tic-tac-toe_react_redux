const chooseStarterPlayer = (arr: string[]): string => {
  const starterIndex: number = Math.round(Math.random() * (arr.length - 1));
  return arr[starterIndex];
};

export default chooseStarterPlayer;
