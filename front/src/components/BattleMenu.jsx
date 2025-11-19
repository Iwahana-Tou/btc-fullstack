import { useState } from 'react';

export default function BattleManu({
  setScreenText,
  playerData,
  setPlayerData,
  monsterData,
  setMonsterData,
  setResult,
  setIsContinue,
  setMonIsDisplayImg,
  setIsDisplayImg,
}) {
  const [display, setDisplay] = useState(true);
  const clickOnBattleText = () => {
    setDisplay(false);
    setScreenText('Playerのこうげき');
    setTimeout(attackPlayerSide, 1500);
    setTimeout(monDamageEfect, 1500);
  };

  const attackPlayerSide = () => {
    const randomNum = Math.floor(Math.random() * 11) + 1;

    playerAttack(randomNum);
  };

  const monsterText = () => {
    setScreenText(`${monsterData.name}のこうげき`);
    setTimeout(attackMonsterSide, 1500);
    setTimeout(damageEfect, 1500);
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
          setScreenText(`${data.attack_name}、${damage} ダメージをあたえた`);
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
            setMonIsDisplayImg(false);
            setTimeout(() => setResult(true), 1500);
          }, 1500);
        } else {
          setTimeout(monsterText, 1500);
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
        setScreenText(`${data.attack_name}、${damage} ダメージをうけた`);
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
          setTimeout(() => {
            setScreenText('Playerは死んでしまった...');
            setIsDisplayImg(false);
            setTimeout(() => setIsContinue(true), 1500);
          }, 1500);
        } else {
          setTimeout(() => {
            setScreenText('コマンドを選択');
            setDisplay(true);
          }, 1500);
        }
      });
  }

  const monDamageEfect = () => {
    setMonIsDisplayImg(false);
    setTimeout(monDamageEfect2, 150);
  };
  const monDamageEfect2 = () => {
    setMonIsDisplayImg(true);
    setTimeout(monDamageEfect3, 150);
  };
  const monDamageEfect3 = () => {
    setMonIsDisplayImg(false);
    setTimeout(monDamageEfect4, 150);
  };
  const monDamageEfect4 = () => {
    setMonIsDisplayImg(true);
  };

  const damageEfect = () => {
    setIsDisplayImg(false);
    setTimeout(damageEfect2, 150);
  };
  const damageEfect2 = () => {
    setIsDisplayImg(true);
    setTimeout(damageEfect3, 150);
  };
  const damageEfect3 = () => {
    setIsDisplayImg(false);
    setTimeout(damageEfect4, 150);
  };
  const damageEfect4 = () => {
    setIsDisplayImg(true);
  };

  const dashClick = () => {
    setResult(true);
  };

  return (
    <>
      {display ? (
        <>
          <button
            id="actionButton"
            className="battleButton"
            onClick={clickOnBattleText}
          >
            たたかう
          </button>
          <button className="dashButton" onClick={dashClick}>
            にげる
          </button>
        </>
      ) : (
        <img
          className="noPlayerImg"
          src="https://www.colordic.org/image/1a1a1a.png"
        ></img>
      )}
    </>
  );
}
