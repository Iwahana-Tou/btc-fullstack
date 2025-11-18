import { useEffect } from 'react';

export default function MonsterStatus({
  monsterData,
  setMonsterData,
  monster,
  setMonster,
  monsterSrc,
  setMonsterSrc,
  isMonDisplayImg,
}) {
  useEffect(() => {
    if (monster) return;
    const id = Math.floor(Math.random() * 4) + 1;
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
          src: el.src,
        });
        setMonsterSrc(el.src);
      });
    setMonster(true);
  }, [monster]); // eslint-disable-line

  return (
    <>
      <p className="monsterName">{monsterData.name}</p>
      {isMonDisplayImg ? (
        <img
          htmlFor="actionButton"
          className="monsterImg"
          src={monsterSrc}
        ></img>
      ) : (
        <img
          className="noMonImg"
          src="https://www.colordic.org/image/1a1a1a.png"
        ></img>
      )}
    </>
  );
}
