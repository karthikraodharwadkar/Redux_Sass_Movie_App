import './App.scss';
import LandingPage from './Components/LandingPage/LandingPage';
import MovieDetail from './Components/MovieDetail/MovieDetail';

import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/:imdbID" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
