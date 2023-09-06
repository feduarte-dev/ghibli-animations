import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Home() {
  const { movies, setFavorites } = useContext(FilmsContext);

  const handleFavorite = (film: any) => {
    setFavorites((prevFavorites: any) => {
      if (prevFavorites.some((favorite: any) => favorite.id === film.id)) {
        return prevFavorites.filter((favorite: any) => favorite.id !== film.id);
      }
      return [...prevFavorites, film];
    });
  };

  return (
    <div>
      <Header />
      <h1>Films</h1>
      {movies.map((movie: any) => (
        <div key={ movie.id }>
          <h2>{movie.title}</h2>
          <img src={ movie.image } alt={ movie.title } width="200" height="300" />
          <button onClick={ () => handleFavorite(movie) }>❤️</button>
        </div>
      ))}
    </div>

  );
}
