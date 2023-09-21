import React from 'react'

const Test = () => {
    const handleClick = (event) => {
        let tecla = event.key; 
        tecla = tecla.toLowerCase();
        if(tecla == 'a' || tecla == 'e' || tecla == 'i' || tecla == 'o' || tecla == 'u')
            event.preventDefault();
    }

  return (
    <div className='col-md-4'>
        <input type='text' className='form-control m-4 col-md-3' placeholder='Escribí...' onKeyDown={handleClick}></input>
    </div>
  )
}

export default Test