import './signin.css'

export default function Signin() {
  const handleLogin = () => {
    // Misalnya user berhasil login
    localStorage.setItem('isSignedIn', 'true')
    window.location.href = '/' // Redirect ke halaman beranda atau halaman lain
  }
  return (
    <div className="container">
      <div className="img">
        <img className="img1" src="./signup.png" />
        <div className="screen">
          <div className="img3">
            <img className="img2" src="./tickitz1.png" alt="" />
          </div>
          <p className="textleft">wait, watch, wow!</p>
        </div>
      </div>
      <div className="right">
        <form action="">
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
              />
            </div>
            <div className="input2">
              <h1 className="nametag">Password</h1>
              <input
                className="input-box"
                type="password"
                placeholder="Write your password"
              />
            </div>
          </div>
          {/* <div> */}
          <button className="button" onClick={handleLogin}>
            <a href="/">Sign In</a>
          </button>
          {/* </div> */}
          <div className="panel signup">
            <p>Forgot your password? </p>
            <a>Reset now</a>
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
