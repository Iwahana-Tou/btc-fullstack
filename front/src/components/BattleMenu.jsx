import { useState } from 'react';

export default function BattleManu({
  setScreenText,
  playerData,
  setPlayerData,
  monsterData,
  setMonsterData,
  setResult,
  setIsContinue,
}) {
  const [display, setDisplay] = useState(true);

  const clickOnBattleText = () => {
    setDisplay(false);
    setScreenText('Playerのこうげき');
    setTimeout(attackPlayerSide, 1000);
  };

  const attackPlayerSide = () => {
    const randomNum = Math.floor(Math.random() * 11) + 1;

    playerAttack(randomNum);
  };

  const monsterText = () => {
    setScreenText(`${monsterData.name}のこうげき`);
    setTimeout(attackMonsterSide, 1000);
  };

  const attackMonsterSide = () => {
    const randomNum = Math.floor(Math.random() * 11) + 1;

    monsterAttack(randomNum);
  };

  function playerAttack(num) {
    let url = '';
    if (num % 2 === 0) {
      url = `/api/get/attack_move/${playerData.attack_move2}`;
    } else {
      url = `/api/get/attack_move/${playerData.attack_move1}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let damage = data.attack + playerData.attack;
        if (num === 1) {
          damage = damage * 5;
          setScreenText(`会心の一撃、${damage} ダメージ`);
        } else {
          setScreenText(`${data.attack_name}、${damage} ダメージ`);
        }
        const justNowHp = monsterData.HP - damage;
        setMonsterData({
          id: monsterData.id,
          name: monsterData.name,
          attack: monsterData.attack,
          defense: monsterData.defense,
          HP: justNowHp,
          attack_move1: monsterData.attack_move1,
          attack_move2: monsterData.attack_move2,
        });
        if (justNowHp <= 0) {
          const postData = {
            player_id: playerData.id,
            monsters_id: monsterData.id,
            time_stamp: new Date(),
          };
          fetch('/api/post/total_kills', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          });
          setTimeout(() => {
            setScreenText('モンスターをたおした！');
            setTimeout(() => setResult(true), 1500);
          }, 1000);
        } else {
          setTimeout(monsterText, 1000);
        }
      });
  }

  function monsterAttack(num) {
    let url = '';
    if (num % 2 === 0) {
      url = `/api/get/attack_move/${monsterData.attack_move2}`;
    } else {
      url = `/api/get/attack_move/${monsterData.attack_move1}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const damage = data.attack + monsterData.attack;
        setScreenText(`${data.attack_name}、${damage} ダメージ`);
        const justNowHp = playerData.HP - damage;
        setPlayerData({
          id: playerData.id,
          name: playerData.name,
          attack: playerData.attack,
          defense: playerData.defense,
          HP: justNowHp,
          attack_move1: playerData.attack_move1,
          attack_move2: playerData.attack_move2,
        });
        if (justNowHp <= 0) {
          // setMonster(false);
          setTimeout(() => {
            setScreenText('Playerは死んでしまった...');
            setTimeout(() => setIsContinue(true), 1500);
          }, 1000);
        } else {
          setTimeout(() => {
            setScreenText('コマンドを選択');
            setDisplay(true);
          }, 1000);
        }
      });
  }

  const dashClick = () => {
    setResult(true);
  };

  return (
    <>
      {display ? (
        <>
          <button className="battleButton" onClick={clickOnBattleText}>
            たたかう
          </button>
          <button className="dashButton" onClick={dashClick}>
            にげる
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
