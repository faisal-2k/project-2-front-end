import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import SalaryRecord from './pages/Dashboard/General/SalaryRecord';
import ApplyForLeave from './pages/Dashboard/General/ApplyForLeave';
// import ReqiureAuth from './pages/Login/RequireAuth';
// import RequireAdmin from './pages/Login/RequireAdmin';

function App() {
  return (
    <section className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/salary-record' element={<SalaryRecord/>}></Route>
        <Route path='/apply-for-a-leave' element={<ApplyForLeave/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>

        {/* <ReqiureAuth><RequireAdmin>a</RequireAdmin></ReqiureAuth> */}
      </Routes>
      <Footer></Footer>


    </section>
  );
}

export default App;
