import React from 'react'
import './_Nav.scss'
import logo from "../../images/footer-logo.png"

function Nav() {
  return (
    <div className='nav'>
    <div className='nav-container'>
         <div className='left'>
         <div className='mosto'>
            <button>Get Mosto</button>
         </div>
      <div className='pk'>
         <div className='down-icon'>
         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg> */}
         </div>
         <div>
            <h4>PK</h4>
         </div>
     </div>
       </div>

       <div className='right'>
          <div className='for-list'>
              <ul>
                  <li>
                   <span>Contact</span>
                  </li>
                  <li>
                  <span>Blog</span>
                  {/* <div className='down-icon'>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
         </div> */}
                      </li>
                     
                      <li>
                      <span>Pages</span>
                      </li>
                      <li>
                      <span>Pricing</span>
                      </li>
                      <li>
                      <span>Feature</span>
                      </li>
                      <li>
                      <span>Home</span>
                      </li>
              </ul>
          </div>

          <div className='logo'>
         <img src={logo} />
          </div>
       </div>


    </div>

    </div>
  )
}

export default Nav