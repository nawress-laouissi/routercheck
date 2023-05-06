
import './App.css';
import MovieList from './components/MovieList';
import Trailer from './components/Trailer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{backgroundColor:"rgb(50, 50, 150)"}}>
    <Routes>
    <Route path='/' element={ <MovieList/>} />
     <Route path='/trailer/:id' element={ <Trailer/>} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
