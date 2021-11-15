import { useState } from "react";
import Header from "./components/header/Header";
import GamesLoading from "./components/main/GamesLoading"

import axios from 'axios'

function App() {

  const[response, setResponse] = useState("https://www.gamezop.com/g/SJMB7qTb?id=iSEVlAzen")

  const getGames = async() =>{
    // get random games id 
      const value = Math.floor(Math.random() * 100) + 1; 

    // fetch the game url from api
      const gameUrl = await axios.get('https://pub.gamezop.com/v3/games?id=iSEVlAzen');
    
      // set the game url as the new state 
      const result = gameUrl.data.games[value].url;
      setResponse(result);
  }

  return (
    <div className="App">
        <Header onGetGames={getGames} />
        <GamesLoading games={response} />
    </div>
  );
}

export default App;
