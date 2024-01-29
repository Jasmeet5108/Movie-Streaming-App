import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Moviecategory from './Movies';


const Movie = (props) => {

  const [data, setData] = useState([]);

  const getMovies = async () => {
    await fetch(`https://api.themoviedb.org/3/${props.type}/${props.category}?api_key=${props.apiKey}`)
      .then(res => res.json())
      .then(json => setData(json.results))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <h2 className='text-white font-bold text-3xl pad:text-4xl text-center mt-[-595px] b-pad:mt-[-540px] sm:mt-[-512px] md:mt-16'>{props.heading1} - {props.heading2}</h2>
      <div className="cardContainer flex flex-wrap justify-center mt-[-25px] gap-6">
        {data.map((item, index) =>
          <div key={index}>
            <Moviecategory img={item.poster_path} desc={item.overview} name={item.title ? item.title : item.name} date={item.release_date ? item.release_date : item.first_air_date} vote={item.vote_average} popularity={item.popularity} />
          </div>
        )}
      </div>
    </>
  )
}

export default Movie