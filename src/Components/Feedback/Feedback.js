import React from 'react'
import "./_Feedback.scss"
import img1 from '../../images/how3.png'
import img2 from '../../images/how2.png'
import img3 from '../../images/how1.png'

function Feedback() {
  return (
    <div className='feedback'>
        <div className='feedback_container'>
            <p>Describe our app</p>
            <h2>Let's see how it works</h2>
            <span>It's easier than you think, follow 3 easy and simple steps</span>

 <div className='three'>
            <div className='about_app'>

              <div className='for_img'>
               <img src={img1} />
              </div>
              <div className='bg-linear'>
            <h2>1</h2>
              </div>
              <button>ENJOY THE APP</button>

              <h4>Have many questions <br /> <span>FAQ</span> check our</h4>

              <span>Explore and share mosto</span>
            </div>


            <div className='about_app'>

              <div className='for_img'>
               <img src={img2} />
              </div>
              <div className='bg-linear'>
            <h2>2</h2>
              </div>

              <button>Create an account</button>

              <h4>day free trail-14</h4>

              <span>Sign up for Mosto account <br /> One account for all devices</span>
            </div>




            <div className='about_app'>

              <div className='for_img'>
               <img src={img3} />
              </div>
              <div className='bg-linear'>
            <h2>3</h2>
              </div>

              <button>Download the app</button>
              <span>Download the app for either <br /> Windows,Macs and Andriod</span>
            </div>

            <div className='social'>
                     
<div className='icons'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
</div>


                <div className='icons'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                </div>

                <div className='icons'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
                </div>

            </div>

             

         </div>   
        </div>
    
    </div>
  )
}

export default Feedback