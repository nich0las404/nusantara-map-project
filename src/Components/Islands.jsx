import React from 'react'
import GroupedIslands from './element/GroupedIslands'
import { majorIslands } from '../info/Island_info'
const Islands = () => {
  return (
    <div className='w-full justify-center flex flex-col items-center'>
      {majorIslands.map((majorIsland, index) =>
        <GroupedIslands key={index}
        majorIsland={majorIsland}
        />
      )}
    </div>
  )
}

export default Islands