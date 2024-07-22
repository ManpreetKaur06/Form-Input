import { useState } from 'react';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  const[isLogin , setIsLogin] = useState(true);
  function handleLogin(){
    setIsLogin(true);
  }
  function handleSignUp(){
    setIsLogin(false);
  }
  return (
    <>
      <Header />
      <main>
        <button className='btnLog' onClick={handleLogin}> Login</button>
        <button className='btnLog' onClick={handleSignUp}> SignUp</button>
        <div>
          {isLogin ? <Login /> : <Signup /> }
        </div>
        {/* <Signup />
        <Login /> */}
      </main>
    </>
  );
}

export default App;
