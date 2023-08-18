import { useState } from "react";
import Box from "./components/Box"
const App = () => {
  const [boxes, setBoxes] = useState(['', '', '','', '', '', '', '', '',])


  return (
    <div className="app">
      <header>Tic-Tac-Toe</header>
      <div className="gamebox"> 
      {boxes.map((box, index) => <Box key={index} id={index} box={box}/>)}
      </div>
    <p></p>
    </div>
  );
}

export default App;
