
const Island = ({id, name, alternativeName, history, funFacts, foods, touristSpots}) => {
  
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
    <div id={`${name}`} className='font-nunito flex flex-col'>
      <div className="collapse bg-base-200">
        <input 
        type="checkbox"
         />
        <div className="collapse-title"><h1 className='text-2xl md:text-3xl font-bold tracking-wide text-dark-blue5 font-hostGrotesk'>{id? `${id}.`: ''} {formatName(name)} <span className='text-[75%] opacity-75'>{alternativeName? `(${formatName(alternativeName)})`: ''}</span></h1>
        </div>
        {/* content */}
        <div className="collapse-content flex flex-col gap-6">
          {/* history */}
      <div className='text-justify text-lg font-light -mt-[10px]'>{history}</div>
      {/* fun facts */}
      <div className='-mt-2'>
        <p className='font-semibold text-lg sm:text-xl mb-1'>{name? 'Fun Facts About': ''}<span className='text-dark-blue2 font-extrabold'>{name? ` ${formatName(name)}:`: ''}</span></p>
        <ul className='gap-2 flex flex-col sm:text-lg'>
          {funFacts.map((funFact, index) => <li key={index}><span className='text-dark-blue2 font-extrabold'>{index + 1}.</span> {funFact}</li>)}
        </ul>
      </div>
      {/* foods */}
      <div className='sm:text-lg'>
        <p className='text-lg sm:text-xl font-semibold'>Famous Foods in <span className='font-extrabold text-blue5'>{formatName(name)}:</span></p>
        <ul className='gap-2 flex flex-col mt-1'>
          {foods.map((food, index) => <li>
            <p className='-mb-2 font-semibold'><span className='text-blue5'>{index + 1? '•': ''}</span> {food.name} <span className='opacity-80 font-light'>({food.description})</span></p>
            <a className='text-[80%] text-dark-blue5 opacity-70 duration-200 hover:underline ease-out hover:text-light-blue4' href={food.recipeLink}
            target='_blank'
            >Find recipe here!</a>
          </li>)}
        </ul>
      </div>

      {/* tourist Spots */}
      <div className='max-w-[110%]'>
        <p className='text-lg sm:text-xl font-semibold mb-2'>Notable Tourist Locations in <span className='font-extrabold text-purple'>{formatName(name)}:</span></p>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          {touristSpots.map((spot, index) => 
            <div key={index} className='relative h-[30vw] min-h-52 bg-center object-fit bg-no-repeat bg-cover rounded-2xl'>
              <img className='w-full h-full object-cover rounded-2xl' src={spot.imageUrl} alt={spot.name} />
              <p className='absolute bottom-0 right-0 py-1 px-2 bg-white rounded-tl-lg text-purple font-bold sm:text-sm pb-0'>{spot.name}</p>
            </div>
          )}
        </ul>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Island