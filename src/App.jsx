import React, { useState, useEffect} from "react";
import Box from "./components/Box";

const App = () => {
  const [boards, setBoards] = useState(['', '', '', '', '', '', '', '', '',]);
  const [result, setResult] = useState('circle');
  const [winnerMessage, setWinnerMessage] = useState(null);

  const message = "It is now " + result + "'s go.";

  const finalScore = () => {
    const winning = [
      [0,1,2], [3,4,5], [6.7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    winning.forEach(array =>
      { 
        let circleWins = array.every(board => boards[board] === "circle")
        if(circleWins){
          setWinnerMessage("Circle Wins!")
          return
        }
      })
      winning.forEach(array =>
        {
          let crossWins = array.every(board => boards[board] === "cross")
          if(crossWins){
            setWinnerMessage("Cross Wins!")
            return
          }
        })
  }
  useEffect(() => {
  finalScore()
  }, [boards])

  return (
    <div className="app">
      <header className="changing">Tic-Tac-Toe</header>
      <div className="gamebox">
        {boards.map((board, index) => 
          <Box key={index} id={index} board={board} setBoards={setBoards} result={result} setResult={setResult} boards={boards} winnerMessage={winnerMessage}/>)}
      </div>
      <p className="fonting">{winnerMessage || message}</p>
    </div>
  );
};

export default App;

