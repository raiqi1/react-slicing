import { useNavigate } from 'react-router-dom'
import './signin.css'

export default function Signin() {
  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault()
    // Misalnya user berhasil login
    localStorage.setItem('isSignedIn', 'true')
    // Redirect ke halaman beranda atau halaman lain
    navigate('/')
  }

  return (
    <div className="container">
      <div className="img">
        <img className="img1" src="./signup.png" alt="Sign Up" />
        <div className="screen">
          <div className="img3">
            <img className="img2" src="./tickitz1.png" alt="Tickitz" />
          </div>
          <p className="textleft">wait, watch, wow!</p>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleLogin}>
          <div>
            <h2 className="judul">Sign In</h2>
            <p className="text1">
              Sign in with your data that you entered during your registration
            </p>
          </div>
          <div className="input1">
            <div className="input2">
              <h1 className="nametag">Email</h1>
              <input
                className="input-box"
                type="text"
                placeholder="Write your email"
                required
              />
            </div>
            <div className="input2">
              <h1 className="nametag">Password</h1>
              <input
                className="input-box"
                type="password"
                placeholder="Write your password"
                required
              />
            </div>
          </div>
          <button className="button" type="submit">
            Sign In
          </button>
          <div className="panel signup">
            <p>Forgot your password? </p>
            <a href="/reset">Reset now</a>
          </div>
          <div className="signin">
            <p>Don’t have an account?</p>
            <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}
