import React from 'react'
import Card from '../component/shared/card'
import { Link } from 'react-router-dom'


function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Page</h1>
        <p>This is paragraph</p>
        <p>Version : 9.0.12</p>
        <Link to="/" >Back to home</Link>
      </div>
      <div></div>
    </Card>
  )
}

export default About
