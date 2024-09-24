// import React from 'react';
import { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    // Cek apakah user sudah login di localStorage
    const loggedIn = localStorage.getItem('isSignedIn') === 'true'
    setIsSignedIn(loggedIn)
  }, [])

  const handleLogout = () => {
    // Hapus data login di localStorage
    localStorage.removeItem('isSignedIn')
    setIsSignedIn(false)
  }

  return (
    <div>
      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
          <div className="" href="index.html">
            <img src="./logo.svg" alt="" />
          </div>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
          <div className="home-link" href="index.html">
            <img src="./logo.svg" alt="" />
          </div>
          <div className="home1" href="products.html">
            <div className="home3">
              <div className="home2">
                <a href="">Home</a>
                <a href="blog.html">List Movie</a>
              </div>
              <>
                {isSignedIn ? (
                  <div className="profile-sign">
                    <img
                      src="./story.jpg"
                      alt="Profile"
                      className="profile-img"
                    />
                    {/* tombol signout */}
                    <button className="button-signout" onClick={handleLogout}>
                      <Link to="/">Sign Out</Link>
                    </button>
                  </div>
                ) : (
                  <div className="signup1" href="login">
                    <Link className="signup2" to="/signup">
                      Sign Up
                    </Link>
                    {/* <a className="signup2" href="/signup">
                    
                      Sign Up
                    </a> */}
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </nav>
      <header>
        <div className="section__container header__container">
          <div className="header__content">
            <div>
              <p className="sub__header">Nearest Cinema, Newest Movie,</p>
              <h1 className="main1">Find out now!</h1>
            </div>
          </div>
          <div className="header__image">
            <img src="./allgambar.png" alt="header" />
          </div>
        </div>
      </header>
      <section className="destination__container">
        <div className="section__header">
          <div className="">
            <h2 className="section__title">Now Showing</h2>
            <div className="section2">
              <h1 className="section__title1"></h1>
            </div>
          </div>
          <div className="destination__nav">
            <a href="">view all</a>
          </div>
        </div>
        <div className="destination__grid">
          <div className="destination__card">
            <img src="./gambar1.svg" alt="destination" />
            <div className="destination__details">
              <p className="destination__title">Book Now</p>
            </div>
          </div>
          <div className="destination__card">
            <img src="./gambar2.svg" alt="destination" />
            <div className="destination__details">
              <p className="destination__title">Book Now</p>
            </div>
          </div>
          <div className="destination__card">
            <img src="./gambar3.svg" alt="destination" />
            <div className="destination__details">
              <p className="destination__title">Book Now</p>
            </div>
          </div>
          <div className="destination__card">
            <img src="./gambar1.svg" alt="destination" />
            <div className="destination__details">
              <p className="destination__title">Book Now</p>
            </div>
          </div>
          <div className="destination__card">
            <img src="./gambar2.svg" alt="destination" />
            <div className="destination__details">
              <p className="destination__title">Book Now</p>
            </div>
          </div>
        </div>
      </section>
      <section className="trip">
        <div className="trip__container">
          <div className="section__header2">
            <div className="">
              <h2 className="section__title2">Upcoming Movies</h2>
            </div>
            <div className="destination__nav">
              <a href="">view all</a>
            </div>
          </div>
          <div className="text0">
            <div className="text1">
              <a className="text2">September</a>
            </div>
            <div className="text1">
              <a className="text2">October</a>
            </div>
            <div className="text1">
              <a className="text2">November</a>
            </div>
            <div className="text1">
              <a className="text2">December</a>
            </div>
            <div className="text1">
              <a className="text2">January</a>
            </div>
            <div className="text1">
              <a className="text2">February</a>
            </div>
            <div className="text1">
              <a className="text2">March</a>
            </div>
            <div className="text1">
              <a className="text2">April</a>
            </div>
            <div className="text1">
              <a className="text2">May</a>
            </div>
            <div className="text1">
              <a className="text2">Juni</a>
            </div>
            <div className="text1">
              <a className="text2">July</a>
            </div>
            <div className="text1">
              <a className="text2">August</a>
            </div>
          </div>
          <div className="gmb0">
            <div className="gmb1">
              <div>
                <img src="./gmb1.svg" alt="" />
              </div>
              <div className="gmb2">
                <h1>Black Widow</h1>
                <p>Action, Adventure, Sci-Fi</p>
                <div className="details1">Details</div>
              </div>
            </div>
            <div className="gmb1">
              <div>
                <img src="./gmb2.svg" alt="" />
              </div>
              <div className="gmb2">
                <h1>Black Widow</h1>
                <p>Action, Adventure, Sci-Fi</p>
                <div className="details1">Details</div>
              </div>
            </div>
            <div className="gmb1">
              <div>
                <img src="./gmb3.svg" alt="" />
              </div>
              <div className="gmb2">
                <h1>Black Widow</h1>
                <p>Action, Adventure, Sci-Fi</p>
                <div className="details1">Details</div>
              </div>
            </div>
            <div className="gmb1">
              <div>
                <img src="./gmb1.svg" alt="" />
              </div>
              <div className="gmb2">
                <h1>Black Widow</h1>
                <p>Action, Adventure, Sci-Fi</p>
                <div className="details1">Details</div>
              </div>
            </div>
            <div className="gmb1">
              <div>
                <img src="./gmb2.svg" alt="" />
              </div>
              <div className="gmb2">
                <h1>Black Widow</h1>
                <p>Action, Adventure, Sci-Fi</p>
                <div className="details1">Details</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <div className="subscribe__container">
          <div className="subscribe__content">
            <h2 className="section__title3">Be the vanguard of the</h2>
            <p className="section__subtitle2">Moviegoers</p>
          </div>
          <div className="subscribe__form1">
            <input type="email" placeholder="Type your email" />
            <button type="submit">Join Now</button>
          </div>
          <div className="news1">
            <p>By joining you as a Tickitz member,</p>
            <p>we will always send you the latest updates via email .</p>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="footer__container">
          <div className="footer__col1">
            <img src="./footerlog.png" alt="" />
            <p>conveniently, watch movies quietly.</p>
            <p>Stop waiting in line. Buy tickets</p>
          </div>
          <div className="footer__col2">
            <h4>Explore</h4>
            <div className="footer_col22">
              <p>Home</p>
              <p>List Movie</p>
            </div>
          </div>
          <div className="footer_col2">
            <h4>Our Sponsor</h4>
            <div className="footer_col">
              <img src="./sponsor1.png" alt="" />
              <img src="./sponsor2.jpg" alt="" />
              <img src="./sponsor3.png" alt="" />
            </div>
          </div>
          <div className="footer_col3">
            <h4>Follow us</h4>
            <div className="footer__col3">
              <div className="footer_col33">
                <img src="./fb.svg" alt="" />
                <p>Tickitz Cinema id</p>
              </div>
              <div className="footer_col33">
                <img src="./ig.svg" alt="" />
                <p>tickitz.id</p>
              </div>
              <div className="footer_col33">
                <img src="./twit.svg" alt="" />
                <p>tickitz.id</p>
              </div>
              <div className="footer_col33">
                <img src="./yt.svg" alt="" />
                <p>Tickitz Cinema id</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bar">© 2020 Tickitz. All Rights Reserved.</div>
      </div>
    </div>
  )
}
