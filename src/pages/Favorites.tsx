import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FilmsContext);

  const handleDelete = (film: any) => {
    setFavorites((prevFavorites: any) => prevFavorites
      .filter((favorite: any) => favorite.id !== film.id));
  };

  return (
    <div>
      <Header />
      <h1>Favorites</h1>
      {favorites.map((movie: any) => (
        <div key={ movie.id }>
          <h2>{movie.title}</h2>
          <img src={ movie.image } alt={ movie.title } width="200" height="300" />
          <button onClick={ () => handleDelete(movie) }>❌</button>
        </div>
      ))}
    </div>
  );
}
