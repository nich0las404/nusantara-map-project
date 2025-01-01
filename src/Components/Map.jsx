import NusantaraMap from "./map/NusantaraMap"

const Map = () => {
  
  return (
    <div className='w-full mt-20 md:mt-24 text-center flex flex-col justify-center items-center'>
      <h1 className='text-5xl md:text-7xl font-hostGrotesk font-semibold px-4 text-dark-blue'>Nusantara Map</h1>
      <p className='font-nunito mt-4 max-w-4xl text-justify px-6 text-[16.5px] mb-5'>
        The Nusantara landscape stretches along  5,000 kilometers, creating a vast maritime territory with diverse ecosystems. From the volcanic mountains that pierce the clouds to the crystal-clear waters teeming with marine life, Nusantara's landscape is breathtakingly varied. The Ring of Fire has blessed these islands with fertile volcanic soil, creating lush rainforests and productive agricultural lands.</p>

        <div className="w-full min-h-[450px] h-[39vw] p-4 bg-gradient-to-l  from-dark-blue5 to-blue overflow-x-auto overflow-y-hidden">
        <NusantaraMap/>
        </div>
    </div>
  )
}

export default Map