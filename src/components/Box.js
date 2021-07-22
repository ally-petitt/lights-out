import React from "react";

function Box({ isLit, location, setLocation }) {
    return (
        <div className={isLit ? "bg-light" : "bg-secondary"} 
        style={{width: "100%", paddingTop: "100%", position: "relative", cursor: "pointer"}}
        onClick={() => setLocation(location)}
        >
        </div>
    )
}

export default Box
