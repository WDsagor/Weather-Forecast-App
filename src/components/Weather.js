import React from "react";

const Weather = () => {
  const days = [1, 2, 3, 4];
  console.log(days);
  return (
    <div className=" max-w-2xl mx-auto  text-gray-300 font-sans">
      <h1 className=" text-center text-2xl mb-5 text-white mt-10">
        4 Days Forecast Weather data
      </h1>
      <div className=" grid grid-cols-4 gap-3">
        {days.map((day, i) => {
          return (
            <div
              key={i}
              className="card w-full cursor-pointer shadow-xl hover:bg-slate-500"
            >
              <div className="card-body p-5 text-center ">
                <h2 className="card-title">Friday</h2>
                <img
                  className=" w-24"
                  src="https://openweathermap.org/img/wn/10d@4x.png"
                  alt="weathe icon"
                />
                <div className="flex justify-center gap-6">
                  <div>
                    <h1 className="card-title">27&deg;C</h1>
                    <p>High</p>
                  </div>
                  <div>
                    <h1 className="card-title">27&deg;C</h1>
                    <p>Low</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
