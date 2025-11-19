import './App.css';
import { useState } from 'react';
import MonsterStatus from './components/MonsterStatus.jsx';
import BattleManu from './components/BattleMenu.jsx';
import PlayerStatus from './components/PlayerStatus.jsx';
import BattleScreen from './components/BattleScreen.jsx';
import ResultScreen from './components/ResuleScreen.jsx';
import ContinueScreen from './components/ContinueScreen.jsx';
import LoginScreen from './components/LoginScreen.jsx';

function App() {
  const [playerData, setPlayerData] = useState({});
  const [monsterData, setMonsterData] = useState({});
  const [monster, setMonster] = useState(false);
  const [player, setPlayer] = useState(false);
  const [screenText, setScreenText] = useState('コマンドを選択');
  const [result, setResult] = useState(false);
  const [isContinue, setIsContinue] = useState(false);
  const [playerSrc, setPlayerSrc] = useState();
  const [monsterSrc, setMonsterSrc] = useState();
  const [isDisplayImg, setIsDisplayImg] = useState(true);
  const [isMonDisplayImg, setMonIsDisplayImg] = useState(true);
  const [login, setLogin] = useState(true);

  if (login) {
    return <LoginScreen setLogin={setLogin} />;
  } else if (result) {
    return (
      <ResultScreen
        setPlayer={setPlayer}
        setMonster={setMonster}
        setResult={setResult}
        setScreenText={setScreenText}
        setMonIsDisplayImg={setMonIsDisplayImg}
      />
    );
  } else if (isContinue) {
    return (
      <ContinueScreen
        setPlayer={setPlayer}
        setMonster={setMonster}
        setIsContinue={setIsContinue}
        setScreenText={setScreenText}
        setIsDisplayImg={setIsDisplayImg}
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
          monsterSrc={monsterSrc}
          setMonsterSrc={setMonsterSrc}
          isMonDisplayImg={isMonDisplayImg}
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
            playerSrc={playerSrc}
            setPlayerSrc={setPlayerSrc}
            monsterSrc={monsterSrc}
            setMonsterSrc={setMonsterSrc}
            setIsDisplayImg={setIsDisplayImg}
            setMonIsDisplayImg={setMonIsDisplayImg}
          />
          <PlayerStatus
            className="player"
            playerData={playerData}
            setPlayerData={setPlayerData}
            player={player}
            setPlayer={setPlayer}
            playerSrc={playerSrc}
            setPlayerSrc={setPlayerSrc}
            isDisplayImg={isDisplayImg}
          />
        </div>
      </>
    );
  }
}

export default App;
