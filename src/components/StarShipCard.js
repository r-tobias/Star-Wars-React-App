import React from 'react'

function StarShipCard({starship}) {
  return (
    <div className='starship-card'>
       {starship.name}
    </div>
  )
}

export default StarShipCard