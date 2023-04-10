import Dice from './Dice';

export default function Board({
  className = 'Board App-board',
  name,
  color,
  gameHistory,
}) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  return (
    <div className={className}>
      <h1 className="Board-heading">{name}</h1>
      <Dice className="Dice" color={color} num={num} />
      <h2 className="Board-heading">총 점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기 록</h2>
      <p>{gameHistory.join(', ')}</p>
    </div>
  );
}
