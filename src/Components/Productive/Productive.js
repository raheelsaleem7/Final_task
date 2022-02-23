import React from 'react'
import './_Productive.scss'
import future_img from '../../images/fature-video.png'
import down from '../../images/downarrow.png'
import person from '../../images/am-fea4.png'
import person2 from '../../images/am-fea3.png'
import person3 from '../../images/am-fea2.png'
import person4 from '../../images/am-fea1.png'

function Productive() {
    const data = [
        {
            img: person,
            h4:"hour support 24"
        },
        {
            img: person2,
            h4:"Quick access"
        },
        {
            img: person3,
            h4:"Data security"
        },
        {
            img: person4,
            h4:"Free trial"
        },
    ]
  return (
    <div className='productive'>
      <div className='curve2'></div>
        <div className='productive_container'>
          <div className='productive_content'>
          <img src={future_img} />
          <div className='video'>
          <h4>Watch Video</h4>
          <div className='play'>
          <svg xmlns="http://www.w3.org/2000/svg" width="10px" viewBox="0 0 384 512"><path fill='white' d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
           </div>
          </div>
          </div>
          

          <div className='down_arrow'>
            <img src={down} />
          </div>

<div className='productive_description'>
          <div className='productive_context'>
           <h5>Explore great features</h5>

          <h2>This will boost your<br /> productivity</h2>

          <p>With your widr range of features, you can creata a custom app<br />
          no matter where you are: a restaurant, a realtor, a small <br /> !business, a rock band and all the rest</p>
        </div>

        <div className='productive_context2'>
           <h5>A set of outstanding features</h5>

          <h2>Deliver exceptional user <br /> .experiences</h2>

          <p>Many features make it possible to customize the system <br /> .according to all your needs</p>
        </div>
</div>

        </div>
        <div className='customer_area'>
        {
            data.map((Productive) => (
        <div className='customer'>
        <div className='person'>
         <img src={Productive.img} />
         </div>
         <h4>{Productive.h4}</h4>
         </div>
  ))
}
</div>
        </div>
  )
}

export default Productive