import React from 'react'
import"./Login.css"
function Login() {
  return (
   <div>
  {/* Design by foolishdeveloper.com */}
  <title>Glassmorphism login Form Tutorial in html css</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />
  <div className="background">
    <div className="shape" />
    <div className="shape" />
  </div>
  <form>
    <h3>Login Here</h3>
    <label htmlFor="username">Username</label>
    <input type="text" placeholder="Email or Phone" id="username" />
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Password" id="password" />
    <button>Log In</button>
    <div className="social">
      <div className="go"><i className="fab fa-google" />  Google</div>
      <div className="fb"><i className="fab fa-facebook" />  Facebook</div>
    </div>
  </form>
</div>

    
    
  )
}

export default Login

