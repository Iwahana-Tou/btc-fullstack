export default function ContinueScreen({
  setIsContinue,
  setPlayer,
  setMonster,
  setScreenText,
  setIsDisplayImg,
  setLogin,
}) {
  const onClickRevival = () => {
    setPlayer(false);
    setMonster(false);
    setIsContinue(false);
    setIsDisplayImg(true);
    setScreenText('コマンドを選択');
  };

  const onClickLogout = () => {
    setPlayer(false);
    setMonster(false);
    setIsContinue(false);
    setIsDisplayImg(true);
    setScreenText('コマンドを選択');
    setLogin(true);
  };

  return (
    <>
      <h1>CONTINUE?</h1>
      <button className="resultButton" onClick={onClickRevival}>
        ✝️ふっかつ✝️
      </button>
      <button className="logoutButton" onClick={onClickLogout}>
        Logout
      </button>
    </>
  );
}
