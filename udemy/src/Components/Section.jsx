import React from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'

function Section() {
  return (
    <div className="section">
        <div id='sec-bg-img'>
            <div className="container-img">
                <div className='cont-container-img'>
                    <h1>Last day to see where the deals lead</h1>
                    <p>Save on courses from just ₹399 today. Discover new possibilities tomorrow.</p>
                </div>
            </div>

            <div className="container-content">
                <h1>All the skills you need in one place</h1>
                <p>From critical skills to technical topics, Udemy supports your professional development.</p>
            </div>
            <div className='lists'>
                <li>Web Development</li>
                <li>IT Certification</li>
                <li>LeaderShip</li>
                <li>data Science</li>
                <li>Communication</li>
                <li>Business Analitics & Intelligence </li>
                
            </div>

            <div className='lists-2'>
                <li id='l1'>Web Development <br /><span>13.3M+ learners</span></li>
                <li id='l2'>Java Script<br /><span>16.6M+ learners</span></li>
                <li id='l3'>React JS <br /><span>7M+ learners</span></li>
                <li id='l4'>Angular<br /><span>4M+ learners</span></li>
                <li id='l5'>Java<br /><span>33.3M+ learners</span></li>
                <li id='l6'>Android Development <br /><span>13.3M+ learners</span></li>
                <li id='l7'>IOS Development<br /><span>13.3M+ learners</span></li>
                
            </div>

            <div className="horiz-img">

                

                <div className="img-box" id='cart1'>
                    <div className="pop-up-box" id='pop-up1'>
                        <h1>The Complete 2024 Web Development Bootcamp</h1>
                        <h5 className='green-color'>Updated March 2024</h5>
                        <h6 className='light-color'>61.5 total hoursAll LevelsSubtitlestotal hoursAll LevelsSubtitles</h6>
                        <br />
                        <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                        <br />
                            <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>

                            <li>After the course you will be able to build ANY website you want.</li>

                            <p className='add-btn'>Add to Cart </p>
                    </div>
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

                
                <div className="img-box" id='cart2'>

                    <div className="pop-up-box" id='pop-up1'>
                        <h1>The Complete 2024 Web Development Bootcamp</h1>
                        <h5 className='green-color'>Updated March 2024</h5>
                        <h6 className='light-color'>61.5 total hoursAll LevelsSubtitlestotal hoursAll LevelsSubtitles</h6>
                        <br />
                        <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                        <br />
                            <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>

                            <li>After the course you will be able to build ANY website you want.</li>

                            <p className='add-btn'>Add to Cart </p>
                    </div>

                    <div className="pop-up-box" id='pop-up2'>
                        <h1>The Web Developer Bootcamp 2024</h1>
                        <h5 className='green-color'>Updated March 2024</h5>
                        <h6 className='light-color'>74 total hoursAll LevelsSubtitles</h6>
                        <br />
                        <p>10 Hours of React just added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!</p>
                        <br />
                            <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
                            <li>Learn the latest technologies, including Javascript, React, Node and even Web3 development.</li>
                            <li>After the course you will be able to build ANY website you want.</li>
                    </div>
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
                <div className="img-box" id='cart3'>
                <div className="pop-up-box" id='pop-up3'>
                        <h1>Web Development Masterclass - Online Certification Course</h1>
                        <h5 className='green-color'>Updated September 2022 26</h5>
                        <h6 className='light-color'>total hoursAll LevelsSubtitles</h6>
                        <br />
                        <p>Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP Stack | HTML | CSS | JavaScript | PHP | + More</p>
                        <br />
                            <li>Understand the essentials of Local and Wide Area Networks</li>
                            <li>Setup a basic network.</li>
                            <li>Register a domain name with Domain Privacy</li>
                    </div>
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
                <div className="img-box" id='cart4'>
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
                
            </div>

        </div>

        
    </div>
  )
}

export default Section