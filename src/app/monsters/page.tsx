import React from 'react'
import GetAllMonsters from './GetAllMonsters'

export default function Monsters() {
  return (
    <div className='monsters'>
      <h1>Alla monster i monster uneversity
      </h1>
        <p>klicka på ett monster för att få mer detaljer</p>
      <GetAllMonsters/>
    </div>
  )
}
