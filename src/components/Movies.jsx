import React from 'react'

const Moviecategory = (props) => {
    const { img, desc, name, date, vote, popularity } = props;
    return (
        <div className="card mt-12 bmd:mt-24 w-[320px] pad:w-[400px] b-pad:w-[480px] sm:w-[530px] md:w-[600px] lg:w-[700px] blg:w-[600px] 2xl:w-[530px] border-black p-2 hover:cursor-pointer transition hover:scale-105">
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="Image" loading='lazy' style={{ minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="w-[100%] h-[320px] pad:h-[400px] b-pad:h-[480px] sm:h-[530px] md:h-[600px] lg:h-[650px] blg:h-[480px] 2xl:h-[550px] bg-center bg-no-repeat" />
            <h2 className="font-bold mt-2 blg:mt-4 text-xl truncate sm:text-2xl text-white">{name}</h2>
            <p className="text-sm mt-1 sm:text-base lg:text-lg text-white truncate">{desc}</p>
            <p className='text-sm mt-1 sm:text-base lg:text-lg text-white'>{date}</p>
            <p className='text-sm mt-1 sm:text-base lg:text-lg text-white'>Rating - {vote}</p>
            <p className='text-sm mt-1 sm:text-base lg:text-lg text-white'>popularity - {popularity}</p>
        </div>
    )
}

export default Moviecategory