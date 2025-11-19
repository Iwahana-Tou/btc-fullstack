import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import CreateScreen from './CreateScreen';

export default function LoginScreen({ setLogin, setUserData }) {
  const [allUserData, setAllUserData] = useState([]);
  return (
    <>
      <h1>DIG_QUEST</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setLogin={setLogin}
                setAllUserData={setAllUserData}
                setUserData={setUserData}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateScreen
                setLogin={setLogin}
                allUserData={allUserData}
                setUserData={setUserData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
