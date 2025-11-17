export default function ContinueScreen({
  setIsContinue,
  setPlayer,
  setMonster,
  setScreenText,
}) {
  const onClick = () => {
    setPlayer(false);
    setMonster(false);
    setIsContinue(false);
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
