import './App.css';
import FavoritesPage from './components/FavoritesPage';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"

function App() {

  const state = useSelector((state) => state)
  console.log(state);
  const dispatch = useDispatch()
  const { x, y } = bindActionCreators(actionCreators, dispatch)
  console.log(x, y);

  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;
