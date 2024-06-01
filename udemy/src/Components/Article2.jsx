import React from 'react'
import Angledimg from '../Assets/2024_Angled_Trends_report_image.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'

function Article2() {
  return (
    <>
    <div className='article-2'>
        <div className='article-2-div1'>
            <h1>Top trends for the future of work</h1>
            <br />
            <p>GenAI and leadership are at the core of today's skills-based economy. 
                Get the 2024 Global Learning & Skills Trends Report to learn more.
            </p>
            <p id='get-btn'>Get Report ➜</p>
        </div>
        <div className="article-2-div2">
            <img src={Angledimg} alt="" />
        </div>
        <br />
        
     </div>

        <div className="trending">
            <h1>Trending Now</h1>
            <br />
            <p className='line'></p>
            <br />
            <div className="trend-container">
                <div className="trend-contner-box">
                    <h2>ChatGPT is a top skill</h2> <br />
                    <li>See ChatGPT Courses <br /><span className='light-color'>2,842,234 learners</span></li> <br />
                    <p id='show-trend-btn'>Show all trending Skills</p> <br />
                </div>
          
                <div className="trend-contner-box">
                    <h2>Development</h2> <br />
                    <li>Python <br /><span className='light-color'>43,868,186 learners</span></li> <br />
                    <li>Web <br />Development <span className='light-color'> <br />13,004,712 learners</span></li> <br />
                    <li>Data Science <br /><span className='light-color'>7,038,312 learners</span></li> <br />
                </div>
            
            
                <div className="trend-contner-box">
                    <h2>Design</h2> <br />
                    <li>Blender <br /><span className='light-color'>43,868,186 learners</span></li> <br />
                    <li>Graphics Design <br /><span className='light-color'>13,004,712 learners</span></li><br />
                    <li>UX Design <br /><span className='light-color'>7,038,312 learners</span></li><br />
                </div>

                <div className="trend-contner-box">
                    <h2>Business</h2><br />
                    <li>PMI PMP <br /><span className='light-color'>43,868,186 learners</span></li><br />
                    <li>Microsoft Power BI <br /><span className='light-color'>13,004,712 learners</span></li><br />
                    <li>Project Management <br /><span className='light-color'>7,038,312 learners</span></li><br />
                </div>

            </div>    
            
        </div>

        <div className='Learners'>
            <h1>Learners are viewing</h1>
            <div className="horiz-img">
                <div className="img-box">
                    <img src={img1} alt="" />
                    <div className='img-caption'>
                        <h3 className='space'>The Web Developer Bootcamp 2024</h3>
                        <p className='light-color space'>Dr. Angela Yu</p>
                        <p className='space'><b>4.4</b> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> 
                            <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star-half-stroke"></i>
                            <span className='light-color'> (378,181)</span>
                        </p>
                        <p className='space'><b>₹449</b> <span className='light-color line-through'>₹3,099</span></p>
                        <p id='mark' className='space'>Bestseller</p>   
                    </div>
                </div>
                <div className="img-box">
                    <img src={img2} alt="" />
                    <div className='img-caption'>
                        <h3 className='space'>The Complete 2024 Web Development Bootcamp</h3>
                        <p className='light-color space'>Colt Steele</p>
                        <p className='space'>
                            <b>4.4</b> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> 
                            <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star-half-stroke"></i>
                            <span className='light-color'> (₹3.099)</span>
                        </p> 
                        <p className='space'><b>₹449</b> <span className='light-color line-through'>₹3,099</span></p>  
                    </div>
                </div>
                <div className="img-box">
                    <img src={img3} alt="" />
                    <div className='img-caption'>
                        <h3 className='space'>Web Development Masterclass - Online Certification Course</h3>
                        <p className='light-color space'>YouAccel Training</p>
                        <p className='space'>
                            <b>4.4</b> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> 
                            <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star-half-stroke"></i>
                            <span className='light-color'> (₹3.099)</span>
                        </p>  
                        
                        <p className='space'><b>₹449</b> <span className='light-color line-through'>₹3,299</span></p> 
                    </div>
                </div>
                <div className="img-box">
                    <img src={img4} alt="" />
                    <div className='img-caption'>
                        <h3 className='space'>Practical Web Development: 22 Courses in 1</h3>
                        <p className='light-color space'>Creative Online School</p>
                        <p className='space'>
                            <b>4.4</b>  <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> 
                            <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star-half-stroke"></i>
                            <span className='light-color'> (378,181)</span>
                        </p>   
                        <p className='space'><b>₹449</b> <span className='light-color line-through'>₹3,299</span></p>
                        
                    </div>
                </div>
        </div>

        </div>



        <div className='article-3'>
            <div className='a3-container'>
                <p className='big-font'>Booz | Allen | Hamilton</p>
                <br />
                <h3>Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</h3>
                <br />

                <div className='a3-inner-container'>
                    <div className='a3-inner-container-box'>
                        <h1>93%</h1>
                        <p className='light-color'>retention rate among participating employees</p>
                    </div>
                    <div className='a3-inner-container-box'>
                        <h1>65%</h1>
                        <p className='light-color'>of learners noted a positive impact on their productivity</p>
                    </div>
                </div>
            </div>

            <div className='a3-container-img'>
                <img src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals" alt="" />
            </div>
        </div>
    </>
  )
}

export default Article2