import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen({ setLogin, setAllUserData, setUserData }) {
  const nameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const handleCreate = () => {
    fetch('/api/get/users')
      .then((data) => data.json())
      .then((data) => setAllUserData(data));
    navigate('/create');
  };

  const handleLogin = () => {
    fetch('/api/get/users')
      .then((data) => data.json())
      .then((data) => {
        setAllUserData(data);
        data.filter((el) => {
          if (
            el.name === nameRef.current.value &&
            el.password === passwordRef.current.value
          ) {
            setUserData(el);
            setLogin(false);
          }
        });
      });
  };

  return (
    <>
      <h2>Login</h2>
      <input
        className="nameInput"
        ref={nameRef}
        type="text"
        placeholder="Name"
      ></input>
      <br />
      <input
        className="passwordInput"
        ref={passwordRef}
        type="text"
        placeholder="Password"
      ></input>
      <br />
      <br />
      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
      <button className="loginButton" onClick={handleCreate}>
        New Account
      </button>
    </>
  );
}
