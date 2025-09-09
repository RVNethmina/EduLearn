import React from 'react'
import profilePic from '../assets/profilePic.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to = "/cource-Content-Page">Course Content</Link></li>
        <li><Link to = "/course-creation">Course Creation</Link></li>
      </ul>
      
    </div>
  )
}

export default NavBar
