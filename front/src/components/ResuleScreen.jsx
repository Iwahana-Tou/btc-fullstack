import { useEffect, useState } from 'react';

export default function ResultScreen({
  setResult,
  setMonster,
  setScreenText,
  setPlayer,
  setMonIsDisplayImg,
  userData,
}) {
  const [killsData, setKillsData] = useState([]);

  const onClick = () => {
    setMonster(false);
    setPlayer(false);
    setResult(false);
    setMonIsDisplayImg(true);
    setScreenText('コマンドを選択');
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
      <button className="resultButton" onClick={onClick}>
        次へ
      </button>
      <div className="log">
        <p>Total Kills</p>
        <ul>
          {console.log(killsData)}
          {killsData.map((el, index) => {
            return <li key={index}>{el.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
