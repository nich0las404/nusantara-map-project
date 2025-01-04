import React from 'react'

const About = () => {
  const stats = [
    { name: 'Kilometers in Length', value: '5,000+' },
    { name: 'Ethnic Groups', value: '1,300+' },
    { name: 'Languages', value: '700+' },
    { name: 'Traditional Dances', value: '3,000+' },
  ]
  return (
    <div id='about' className="relative isolate overflow-hidden text-black py-20 sm:py-24">
      
      <div className="mx-auto max-content-width px-6 lg:px-8">
        <div className="mx-auto  font-hostGrotesk">
          <h2 className="text-5xl font-semibold sm:text-7xl text-center">Nusantara Map</h2>
          {/* text + quotes */}
          <div className='grid gap-6'>
          <p className="about-text mt-8">
            Spanning over thousands of kilometers, Nusantara represents Indonesia's thousands of ethnic groups, each with their own stories waiting to be discovered. Our interactive digital platform transforms this vast cultural landscape into an accessible journey through Indonesia's <span className='font-bold text-dark-blue5'>32</span> major islands, bringing centuries of heritage to your fingertips.
          </p>
          {/* quote */}
          <div className='border-l-2 border-blue2 pl-3 max-w-xl'>
            <p className='about-text font-semibold'>"Indonesia's cultural wealth is our greatest asset in building the future. In this digital era, our challenge is not just to preserve, but to transform cultural heritage so it remains relevant and can be enjoyed by future generations."</p>
            <div className='flex mt-4 '>
              <img className='w-14 rounded-full h-14 object-cover object-center mr-4' src="https://www.polibatam.ac.id/wp-content/uploads/2022/04/Nadiem-Mendikbud-Ristek-2.jpg" alt="img of Nadiem Makarim" />
              <div>
              <p className='font-bold text-lg'>Nadiem Makarim</p>
              <p className='opacity-70 -mt-[2px]'>former Minister of Education, Culture, Research, and Technology</p>
              </div>
            </div>
          </div>
          <p className='about-text'>
            Navigate through our interactive map by hovering over islands to reveal their names, then dive deeper with a click to histories,iconic landmarks, and more. Whether you're an Indonesian, a curious traveler, or a cultural enthusiast, this digital journey through Nusantara offers a window into one of the world's most diverse nations.
          </p>
          </div>
        </div>
        {/* stats */}
        <div className="mx-auto mt-4 lg:max-w-none">
          <dl className="mt-8 grid gap-8 sm:mt-12 grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1 justify-center items-center">
                <dt className="text-base/7 font-nunito">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-blue5 font-hostGrotesk">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About