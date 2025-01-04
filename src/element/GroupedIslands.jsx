import React from 'react'
import Island from './Island'


const GroupedIslands = ({majorIsland}) => {
  return (
    <div id={majorIsland[0].title} className='mt-4 font-hostGrotesk grid gap-4 mx-4 max-content-width'>
      <h1 className='text-5xl md:text-6xl font-bold text-center tracking-wide text-dark-blue mt-4'>{majorIsland[0].title}</h1>
      {majorIsland.slice(1).map((smallisland) => <Island
      id={smallisland.id}
      name={smallisland.name}
      alternativeName={smallisland.alternativeName}
      history={smallisland.history}
      funFacts={smallisland.funFacts}
      foods={smallisland.foods}
      touristSpots={smallisland.touristSpots}
      />)}
    </div>
  )
}

export default GroupedIslands