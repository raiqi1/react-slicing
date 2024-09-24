
import "./signup.css";

export default function Signup() {
  return (
    <div className="container">
    <div className="img">
      <img className="img1" src="./signup.png" />
      <div className="screen">
        <div className="img3">
          <img className="img2" src="./tickitz1.png" alt="" />
        </div>
        <p className="textleft">
          wait, watch, wow!
        </p>
      </div>
    </div>
    <div className="right">
      <form action="">
        <div>
          <h2 className="judul">
            Sign Up
          </h2>
          <p className="text1">
            Fill your additional details
          </p>
        </div>
        <div className="input1">
          <div>
            <h1 className="nametag">
              First Name
            </h1>
            <input
              className="input-box"
              type="text"
              placeholder="Write your first name"
            />
          </div>
          <div className="input2">
            <h1 className="nametag">
              Last Name
            </h1>
            <input
              className="input-box"
              type="text"
              placeholder="Write your last name"
            />
          </div>
          <div className="input2">
            <h1 className="nametag">
              Phone Number
            </h1>
            <input
              className="input-box"
              type="text"
              placeholder="Write your phone number"
            />
          </div>
          <div className="input2">
            <h1 className="nametag">
              Email
            </h1>
            <input
              className="input-box"
              type="text"
              placeholder="Write your email"
            />
          </div>
          <div className="input2">
            <h1 className="nametag">
              Password
            </h1>
            <input
              className="input-box"
              type="password"
              placeholder="Write your password"
            />
          </div>
        </div>
        <input className="button" value="Sign Up" type="submit" />
        <div className="panel signup">
          <p>Already have an account?</p>
          <a href="/signin">Sign In</a>
        </div>
      </form>
    </div>
  </div>
  )
}
