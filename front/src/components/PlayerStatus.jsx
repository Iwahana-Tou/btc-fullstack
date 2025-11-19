import { useEffect } from 'react';

export default function PlayerStatus({
  playerData,
  setPlayerData,
  player,
  setPlayer,
  playerSrc,
  setPlayerSrc,
  isDisplayImg,
  userData,
}) {
  useEffect(() => {
    if (player) return;
    const url = `/api/get/player/${userData.id}`;
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
          src: data.src,
        });
        setPlayerSrc(data.src);
      });
    setPlayer(true);
  }, [player]); // eslint-disable-line
  return (
    <>
      <div>
        {isDisplayImg ? (
          <img className="playerImg" src={playerSrc}></img>
        ) : (
          <img
            className="noPlayerImg"
            src="https://www.colordic.org/image/1a1a1a.png"
          ></img>
        )}
        <p className="playerName">{playerData.name}</p>
      </div>

      {isDisplayImg ? (
        <p className="playerStatus">
          HP:{playerData.HP > 0 ? playerData.HP : 0}
        </p>
      ) : (
        <></>
      )}
    </>
  );
}
