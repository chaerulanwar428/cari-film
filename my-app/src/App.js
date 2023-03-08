import './App.css';
import {getMovieList} from './api';
import { useEffect,useState } from 'react';

const App = () => {
 
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) =>{
      setPopularMovies(result)
    })
  },[])

 const PopularMovieList = () =>{
  return popularMovies.map((movie,i) =>{
  return(
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title">{movie.title}</div>
        <img className="Movie-image" src={movie.poster_path}/>
        <div className="Movie-date">{movie.release_date}</div>
        <div className="Movie-rate">{movie.vote_averange}</div>
      </div>
  )
  })
 }

 const search = (q) => {
  console.log({q})
 }

  return (
    <div className="App">
      <header className="App-header">
      <h1>CR movie</h1>
        <input placeholder="cari film favoritmu disini..." className="Movie-search" 
        onChange={({target}) => search(target.value)}/>
      <div className="Movie-container">
      </div>
      </header>
    </div>
  );
}

export default App;
