import React, { useState } from 'react'

function Box({ isLit }) {
    return (
        <div className={isLit ? "bg-light" : "bg-secondary"} style={{width: "100%", paddingTop: "100%", position: "relative"}}>
        </div>
    )
}

export default Box
