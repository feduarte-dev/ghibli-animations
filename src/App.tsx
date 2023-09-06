import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmsContext from './context/FilmsContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const request = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const data = await request.json();
      setMovies(data);
      return data;
    };
    fetchApi();
  }, []);

  return (
    <FilmsContext.Provider value={ { movies, favorites, setFavorites } }>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
