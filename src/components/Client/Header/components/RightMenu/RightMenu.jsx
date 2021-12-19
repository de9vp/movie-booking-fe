import './RightMenu.css';

import React from 'react'

function RightMenu() {
  return (
    <div className="navbar-collapse">
      <ul className="navbar-nav ml-auto my-md-0">
        <li className="nav-item nav-link active">Movies</li>
        <li className="nav-item nav-link">Theater</li>
        <li className="nav-item nav-link">Reviews</li>
        <li className="nav-item nav-link">contact</li>
        <a className="ml-md-3" href="/">
          <button className="btn-grad">
            LOGIN
          </button>
        </a>
      </ul>
    </div>
  )
}

export default RightMenu
