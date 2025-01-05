import React from 'react';

const About = () => {
  const stats = [
    { name: 'Kilometers in Length', value: '5,000' },
    { name: 'Ethnic Groups', value: '1,300' },
    { name: 'Languages', value: '700' },
    { name: 'Traditional Dances', value: '3,000' },
  ];

  return (
    <div id="About" className="relative isolate overflow-hidden text-black py-20 sm:py-24">
      <div className="mx-auto max-content-width px-6 lg:px-8">
        <div className="mx-auto font-hostGrotesk">
          <h2 className="text-5xl font-semibold sm:text-7xl text-center">Nusantara Map</h2>
          {/* Text + Quotes */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mt-8">
            {/* Left Side: Two Paragraphs */}
            <div className="flex flex-col gap-8 md:w-[60%]">
              <p className="about-text">
                Spanning over thousands of kilometers, Nusantara represents Indonesia's thousands of ethnic groups, each with their own stories waiting to be discovered. Our interactive digital platform transforms this vast cultural landscape into an accessible journey through Indonesia's <span className="font-bold text-dark-blue5">32</span> major islands, bringing centuries of heritage to your fingertips.
              </p>
              {/* Quote */}
            <div className="border-l-2 border-blue2 rounded-sm pl-3 max-w-xl max-md:block hidden">
              <p className="about-text font-semibold text-dark-blue">
                "Indonesia's cultural wealth is our greatest asset in building the future. In this digital era, our challenge is not just to preserve, but to transform cultural heritage so it remains relevant and can be enjoyed by future generations."
              </p>
              <div className="flex mt-4">
                <img
                  className="w-14 rounded-full h-14 object-cover object-center mr-4"
                  src="https://www.polibatam.ac.id/wp-content/uploads/2022/04/Nadiem-Mendikbud-Ristek-2.jpg"
                  alt="img of Nadiem Makarim"
                />
                <div>
                  <p className="font-bold text-lg">Nadiem Makarim</p>
                  <p className="opacity-65 -mt-[2px]">former Minister of Education, Culture, Research, and Technology</p>
                </div>
              </div>
            </div>
              <p className="about-text">
                Navigate through our interactive map by hovering over islands to reveal their names, then dive deeper with a click to histories, iconic landmarks, and more. Whether you're an Indonesian, a curious traveler, or a cultural enthusiast, this digital journey through Nusantara offers a window into one of the world's most diverse nations.
              </p>
            </div>

            {/* Quote md */}
            <div className="border-l-2 border-blue2 rounded-sm pl-3 max-w-xl md:max-w-[40%] md:self-left md:ml-6 md:block hidden ">
              <p className="about-text font-semibold text-dark-blue">
                "Indonesia's cultural wealth is our greatest asset in building the future. In this digital era, our challenge is not just to preserve, but to transform cultural heritage so it remains relevant and can be enjoyed by future generations."
              </p>
              <div className="flex mt-4">
                <img
                  className="w-14 rounded-full h-14 object-cover object-center mr-4"
                  src="https://www.polibatam.ac.id/wp-content/uploads/2022/04/Nadiem-Mendikbud-Ristek-2.jpg"
                  alt="img of Nadiem Makarim"
                />
                <div>
                  <p className="font-bold text-lg">Nadiem Makarim</p>
                  <p className="opacity-65 -mt-[2px]">former Minister of Education, Culture, Research, and Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto lg:max-w-none">
          <dl className="mt-8 grid gap-8 sm:mt-12 grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1 justify-center items-center">
                <dt className="text-base/7 font-nunito">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-blue5 font-hostGrotesk">{stat.value}+</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
