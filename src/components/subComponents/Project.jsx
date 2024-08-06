import React from 'react'

const Project = (props) => {
  const data = props.data;
  return (
    <div className='flex flex-col gap-5 py-5 md:flex-row md:justify-evenly md:gap-32'>
        {
                data.map((item) => {
                    // console.log("ITEMS:"+item);
                    return (
        <div className='flex flex-col'>
 <div>
    <img src="" alt="img" />
   </div>
   <div className='flex flex-col '>
    <h4 className='font-bold'>Project:</h4>
    <p className='font-bold'>Project Description:</p>
    <button className='font-bold'>View</button>
   </div>
</div>
             
            )
        }
    
)
}
      
    </div>
  
  
  )
}

export default Project