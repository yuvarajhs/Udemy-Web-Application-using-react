import React from 'react'

function Navi() {
  return (
    <div className='navi'>
        <div id='bar'>
          <i class="fa-solid fa-bars"></i>
          <div className='bar-content'>
            {/* <div className="inside-bar-links"> */}
              <a href="">Categories</a>
              <a href="">Plans & Pricing</a>
              <a href="">Udemy Business</a>
              <a href="">Login</a>
              <a href="">SignUp</a>
            {/* </div> */}
          </div>
        </div>
        <div><img id='udemy-img' src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="" /></div>
        <div id="categories">
          <a href="" >Categories</a>
          <div className="categories-content">
            <li>Development</li>
            <li>Business</li>
            <li>Finance & Accounting</li>
            <li>It & Software</li>
            <li>Office Productivity</li>
            <li>Personal Development</li>
            <li>Design</li>
            
          </div>
        
        </div>
        <div className="search-div">
            <i id="search-icon"  className="fa-brands fa-searchengin"></i>
            <input type="text" />
        </div>
        <div id='plans'><a href="">Plans & Pricing</a></div>
        <div id='business'><a href="">Udemy Business</a>
            <div id='business-popup'>
              <h2>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</h2>
              <br />
              <p>Try Udemy Business</p>
            </div>
            
        </div>
        
        <div id='cart-icon' ><i  className="fa-solid fa-cart-shopping"></i>
            <div className="cart-block">
                <p>Your Cart is Empty <br /><br />
                    <span><b>Keep Shoping</b></span>
                </p>
            </div>
        </div>
        <div className="login"><a href="" >Login</a></div>
        <div className="signUp"><a href="" >SignUp</a></div>
        <div id="world-icon"><i className="fa-solid fa-globe"></i></div>   
    </div>
  )
}

export default Navi