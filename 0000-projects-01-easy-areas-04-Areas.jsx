import React from 'react'

function Areas({area}) {

    const {id, areaname, description, image} = area
  return (
    <div className='area-div'>
        <img className='area-image' src={image} alt="area-image" />
        <h3 className='area-name'>{areaname}</h3>
        <p className='area-description'>{description}</p>
    </div>
  )
}

export default Areas
