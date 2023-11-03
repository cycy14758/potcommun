import React from 'react'

function Card() {
  return (
    <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src="https://img.freepik.com/photos-premium/joyeux-anniversaire_10221-23271.jpg?w=740" className="img-fluid" />
    
    <a href="#!">
      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <a href="#!" className="btn btn-primary">Button</a>
  </div>
</div>

  )
}

export default Card