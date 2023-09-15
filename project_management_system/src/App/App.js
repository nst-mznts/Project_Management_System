import Main from '../Main/Main';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import MainRoute from '../MainRoute/MainRoute';
import BoardRoute from '../BoardRoute/BoardRoute';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import { ModalProvider } from "../ModalWindow/ModalContextProvider";
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <ModalProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/main-route' element={<MainRoute />} />
            <Route exact path='/board-route' element={<BoardRoute />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </ModalProvider>
      <Footer />
    </>
  );
}

export default App;
