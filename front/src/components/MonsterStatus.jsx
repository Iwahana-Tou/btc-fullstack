import { useEffect } from 'react';
import { useState } from 'react';
import image from '../assets/スライム.jpeg';
import image2 from '../assets/ドラキー.jpeg';
import image3 from '../assets/いたずらもぐら.png';
import image4 from '../assets/ゴーレム.webp';

export default function MonsterStatus({
  monsterData,
  setMonsterData,
  monster,
  setMonster,
}) {
  const [monsterSrc, setMonsterSrc] = useState();

  useEffect(() => {
    const id = Math.floor(Math.random() * 4) + 1;

    if (monster) return;
    const url = `/api/get/monsters/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((el) => {
        setMonsterData({
          id: el.id,
          name: el.name,
          attack: Number(el.attack),
          defense: el.defense,
          HP: Number(el.hitpoint),
          attack_move1: el.attack_move1,
          attack_move2: el.attack_move2,
        });
        if (el.id === 1) setMonsterSrc(image);
        else if (el.id === 2) setMonsterSrc(image2);
        else if (el.id === 3) setMonsterSrc(image3);
        else setMonsterSrc(image4);
      });
    setMonster(true);
  }, [monster]); // eslint-disable-line

  return (
    <>
      {console.log(monsterData.HP)}
      {/* {console.log(monsterData.id)} */}
      {/* {console.log(monster)} */}
      <p className="monsterName">{monsterData.name}</p>
      <img className="monsterImg" src={monsterSrc}></img>
    </>
  );
}
