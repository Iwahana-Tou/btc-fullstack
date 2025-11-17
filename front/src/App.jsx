import './App.css';
import { useEffect, useState } from 'react';
import MonsterStatus from './components/MonsterStatus.jsx';
import BattleManu from './components/BattleMenu.jsx';
import PlayerStatus from './components/PlayerStatus.jsx';
import BattleScreen from './components/BattleScreen.jsx';
import ResultScreen from './components/ResuleScreen.jsx';
import ContinueScreen from './components/ContinueScreen.jsx';

function App() {
  // const [message, setMessage] = useState();
  const [playerData, setPlayerData] = useState({});
  const [monsterData, setMonsterData] = useState({});
  const [monster, setMonster] = useState(false);
  const [player, setPlayer] = useState(false);
  const [screenText, setScreenText] = useState('コマンドを選択');
  const [result, setResult] = useState(false);
  const [isContinue, setIsContinue] = useState(false);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.text())
  //     .then((data) => setMessage(data));
  // }, []);

  // return <div className="App">Message from the backend: {message}</div>;

  if (result) {
    return (
      <ResultScreen
        setPlayer={setPlayer}
        setMonster={setMonster}
        setResult={setResult}
        setScreenText={setScreenText}
      />
    );
  } else if (isContinue) {
    return (
      <ContinueScreen
        setPlayer={setPlayer}
        setMonster={setMonster}
        setIsContinue={setIsContinue}
        setScreenText={setScreenText}
      />
    );
  } else {
    return (
      <>
        <MonsterStatus
          monsterData={monsterData}
          setMonsterData={setMonsterData}
          monster={monster}
          setMonster={setMonster}
        />
        <BattleScreen screenText={screenText} />
        <div className="playerSide">
          <BattleManu
            setScreenText={setScreenText}
            playerData={playerData}
            setPlayerData={setPlayerData}
            monsterData={monsterData}
            setMonsterData={setMonsterData}
            setMonster={setMonster}
            setPlayer={setPlayer}
            setResult={setResult}
            setIsContinue={setIsContinue}
          />
          <PlayerStatus
            className="player"
            playerData={playerData}
            setPlayerData={setPlayerData}
            player={player}
            setPlayer={setPlayer}
          />
        </div>
      </>
    );
  }
}

export default App;
