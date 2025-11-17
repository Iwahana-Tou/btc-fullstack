import { useEffect } from 'react';
import { useState } from 'react';
import image from '../assets/戦士.jpeg';

export default function PlayerStatus({
  playerData,
  setPlayerData,
  player,
  setPlayer,
}) {
  const [playerSrc, setPlayerSrc] = useState();

  useEffect(() => {
    if (player) return;
    const url = `/api/get/player/${1}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlayerData({
          id: data.id,
          name: data.name,
          attack: Number(data.attack),
          defense: data.defense,
          HP: Number(data.hitpoint),
          attack_move1: data.attack_move1,
          attack_move2: data.attack_move2,
        });
        setPlayerSrc(image);
      });
    setPlayer(true);
  }, [player]); // eslint-disable-line
  return (
    <>
      <div>
        <img className="playerImg" src={playerSrc}></img>
        <p className="playerName">{playerData.name}</p>
      </div>

      <p className="playerStatus">HP:{playerData.HP > 0 ? playerData.HP : 0}</p>
    </>
  );
}
