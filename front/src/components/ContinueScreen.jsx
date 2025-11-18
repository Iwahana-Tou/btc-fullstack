export default function ContinueScreen({
  setIsContinue,
  setPlayer,
  setMonster,
  setScreenText,
  setIsDisplayImg,
}) {
  const onClick = () => {
    setPlayer(false);
    setMonster(false);
    setIsContinue(false);
    setIsDisplayImg(true);
    setScreenText('コマンドを選択');
  };

  return (
    <>
      <h1>CONTINUE?</h1>
      <button className="resultButton" onClick={onClick}>
        ✝️ふっかつ✝️
      </button>
    </>
  );
}
