import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import Signin from './pages/signin';
import SignUp from './pages/signup.js';
function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/browse" element={<p>This is the browse page</p>}/>
           <Route path="/signin" element={<Signin/>}/>
           <Route path="/signup" element={<SignUp/>}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
