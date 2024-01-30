import React from 'react'

const Footer = () => {
    // console.log("Footer hun mai")
    return (
        <footer className='mt-4'>
            <div className='text-white text-sm bg-[#4c4a4a] w-full p-2 text-center'>
                <p>Thanks for checking it out. This is my personal project.</p>
                <span>For more, kindly checkout my
                    <a className='font-bold text-blue-400' href="https://github.com/jasmeet5108" target='_blank'> Github Profile.</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer