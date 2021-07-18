import React, { useState } from 'react'

function Box() {
    const [isLit, setIsLit] = useState(true)

    return (
        <div className="text-danger">
            BOX
        </div>
    )
}

export default Box
