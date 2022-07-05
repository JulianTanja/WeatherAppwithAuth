//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Geolocation from './components/Geolocation';
import Search from './components/Search';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './context/authcontext';
//import {auth} from './firebase';

function App() {
  return (
    <div>
      
      <AuthContextProvider>
        
          <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/Search' element={<Search />}/>
            <Route path='/Geolocation' element={<Geolocation />}/>
            <Route path='/SignUp' element={<SignUp />}/>
          </Routes>
        
        
      </AuthContextProvider>
    </div>
        
      
      
      
      
    
  );
}

export default App;