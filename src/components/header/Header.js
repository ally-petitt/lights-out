import React, { useState } from 'react'
import "./header.css"

function Header() {

    return (
        <div style={{height: "20vh"}} className="d-flex align-items-end justify-content-center">
            <h1><span id="title" className="cursive glow">Lights Out</span></h1>
        </div>
    )
}

export default Header
