import NusantaraMap from "./map/NusantaraMap"

const Map = ({onIslandClick}) => {
  
  return (
    <div className='w-full'>
        <div className="w-full min-h-[450px] h-[39vw] p-4 bg-gradient-to-l  from-dark-blue5 to-blue overflow-x-auto overflow-y-hidden">
        <NusantaraMap onIslandClick={onIslandClick}/>
        </div>
    </div>
  )
}

export default Map