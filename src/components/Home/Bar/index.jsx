import React from 'react';
import './style.css';

const Bar = ({value,searching,clear,formSubmit}) => {
  return (
    <div className='bar'>
        <form onSubmit={formSubmit} >
            <input type="text" placeholder='Category here' value={value} onChange={searching} />
            {value && <span  onClick={clear}>x </span>
            }
            <button>Search</button>
        </form>
      
    </div>
  )
}

export default Bar;
