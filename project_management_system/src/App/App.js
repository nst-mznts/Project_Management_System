import Main from '../Main/Main';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import MainRoute from '../MainRoute/MainRoute';
import Footer from '../Footer/Footer';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/main-route' element={<MainRoute />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
