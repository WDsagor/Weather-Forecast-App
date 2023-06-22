import React from 'react'

const CorrentWeather = () => {
  return (
    <div className='mt-6 mx-auto text-gray-300 font-sans flex max-w-2xl'>
        <div className="card w-96 shadow-xl mx-auto bg-transparent p-2">
            <h2 className=" card-title text-3xl p-2">Dhaka Divisition</h2>
            <div className='flex items-center'>
                <img className='w-48' src='https://openweathermap.org/img/wn/10d@4x.png'  alt='weathe icon'/>
              <div><h2 className="card-title text-4xl">37&deg;C</h2>
            <p className='text-xl text-center'>Rain</p></div>
            </div>
        </div>
        <div className="divider divide-white divider-horizontal"></div>
        
        <div className='flex gap-6 items-center'> 
            <div>
                <div>
                    <h1 className='card-title pt-2'>27&deg;C</h1>
                    <p>High</p>
                </div>
                <div>
                    <h1 className='card-title pt-2'>27&deg;C</h1>
                    <p>Low</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='card-title pt-2'>7mph</h1>
                    <p>Wind</p>
                </div>
                <div>
                    <h1 className='card-title pt-2'>0%</h1>
                    <p>Rain</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='card-title pt-2'>05:27</h1>
                    <p>Sunrise</p>
                </div>
                <div>
                    <h1 className='card-title pt-2'>05:27</h1>
                    <p>Sunset</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CorrentWeather