import React from 'react'
 
function Buttons({ color , text ,addbtn}) {
    
  return (<button onClick={addbtn} style={{ backgroundColor:color ,color:'white'}} className='btn btn-block'>{text}</button>
)}
Buttons.defaultProps={
    color:'black',
}


export default Buttons
