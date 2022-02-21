import React from 'react'
import "./_Footer.scss"
import pro1 from '../../images/pro1.png'
import pro2 from '../../images/pro2.png'
import pro3 from '../../images/pro3.png'
import pro4 from '../../images/pro4.png'
import pro_main3 from '../../images/pro-main3.png'

function Footer() {
  return (
    <div className='footer'>
          <div className='for_text '>
    <p>Crazy extra features that will</p>
            <h2>Boost your productivity</h2>
            <span>Many features makes it possible to customizes the system according to all your needs </span>
</div>
    <div className='footer_container'>
      
    <div className='for_picture'>

    <div className='content_footer'>
        <div>
         <h3>Improve speed and quality</h3>

         <p>User satisfaction is paramount and focus on usability <br /> andcompleteness</p>
        </div>

        <div className='pro'>
            <img src={pro1} />
        </div>
    </div>

    <div className='content_footer'>
        <div>
         <h3>Flexible ease of use</h3>

         <p>User satisfaction is paramount and focus on usability <br /> andcompleteness</p>
        </div>

        <div className='pro'>
            <img src={pro2} />
        </div>
    </div>


    <div className='content_footer'>
        <div >
         <h3>Easy to manage all your data</h3>

         <p>User satisfaction is paramount and focus on usability <br /> andcompleteness</p>
        </div>

        <div className='pro'>
            <img src={pro3} />
        </div>
    </div>



    <div className='content_footer'>
        <div>
         <h3>Designed for all devices</h3>

         <p>User satisfaction is paramount and focus on usability <br /> andcompleteness</p>
        </div>

        <div className='pro'>
            <img src={pro4} />
        </div>
    </div>
    </div>

    <div className='pro-main'>
        <img src={pro_main3} />
    </div>
    </div>
    </div>
  )
}

export default Footer