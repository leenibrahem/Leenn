import React from 'react'
import imag from './../../assets/Images/plus.svg'
import './Accounts.css'
import board from './../../assets/Images/board.svg'
import bg from './../../assets/Images/download.png'
const Accounts = () => {
  return (
    <div className='Accounts'>
        <div className='First'>
         <div className='FirstPart'>
         <h1>Accounts</h1>
         <p>128 Total</p>
         
         </div>
         <div className='SecondPart'>
            <img src={imag}></img>
         </div>
        </div>
        <div className='Second'>
          <div className='Part1'><img src={bg}></img><input type='input' placeholder='search'></input></div>
          <div className='Part2'>
           <div className='Part22'>
           <ul>
              <li><button>All</button></li>
              <li><button>Prospects</button></li>
              <li><button>Leads</button></li>
              <li><button>Clients</button></li>
            </ul>
           </div>
           <div className='Part22'>
           <button className='Bbtn'><img src={board}/></button>
           </div>
          </div>
        </div>
        <div className='Third'>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <p>New Account</p>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Skylar Lipshutz</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Rayna George</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Alfonso Calzoni</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Paityn Bator</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Wilson Lubin</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Corey Curtis</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Lincoln Vaccaro</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          <div className='One'>
            <div className='One1'>
            <p>BT</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#C8AFF0"/>
</svg>
            </div>
            <div className='One2'>
              <div className='Para'><p>Carter Vaccaro</p></div>
              <div className='Disc'>Contacted: 6/12/2023</div>
            </div>
          </div>
          
          
        </div>
    </div>
  )
}

export default Accounts