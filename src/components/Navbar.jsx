import React from 'react'
const Navbar = () => {
  return (
    
     <nav>
       <a href="http://" className='text-red-400'>Darshan Hiragar</a>
       <ul>
        {/* <li><a href="http://">Home</a></li> */}
        <li><a href="http://">About</a></li>
        <li><a href="http://">Skills</a></li>
        <li><a href="http://">Projects</a></li>
        <li><a href="http://">Internship</a></li>
       </ul>
       <button>Contact Me</button>
     </nav> 
  )
}

export default Navbar