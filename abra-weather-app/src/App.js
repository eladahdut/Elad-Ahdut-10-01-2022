import './App.css';
import FavoritesPage from './components/FavoritesPage';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {


  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;
