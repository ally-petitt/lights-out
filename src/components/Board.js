import React, { useEffect, useState } from 'react'
import Box from "./Box"
import "./board.css"

function Board({ size }) {
    const [board, setBoard] = useState()
    // coordinates of box that was just clicked once a move is made
    const [location, setLocation] = useState()

    useEffect(() => {
        setUp();
    }, [])

    useEffect(() => {
        if (location) {
            addCross(location)
            if (checkWin()) {
                endGame()
            }
        }
    }, [location])

    const setUp = () => {
        size = size.split("x")

        // fill up board randomly
        let tempBoard = []
        for (let i=0; i<size[0]; i++) {
            let row = []
            for (let j=0; j<size[1]; j++) {
                // TODO: change back
                // let randomBoolean = Math.random() < 0.5;
                let randomBoolean = false;
                row.push({ isLit: randomBoolean })
            }
            tempBoard.push(row)
        }

        setBoard(tempBoard);
    }

    const addCross = (center) => {
        let { x, y } = center
        // find center and boxes around it
        board[x][y].isLit = !board[x][y].isLit

        if (board[x].length -1 > x) {
            board[x+1][y].isLit = !board[x+1][y].isLit;
        } if (board[y].length -1 > y) {
            board[x][y+1].isLit = !board[x][y+1].isLit;
        } if (x != 0) {
            board[x-1][y].isLit = !board[x-1][y].isLit;
        } if (y != 0) {
            board[x][y-1].isLit = !board[x][y-1].isLit;
        }

        setBoard(board)
        setLocation(null)
        
    }

    const checkWin = () => {
        const res = board.map(row => {
            if (row.some(box => box.isLit)) {
                return false
            }
        })

        if (res.includes(false)) {
            return false
        }
        return true
    }

    const endGame = () => {
        console.log("you won!")
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
                                <td style={{width: wdth, height: wdth}}>
                                    <Box isLit={box.isLit}
                                        location={{x: i, y: j}}
                                        setLocation={setLocation} />
                                </td>
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
