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
    if (nameRef.current.value === '' || passwordRef.current.value === '')
      return;
    const params = new URLSearchParams();
    params.append('name', nameRef.current.value);
    params.append('password', passwordRef.current.value);
    const url = `/api/get/users?${params.toString()}`;
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        if (res.name === nameRef.current.value) {
          setUserData(res);
          setLogin(false);
        } else {
          return console.log('error');
        }
      });
  };

  return (
    <>
      <h2>Login</h2>
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
      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
      <button className="loginButton" onClick={handleCreate}>
        New Account
      </button>
    </>
  );
}
