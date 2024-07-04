
import './App.css';
import { Route, Routes } from 'react-router-dom'

import { Home } from './component/Home/Home';

import { Login } from './component/auth/Login';
import { Signup } from './component/auth/Signup';

import { AdminLogin } from './component/auth/admin/AdminLogin';
import { CreateQuiz } from './component/auth/admin/CreateQuiz';
import { Quiz } from './component/Quiz/Quiz';
import { Quiz1 } from './component/Quiz/Quiz1';
import { Quiz2 } from './component/Quiz/Quiz2';
import { Quiz3 } from './component/Quiz/Quiz3';

function App() {
  return (


    <div className="App">
      <div className='content'>

        <Routes>

          <Route path='/' element={<Login />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/createquiz' element={<CreateQuiz />} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/Jsquiz' element={<Quiz1/>} />
          <Route path='/Htmlquiz' element={<Quiz2/>} />
          <Route path='/Cssquiz' element={<Quiz3/>} />
        </Routes>

      </div>
    </div>


  );
}

export default App;
