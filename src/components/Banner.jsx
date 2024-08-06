import React from 'react'

const Banner = () => {
  return (
    <div  className='flex flex-col gap-1 justify-center items-center md:flex-row md:py-24 '>
      
    <div>
    <img src="https://cdn.dribbble.com/users/5690231/screenshots/16191500/media/4fbd0ec22f13a3521bb37cc5fe8b1cb3.gif" alt="This is image" />
    </div>
    <div className='flex flex-col justify-center items-center leading-tighter px-2 py-3 gap-5'>
      <h1 className='text-4xl lg:text-6xl '>HEY,I'M DARSHAN HIRAGAR</h1>
      <span className='text-1xl leading-tighter text-center md:text-2xl'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to success of the overall product</span>
      <button className='bg-white text-thapa-400 p-3 rounded-md md:text-xl font-bold  hover:bg-thapa-400 hover:text-white border-2 border-thapa-400'>Resume</button>
    </div>
    </div>
  )
}

export default Banner