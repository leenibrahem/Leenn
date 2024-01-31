import React from 'react'
import './CallHistory.css'
import icon from './../../assets/Images/img.svg'
import img1 from './../../assets/Images/search.svg'
import img2 from './../../assets/Images/arrow.svg'
import call from './../../assets/Images/call.svg'
import check from './../../assets/Images/check.svg'
import play from './../../assets/Images/play.svg'
import dot from './../../assets/Images/dot.svg'
import badge from './../../assets/Images/badge.svg'
import voice from './../../assets/Images/Voicemail.svg'
import lead from './../../assets/Images/user.svg'
import star from './../../assets/Images/star.svg'


const CallHistory = () => {
  return (
    <div className='CallHistory'>
      <div className='Heading'>
        <div className='FirstPart'>
          <div><h1>Call History</h1></div>
          <div><p>7 Calls Today | 1 Missed</p></div>
        </div>
        <div className='SecondPart'>
          <button>
            <img src={icon}></img>
            New Call
          </button>
        </div>
      </div>
      <div className='List'>
        
          <div className='Child1'>
          <ul>
            <li><button>All</button></li>
          <li><button>Missed</button></li>
          <li><button>Prospect</button></li>
          <li><button>Lead</button></li>
          <li><button>Client</button></li>
          <li><button>No Account Created</button></li>
        </ul>
        </div>
        <div className='Part1'><img src={img1}></img><input type='input' placeholder='search'></input></div>

      </div>
      <div className='CallHeading'>
        <div className='FirstRow'>
        <div><p>Recent</p></div>
        <div className='Call'>
          <div><p>Time (EST) </p></div>
          <div><img src={img2}></img></div>
         
        
        </div>
        <div><p>Account Status</p></div>
        <div className='Field'><p>Recording</p></div>
      </div>
      <div className='SecondRow'>
        <div className='Content'><div className='Teaxt'><img src={call}></img><p>254-439-9092</p></div>
        <div className='Discreption'>Name: Miles Vent</div>
        </div>
        
        
        <div className='Content'>
          <div className='Txt'>
          <div className='Txt1'>Fri Dec 16, 2022 - </div>
        <div className='Txt1'>18:59:44</div>
        </div>
        </div>
        <div className='Content'><div className='Check'>
          <div><img src={check}></img></div>
          <div><p>Client</p></div></div></div>

        <div className='Content'><div className='Peuse'>
          <div className='Bg1'><img src={play}></img></div>
          <div><p>0:00 / 2:48</p></div>
          <div className='Bg2'><img src={dot}></img></div>
          </div></div>
      </div>
      <div className='SecondRow'>
        <div className='Content'><div className='Teaxt'><p>884-288-7422</p></div>
        <div className='Discreption'>Name: Jack Black</div>
        </div>
        
        
        <div className='Content'>
          <div className='Txt'>
          <div className='Txt1'>Fri Dec 16, 2022 - </div>
        <div className='Txt1'>18:59:44</div>
        </div>
        </div>
        <div className='Content'><div className='Check'>
          <div><img src={check}></img></div>
          <div><p>Client</p></div></div></div>

        <div className='Content'><div className='Peuse'>
          <div className='Bg1'><img src={play}></img></div>
          <div><p>0:00 / 2:48</p></div>
          <div className='Bg2'><img src={dot}></img></div>
          </div></div>
      </div>
      <div className='SecondRow'>
        <div className='Content1'><div className='Teaxt'><img src={call}></img><p>884-323-3222</p></div>
        <div className='Discreption'>Name: Unknown</div>
        </div>
        
        
        <div className='Content1'>
          <div className='Txt'>
          <div className='Txt1'>Fri Dec 16, 2022 - </div>
        <div className='Txt1'>18:59:44</div>
        </div>
        </div>
        <div className='Content1'><div className='Badge'>
          <div><img src={badge}></img></div>
          <div><p>No Information</p></div></div></div>

        <div className='Content1'><div className='Peuse'>
          <div className='Bg'><img src={voice}></img></div>
          <div className='Bg1'><img src={play}></img></div>
          <div><p>0:00 / 2:48</p></div>
          <div className='Bg2'><img src={dot}></img></div>
          </div></div>
      </div>
      <div className='SecondRow'>
        <div className='Content'><div className='Teaxt'><p>884-288-7422</p></div>
        <div className='Discreption'>Name: Unknown</div>
        </div>
        
        
        <div className='Content'>
          <div className='Txt'>
          <div className='Txt1'>Fri Dec 16, 2022 - </div>
        <div className='Txt1'>18:59:44</div>
        </div>
        </div>
        <div className='Content'><div className='Badge'>
          <div><img src={badge}></img></div>
          <div><p>No Information</p></div></div></div>

        <div className='Content'><div className='Peuse'>
          <div className='Bg1'><img src={play}></img></div>
          <div><p>0:00 / 2:48</p></div>
          <div className='Bg2'><img src={dot}></img></div>
          </div></div>
      </div>
      <div className='SecondRow'>
        <div className='Content'><div className='Teaxt'><p>884-288-7422</p></div>
        <div className='Discreption'>Name: Unknown</div>
        </div>
        
        
        <div className='Content'>
          <div className='Txt'>
          <div className='Txt1'>Fri Dec 16, 2022 - </div>
        <div className='Txt1'>18:59:44</div>
        </div>
        </div>
        <div className='Content'><div className='Lead'>
          <div><img src={lead}></img></div>
          <div><p>Lead</p></div></div></div>

        <div className='Content'><div className='Peuse'>
          <div className='Bg1'><img src={play}></img></div>
          <div><p>0:00 / 2:48</p></div>
          <div className='Bg2'><img src={dot}></img></div>
          </div></div>
      </div>
      <div className='SecondRow'>
        <div className='Content'><div className='Teaxt'><p>884-288-7422</p></div>
        <div className='Discreption'>Name: Unknown</div>
        </div>
        
        
        <div className='Content'>
          <div className='Txt'>
          <div className='Txt1'>Fri Dec 16, 2022 - </div>
        <div className='Txt1'>18:59:44</div>
        </div>
        </div>
        <div className='Content'><div className='Star'>
          <div><img src={star}></img></div>
          <div><p>Prospect</p></div></div></div>

        <div className='Content'><div className='Peuse'>
          <div className='Bg1'><img src={play}></img></div>
          <div><p>0:00 / 2:48</p></div>
          <div className='Bg2'><img src={dot}></img></div>
          </div></div>
      </div>
      
        </div>
      
    </div>
  )
}

export default CallHistory