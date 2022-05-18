
import React from 'react'
import { useState } from 'react'

export default function Navbar() {

let style0 = {
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    height:"50px",
    backgroundColor:"black",
    color:"white"
}

let stylemiddle ={
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"
}

let contact ={
    borderRadius:"10px",
    backgroundColor:"blue",
    padding:"5px 12px"
}

const [arrLink,setArrLink] = useState(["Services","Projects","abouts"])


  return (
    <div style={style0}>
      <div>LOGOBAKERY</div>

      {/* middle container */}
      <div style={stylemiddle}>
      {arrLink.map((Navbar)=>(
      <p style={{margin:"10px"}}>{Navbar} </p> 
      ))}
      </div>

      {/* last container */}
      <div style={contact}>contacts</div>
    </div>
  )
}
