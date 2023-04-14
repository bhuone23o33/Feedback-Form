// this is an header component
import React from 'react'
function Header({ text,bgColor,textColor }) {
    const headerStyle = {
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header style = {headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  );
}

// if no prop is assign it will take default data in prop.txt
Header.defaultProps ={
    text : "Feedback UI",
    bgColor:"rgba(0,0,0,0.4)",
    textColor:"#ff6a95"
}



export default Header
