import React from 'react'
import './_Center.scss'
import mob from '../../images/banner1-2.png'
import click from '../../images/click.png'


function Center() {
  return (
    <div className='center'>
        <div className='center_container'>
       <div className='mob'>
        <div className='mobile'>
              <img src={mob} />
        </div>
        <div className='click'>
            <div className='circle'>
            <img src={click} />
           </div>

           <div className='clickME'>
        <button>click me</button>
        </div>
        
        </div>

       </div>

        <div className='description'>
            <div className='context'>
           <h2>The perfect <br /> app for more <br /> than just fun</h2>         
       </div>

       <p>Simple,intuitive and powerful application to <br /> .manage your business</p>

      <div className='btn'>
       <div className='explore'>
           <button>EXPLORE FEATURES</button>
       </div>
       <div className='buy'>
           <button>GET STARTED FOR FREE</button>
       </div>
        </div>
</div>
<div className='dot-img'>
 
 
</div>
        </div>
    </div>
  )
}

export default Center