import React, { useState } from "react";
import Box from "./components/Box";

const App = () => {
  const [boards, setBoards] = useState(['', '', '', '', '', '', '', '', '',]);
  const [result, setResult] = useState('circle');
  const [winnerMessage, setWinnerMessage] = useState(null);

  const message = "It is now " + result + "'s go.";

  return (
    <div className="app">
      <header>Tic-Tac-Toe</header>
      <div className="gamebox">
        {boards.map((board, index) => 
          <Box key={index} id={index} board={board} setBoards={setBoards} result={result} setResult={setResult} boards={boards}/>)}
      </div>
      <p>{message}</p>
    </div>
  );
};

export default App;

