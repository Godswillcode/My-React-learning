import React from 'react'

// Introduction to react
function Introduction() {
    return (
        <div>
           <Header />
        </div>
    )
}

function Header() {
  return (
    <div>
      
        <h1>About me</h1>
     
      <Main />
      <Footer />
    </div>
  )
}


function Main() {
  const person = {
    Name: "Godswill",
    Occupation: "Developer",
    Year: 2017

  }
  return (
    <div>
      <p>My Name is {person.Name}</p>
  <p>I work as a {person.Occupation}</p>
  <p>And i graduated from school the year {person.Year}</p>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
} 


export default Introduction
