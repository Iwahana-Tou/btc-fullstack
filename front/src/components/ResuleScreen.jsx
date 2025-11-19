import { useEffect, useState } from 'react';

export default function ResultScreen({
  setResult,
  setMonster,
  setScreenText,
  setPlayer,
  setMonIsDisplayImg,
  userData,
  setLogin,
}) {
  const [killsData, setKillsData] = useState([]);

  const onClickNext = () => {
    setMonster(false);
    setPlayer(false);
    setResult(false);
    setMonIsDisplayImg(true);
    setScreenText('コマンドを選択');
  };

  const onClickLogout = () => {
    setMonster(false);
    setPlayer(false);
    setResult(false);
    setMonIsDisplayImg(true);
    setScreenText('コマンドを選択');
    setLogin(true);
  };

  useEffect(() => {
    const url = `/api/get/total_kills/${userData.id}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setKillsData(data));
  }, [killsData]); // eslint-disable-line

  return (
    <>
      <h1>RESULT</h1>
      <button className="resultButton" onClick={onClickNext}>
        NEXT
      </button>
      <button className="logoutButton" onClick={onClickLogout}>
        Logout
      </button>
      <div className="log">
        <p>Total Kills</p>
        <ul>
          {killsData.map((el, index) => {
            return <li key={index}>{el.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
