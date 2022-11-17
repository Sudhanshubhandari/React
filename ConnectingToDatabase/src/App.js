import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
// import Movie from './components/Movie';
// import { response } from 'express';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-b60f0-default-rtdb.firebaseio.com/movies.json');//After .com set name by your choice(i.e movies in this case )you always have to end it with .json
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-b60f0-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}













//Fetching data from URL

// function App() {
//   const [movies, setmovies] = useState([]);
//   const [isLoading, SetLoading] = useState(false);
//   const [error, SetError] = useState(null);



//   //Using async Await method
//   // async function fetchMoviesHandler() {
//     //Usecallback is used here so that useeffect does not get in infinite loop
//     const fetchMoviesHandler=useCallback(async()=> {
//     SetLoading(true);
//     SetError(null);
    
//     try {
//       const response = await fetch("https://swapi.py4e.com/api/films/");
//       if (!response.ok) {
//         throw new Error("Something went Wrong!");
//       }
//        const data = await response.json();
      
//       //Only array data can be mapped if you try to map object then it will not show any output
//       const transformedMovies = data.results.map((movieData) => {
//         return {
//           id: movieData.episode_id,
//           title: movieData.title,
//           releaseDate: movieData.opening_crawl,
//         };
//       });

//       setmovies(transformedMovies);
     
//     } catch (error) {
//       SetError(error.message);

//     }
//     SetLoading(false);
//   },[])

//   useEffect(()=>{
//     fetchMoviesHandler();
//   },[fetchMoviesHandler])

//   function addMovieHandler(movie){
//     console.log(movie)
//   }
//   return (
//     <React.Fragment>
//       <section>
//         <AddMovie onAddMovie={addMovieHandler}/>
//       </section>
//       <section>
//         <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>
//         {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
//         {!isLoading && movies.length === 0 && <h3>Found no movies.</h3>}
//         {!isLoading && error&& <h3>{error}</h3>}
//         {isLoading && <p>Loading...</p>}
      
//       </section>
//     </React.Fragment>
//   );
// }

export default App;

// ****fetch data using http request **************
// function fetchMoviesHandler(){
//   fetch('https://swapi.py4e.com/api/films/').then(response=>{
//     return response.json();
// }).then(data=>{
//   console.log(data)
//   //Only array data can be mapped if you try to map object then it will not show any output
//    const transformedMovies=data.results.map(movieData=>{

//     return{
//       id:movieData.episode_id,
//       title:movieData.title,
//       releaseDate:movieData.opening_crawl
//     }
//    })
