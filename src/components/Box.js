import React, { useState } from 'react'

function Box() {
    const [isLit, setIsLit] = useState(true)

    return (
        <div className="text-danger bg-light" style={{width: "100%", paddingTop: "100%", position: "relative"}}>
        </div>
    )
}

export default Box
