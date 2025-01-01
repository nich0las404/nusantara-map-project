import React from 'react'
import Island from './Island'

const GroupedIslands = ({majorIsland}) => {
  return (
    <div className='mt-4 font-hostGrotesk grid gap-14 mx-4 max-w-[950px]'>
      <h1 className='text-5xl md:text-6xl font-bold text-center tracking-wide text-dark-blue -mb-8 mt-3'>{majorIsland[0].title}</h1>
      {majorIsland.slice(1).map((smallisland, index) => <Island key={index}
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