import React from 'react'

const Skill = (props) => {
    const data = props.data;
    return (
        <div className='flex  flex-wrap justify-evenly gap-1 p-4 md:gap-5'>

            {
                data.map((item) => {
                    // console.log("ITEMS:"+item);
                    return (
                        <div className='flex flex-row justify-between  rounded-full gap-4 border-2 border-thapa-400  p-4 font-bold hover:bg-thapa-400 hover:text-white'>
                            <h4 className=''>{item.skill}</h4>
                            -
                            <span className=''>{item.level}</span>
                        </div>
                    )
                }
            
        )
    }
    </div>





    )
}

export default Skill