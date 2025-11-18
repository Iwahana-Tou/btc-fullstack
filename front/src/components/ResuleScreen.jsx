import { useEffect, useState } from 'react';

export default function ResultScreen({
  setResult,
  setMonster,
  setScreenText,
  setPlayer,
  setMonIsDisplayImg,
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
    fetch('/api/get/total_kills/1')
      .then((data) => data.json())
      .then((data) => setKillsData(data));
  }, []);

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
