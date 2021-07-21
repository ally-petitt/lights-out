import React, { useEffect } from 'react'
import Box from "./Box"
import "./board.css"
import { useState } from 'react'

function Board({ size }) {
    const [board, setBoard] = useState()

    // create empty board list to map through when rendering Boxes

    useEffect(async() => {
        setUp();
    }, [])

    const setUp = () => {
        size = size.split("x")
        // const filledList = new Array(parseInt(size[0])).fill({isLit: true})
        // const tempBoard = new Array(parseInt(size[1])).fill(filledList)

        // find random center and use it set up initial board
        let x = Math.floor(Math.random() * size[0])
        let y = Math.floor(Math.random() * size[1])

        // fill up board
        let tempBoard = []
        for (let i=0; i<size[0]; i++) {
            let row = []
            for (let j=0; j<size[1]; j++) {
                if( (i == x && j == y) ||
                    (i >= x-1 && i <= x+1 && j == y) || 
                    (j >= y-1 && j <= y+1 && i == x)) {
                    row.push({isLit: false})
                } else {
                    row.push({isLit: true})
                }
            }
            tempBoard.push(row)
        }
        console.log(tempBoard)

        setBoard(tempBoard);
    }

    const addCross = (center) => {
        console.log(center)
        // find center and boxes around it
        let targetBoxes = [board[2][4]]
        console.log(targetBoxes[0])

        for (const box of targetBoxes) {
            box.isLit = !box.isLit
        }

        setBoard(board)
    }

    return (
        <div className="container">
            <table className="board h-100 w-100 mt-3" style={{maxHeight: "650px"}}>
                {
                board ? 
                board.map((row, i) => {
                    let wdth = row.length / 100

                    return(
                        <tr className="w-100">
                            {row.map((box, j) => (
                                <td id={`${i}-${j}`} style={{width: wdth, height: wdth}}><Box isLit={box.isLit} /></td>
                            ))}
                        </tr>
                    )
                }) : null
                }
            </table>
        </div>
    )
}

export default Board
