import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';
import logo from './assets/logo.png';

function random(n) {
  return Math.ceil(Math.random() * n);
}

export default function App() {
  // const [num, setNum] = useState(1); 첫번째 주사위 값
  // const [sum, setSum] = useState(0); 현재 주사위 값
  // const [gameHistory, setGameHistory] = useState([]);
  const [myHistory, setMyHistory] = useState([]);

  // const [otherNum, setOtherNum] = useState(1);
  // const [otherSum, setOtherSum] = useState(0);
  // const [otherGameHistory, setOtherGameHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  let myClassName = 'Board App-board';
  let otherClassName = 'Board App-board';
  if (myHistory[myHistory.length - 1] > otherHistory[otherHistory.length - 1]) {
    myClassName += ' Board-winner';
  } else if (
    myHistory[myHistory.length - 1] < otherHistory[otherHistory.length - 1]
  ) {
    otherClassName += ' Board-winner';
  }

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
    // setNum(nextNum);
    // setSum(sum + nextNum);
    // setGameHistory([...gameHistory, nextNum]);
    // setOtherNum(nextOtherNum);
    // setOtherSum(otherSum + nextOtherNum);
    // setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    // setNum(1);
    // setSum(0);
    // setGameHistory([]);
    // setOtherNum(1);
    // setOtherSum(0);
    // setOtherGameHistory([]);
  };

  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="주사위 게임 로고" />
      <h1 className="App-title">주사위 게임</h1>
      <Button className="Button blue App-button" onClick={handleRollClick}>
        던지기
      </Button>
      <Button className="Button red App-button" onClick={handleClearClick}>
        처음부터
      </Button>
      <div className="App-boards">
        <Board
          className={myClassName}
          name="나"
          color="blue"
          gameHistory={myHistory}
        />
        <Board
          className={otherClassName}
          name="상대"
          color="red"
          gameHistory={otherHistory}
        />
      </div>
    </div>
  );
}
