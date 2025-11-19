import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateScreen({ setLogin, allUserData, setUserData }) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };

  function randomAD() {
    const result = Math.floor(Math.random() * 5) + 3;
    return result;
  }

  function randomHp() {
    const result = Math.floor(Math.random() * 25) + 25;
    return result;
  }

  const handleCreate = () => {
    if (nameRef.current.value === '' || passwordRef.current.value === '')
      return;
    const id = allUserData[allUserData.length - 1].id + 1;
    const newPlayer = {
      id: id,
      name: nameRef.current.value,
      attack: randomAD(),
      defense: randomAD(),
      hitpoint: randomHp(),
      attack_move1: 2,
      attack_move2: 3,
      src: 'https://i.ibb.co/YFy4yzZp/3.png',
    };
    fetch('/api/post/player', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlayer),
    }).then((res) => {
      if (res.status === 200) {
        const postData = {
          id: id,
          name: nameRef.current.value,
          player_id: id,
          password: passwordRef.current.value,
          salt: '',
        };
        fetch('/api/post/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        }).then((res) => {
          if (res.status === 200) {
            setLogin(false);
            setUserData(postData);
            handleBack();
          } else {
            const url = `/api/delete/player/${id}`;
            fetch(url, {
              method: 'DELETE',
            });
          }
        });
      }
    });
  };

  return (
    <>
      <h1>Create New Account</h1>
      <input
        className="nameInput"
        ref={nameRef}
        type="text"
        placeholder=" Name"
      ></input>
      <br />
      <input
        className="passwordInput"
        ref={passwordRef}
        type="password"
        placeholder=" Password"
      ></input>
      <br />
      <br />
      <button className="loginButton" onClick={handleCreate}>
        Create
      </button>
      <button className="loginButton" onClick={handleBack}>
        Back
      </button>
    </>
  );
}
