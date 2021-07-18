import React, { useEffect } from 'react'
import Box from "./Box"
import "./board.css"

function Board({ size }) {
    // create empty board list to map through when rendering Boxes
    size = size.split("x")
    const filledList = new Array(parseInt(size[0])).fill(null)
    const board = new Array(parseInt(size[0])).fill(filledList)

    useEffect(() => {
        
    }, [])

    return (
        <div className="container">
            <table className="board h-100 w-100" style={{maxHeight: "650px"}}>
                {
                board.map((row) => {
                    let wdth = row.length / 100
                    return(
                        <tr className="w-100">
                            {row.map((box) => (
                                <td style={{width: wdth, height: wdth}}><Box /></td>
                            ))}
                        </tr>
                    )
                })
                }
            </table>
        </div>
    )
}

export default Board
