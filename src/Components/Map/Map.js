import React from 'react'
import './_Map.scss'
import map from '../../images/world-map.png'

function Map() {
  return (
    <div className='map'>
        <div className='map_container'>
            <img src={map} />

            <div className='area'>
                <p>North America</p>
                <h3>70.7%</h3>
            </div>

            <div className='area2'>
                <p>South America</p>
                <h3>1.8%</h3>
            </div>

            <div className='area3'>
                <p>Africa</p>
                <h3>1.8%</h3>
            </div>


            <div className='area4'>
                <p>North Europe</p>
                <h3>8.4%</h3>
            </div>


            <div className='area5'>
                <p>Asia</p>
                <h3>14.4%</h3>
            </div>

            <div className='area6'>
                <p>Austraiia</p>
                <h3>3%</h3>
            </div>

        </div>
     </div>
  )
}

export default Map