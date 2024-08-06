import React from 'react'

const Project = (props) => {
  const data = props.data;
  console.log("Project")
  
  return (
    <div className='flex flex-col gap-5 py-5 md:flex-row md:justify-evenly md:gap-32'>
       
     { data.map((item)=>{
        return (
          <div className='flex flex-col w-full h-full px-12'>
          <div>
             <img src={item.pic} alt="img" />
            </div>
            <div className='flex flex-col '>
             <h4 className='font-bold'>Project:{item.project}</h4>
             <p className='font-bold'>Project Description:{item.descr}</p>
             <button className='font-bold w-full h-fit bg-thapa-400'>View</button>
            </div>
         </div>
        )
      })}
     
                    
             
           

      
    </div>
  
  
  )
}

export default Project