

import './App.css';
import Home from './components/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes ,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profil from './components/Profil/Profil';
import UserList from './components/UserList/Userlist';
import Editprofil from './components/Editprofil/Editprofil';
import Editpot from './components/Editpot/Editpot';
import Addpot from './components/Addpot/Addpot';
import UserRoute from './components/privateRoute/UserRoute';
import Navbar from './components/Navbar/Navbar';
import Potlist from './components/Potlist/potlist';

function App() {
 
  return (
    <div>
     
      <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profil' element={<Profil/>}/>
      <Route path='/pots' element={<Potlist/>}  />
      <Route path='/addpot' element={<UserRoute> <Addpot/></UserRoute> }/>
      <Route path='/editprofile' element={<Editprofil/>}/>
      <Route path='/editpot' element={<Editpot/>}/>
      <Route path='/UserList' element={<UserList/>}/>
    </Routes>
    </div>
  );
}

export default App;