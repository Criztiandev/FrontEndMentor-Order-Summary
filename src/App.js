import './App.css';
import {music,hero} from './Asset/Img/_index.js'
function App() {
  return (
    <div className=" bg-primary-pb h-screen flex-center mob:bg-mobile mob:bg-cover mob:bg-top mob:bg-no-repeat desc:bg-desc desc:bg-center-top desc:bg-contain desc:bg-no-repeat">

        
      <main className=' w-350px bg-white   rounded-[1rem] text-center shadow-xl'>
            <img src={hero} alt="hero-img" className='rounded-t-[1rem]' />
            <article>
              <h1 className='text-25px text-neutral-dk font-bold m-4 '>Order Summary</h1>

              <p className='text-16px text-neutral-desb font-medium  text-center px-10'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            </article>

            <section className='bg-neutral-vpl flex justify-between items-center m-6 p-4 rounded-xl'>
              <img src={music} alt="music-icon" />

              <div className="">
                <h2 className='font-bold text-neutral-dk'>Annual Plan</h2>
                <span className='text-neutral-desb'>$59.99/year</span>
              </div>

              <a href='$' className='text-primary-bl font-semibold border-b-2 border-primary-bl cursor-pointer hover:text-primary-bl-50 hover:border-primary-bl-50'>Change</a>
            </section>

            <div>
                <button className='bg-primary-bl text-18px text-white font-bold w-[85%] p-4 mb-2 rounded-xl shadow-lg shadow-primary-bl-50 hover:bg-primary-bl-50'>Proceed to Payment</button>


                <button className='text-neutral-dk-50 text-18px text-white font-bold w-[85%] p-3 mb-4 rounded-xl hover:text-neutral-dk'>Cancel Order</button>
            </div>
      </main>


      </div>
  );
}

export default App;
