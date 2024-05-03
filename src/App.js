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
import EmployeeList from './pages/Dashboard/Manager/EmployeeList';
import AddEmployee from './pages/Dashboard/Manager/AddEmployee';
import ReqiureAuth from './pages/Login/RequireAuth';
import RequireManager from './pages/Login/RequireManager';
import NotFoundPage from './pages/NotFoundPage';
import FAQs from './pages/FAQs';
import Services from './pages/Services';
import Contact from './pages/Contact';
// import ReqiureAuth from './pages/Login/RequireAuth';
// import RequireAdmin from './pages/Login/RequireAdmin';

function App() {
  return (
    <section className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<ReqiureAuth><Dashboard/></ReqiureAuth>}></Route>
        <Route path='/salary-record' element={<ReqiureAuth><SalaryRecord/></ReqiureAuth>}></Route>
        <Route path='/apply-for-a-leave' element={<ReqiureAuth><ApplyForLeave/></ReqiureAuth>}></Route>
        <Route path='/employee-list' element={<ReqiureAuth><RequireManager><EmployeeList/></RequireManager></ReqiureAuth>}></Route>
        <Route path='/add-new-employee' element={<ReqiureAuth><RequireManager><AddEmployee/></RequireManager></ReqiureAuth>}></Route>
        <Route path='/profile' element={<ReqiureAuth><Profile/></ReqiureAuth>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/faqs' element={<FAQs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/*' element={<NotFoundPage/>}></Route>

        {/* <ReqiureAuth><RequireAdmin>a</RequireAdmin></ReqiureAuth> */}
      </Routes>
      <Footer></Footer>


    </section>
  );
}

export default App;
