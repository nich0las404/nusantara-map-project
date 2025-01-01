import React from 'react'

const Island = ({id, name, alternativeName, history, funFacts, foods, touristSpots}
) => {
  const formatName = (name) => {
    if (!name) return ;
    
    if (name.toUpperCase() === 'DKI JAKARTA') {
      return 'DKI Jakarta';
    }
    
    return name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return (
    <div className='font-nunito flex flex-col gap-6'>
      <h1 className='text-2xl md:text-3xl font-bold tracking-wide text-dark-blue5 font-hostGrotesk'>{id? `${id}.`: ''} {formatName(name)} <span className='text-[75%] opacity-75'>{alternativeName? `(${formatName(alternativeName)})`: ''}</span></h1>
      {/* history */}
      <div className='text-justify text-lg font-light -mt-6'>{history}</div>
      {/* fun facts */}
      <div className='-mt-2'>
        <p className='font-semibold text-lg sm:text-xl mb-1'>{name? 'Fun Facts About': ''}<span className='text-dark-blue2 font-extrabold'>{name? ` ${formatName(name)}:`: ''}</span></p>
        <ul className='gap-2 flex flex-col sm:text-lg'>
          {funFacts.map((funFact, index) => <li key={index}><span className='text-dark-blue2 font-extrabold'>{index + 1}.</span> {funFact}</li>)}
        </ul>
      </div>
      {/* foods */}
      <div className='text-lg'>
        <p className='font-semibold'>Famous Foods in <span className='font-extrabold text-blue5'>{formatName(name)}:</span></p>
        <ul className='gap-2 flex flex-col mt-1'>
          {foods.map((food, index) => <li>
            <p className='-mb-2'><span className='text-blue5'>{index + 1? '•': ''}</span> {food.name} <span>({food.description})</span></p>
            <a className='text-[80%] text-dark-blue5 opacity-70 duration-200 hover:underline ease-out hover:text-light-blue4' href={food.recipeLink}>Find recipe here!</a>
          </li>)}
        </ul>
      </div>

      {/* tourist Spots */}
    </div>
  )
}

export default Island