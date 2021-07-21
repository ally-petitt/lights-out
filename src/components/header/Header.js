import React, { useState } from 'react'
import "./header.css"

// look in url to find dimensions

function Header() {

    return (
        <div style={{height: "20vh"}} className="d-flex align-items-end justify-content-center">
            <h1><span className="cursive">Lights Out</span></h1>
        </div>
    )
}

// TODO: once game has been won, make flickering animation and "shut off" 
// neon lights

export default Header
