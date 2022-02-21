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
        <div className='productive_container'>
          <div className='productive_content'>
          <img src={future_img} />
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