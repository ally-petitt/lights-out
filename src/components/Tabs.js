import React, { useState } from 'react'
import Board from './Board'

function Tabs() {
    const [boardSize, setBoardSize] = useState("5x5")

    const handleClick = (e) => {
        setBoardSize(e.target.innerHTML)
    }

    return (
        <div id="tabs" className="h-100" style={{width: "80%", maxWidth: "650px"}}>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <p class={`nav-link text-light ${boardSize == "5x5" ? "active text-dark" : null}`} 
                    onClick={handleClick}>5x5</p>
                </li>
                <li class="nav-item">
                    <p class={`nav-link text-light ${boardSize == "6x6" ? "active text-dark" : null}`} 
                    onClick={handleClick}>6x6</p>
                </li>
                <li class="nav-item">
                    <p class={`nav-link text-light ${boardSize == "7x7" ? "active text-dark" : null}`} 
                    onClick={handleClick}>7x7</p>
                </li>
                <li class="nav-item">
                    <p class={`nav-link text-light ${boardSize == "8x8" ? "active text-dark" : null}`} 
                    onClick={handleClick}>8x8</p>
                </li>
                <li class="nav-item">
                    <p class={`nav-link text-light ${boardSize == "9x9" ? "active text-dark" : null}`} 
                    onClick={handleClick}>9x9</p>
                </li>
                <li class="nav-item">
                    <p class={`nav-link text-light ${boardSize == "10x10" ? "active text-dark" : null}`} 
                    onClick={handleClick}>10x10</p>
                </li>
            </ul>

            <Board size={boardSize} />
        </div>
    )
}

export default Tabs
