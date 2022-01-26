import React from 'react'
import logo from "../images/exotic-car-icon-removebg.png"
import { Link } from "react-router-dom"


export default function landing() {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        {/* <a href="/home"> <img src={logo} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', onLoad: 'fadeIn'}} /> </a> */}
        <Link to="/rentals"><a href="" className="Logo"><img src={logo} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh', onLoad: 'fadeIn'}} /></a></Link>
        </div> 
    )
}

