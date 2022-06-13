import React from "react"
import Fade from "react-reveal/Fade"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">2017</h1>
            <h3 className="text-white">Daikin Refrigeration Establishment</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">2000+</h1>
            <h3 className="text-white">Total Cold Room Sold</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">100%</h1>
            <h3 className="text-white">Customer Satisfaction</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">500+</h1>
            <h3 className="text-white">Total J&E Hall Compressor Sold</h3>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            Daikin delievers all product range from, <br></br>
            Cold Rooms to Deep Frezzers.
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Daikin Refrigeration 's standard dummy text
            ever
            <br></br>
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Stats</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-50 text-xl">Year Founded</h2>
                <h1 className="text-white text-sm">2020</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Total Funding</h2>
                <h1 className="text-white text-sm">$30M</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Team Members</h2>
                <h1 className="text-white text-sm">120</h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">Our Core Behaviours</h1>
            <p className="mt-10 text-white opacity-50">
              Daikin Refrigeration Product Range: Cold Rooms 
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            Work more easily with everyone
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br></br>
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Built with speed in <br></br> mind
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Work From <br></br>anywhere
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Chat and share in<br></br>one tool
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
