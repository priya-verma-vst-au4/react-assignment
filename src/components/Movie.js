import './../App.css';
import { useState, useEffect } from 'react';

const Movie = () => {

    const [movies, setMovies] = useState('')
    useEffect(()=>{
        getMovie();
    }, [])

    const getMovie = async()=>{
        let movie = await fetch('http://localhost:5000')
        movie =  await movie.json()
        console.log("movie", movie)
        setMovies(movie)
    }

  return (
    <div className='superCard'>
       
       {movies.map((m,i)=>{
            return(
                <div key={i}>
                <div className="card">
                    <img className="card-img-top" height="200px" src={m.posterurl}/>
                   <div className="card-body">
                     <h4 className="card-title"> {m.title}</h4> 
                     <p className="card-text">{m.rating}</p>
                     <p className="btn btn-primary">{m.year}</p>
                   </div>
                </div>
                </div>
            )
        })}
        {/* <img className="card-img-top" height="200px" src="https://imageio.forbes.com/specials-images/imageserve/5db4c7b464b49a0007e9dfac/Photo-of-Maltese-dog/960x0.jpg?fit=bounds&format=jpg&width=960" alt="Card image cap" />
        <div className="card-body">
            <h4 className="card-title">Name</h4>
            <p className="card-text">Rating</p>
            <p className="btn btn-primary">Release Date</p>
        </div>    */}
        </div>
 
  );
}

export default Movie;
