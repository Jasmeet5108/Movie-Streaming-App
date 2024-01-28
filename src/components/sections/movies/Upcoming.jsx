import React from 'react';
import { useState } from "react";
import { useEffect } from "react";


const Upcoming = () => {

    const [data, setData] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY

    const getMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
            .then(res => res.json())
            // .then(json => console.log(json.results))
            .then(json => setData(json.results))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
         <h2 className='text-white font-bold text-3xl pad:text-4xl text-center mt-[-550px] b-pad:mt-[-540px] sm:mt-[-512px] md:mt-9'>Movies - Upcoming</h2>
            <div className="cardContainer flex flex-wrap justify-center mt-[-25px] gap-4">
                {data.map((item, index) =>
                    <div key={index} className="card mt-16 bmd:mt-24 w-[280px] pad:w-[400px] b-pad:w-[480px] sm:w-[530px] md:w-[600px] lg:w-[700px] blg:w-[600px] 2xl:w-[550px] border-black p-2 hover:cursor-pointer transition hover:scale-105">
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Image" loading='lazy' style={{ minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="w-[100%] h-[200px] pad:h-[270px] b-pad:h-[360px] sm:h-[400px] md:h-[430px] lg:h-[500px] blg:h-[450px] 2xl:h-[420px] bg-center bg-no-repeat" />
                        <h2 className="font-bold mt-2 blg:mt-4 text-xl truncate sm:text-2xl text-white">{item.original_title}</h2>
                        <p className="text-sm mt-1 sm:text-base lg:text-lg text-white truncate">{item.overview}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Upcoming