import React, { useEffect, useState } from 'react'
import Box from "./Box"
import "./board.css"

function Board({ size }) {
    const [board, setBoard] = useState()
    // coordinates of box that was just clicked once a move is made
    const [location, setLocation] = useState()
    const [hasWon, setHasWon] = useState(false)

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
                let randomBoolean = Math.random() < 0.5;
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
        const title = document.getElementById("title")
        
        // remove glowing animation from title
        title.classList.remove("glow")
        playEndGameAnimations();
    }

    const playEndGameAnimations = () => {
        const title = document.getElementById("title")
        const glowTextShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6"

         // make lights on title flicker
        setTimeout(() => title.style.textShadow = glowTextShadow, 600)
        setTimeout(() => title.style.textShadow = "none", 800)
        setTimeout(() => title.style.textShadow = glowTextShadow, 1400)

        // flicker for 1.5 seconds 
        setTimeout(() => {
            const flickerTitle = setInterval(() => {
                title.style.textShadow = glowTextShadow
                setTimeout(() => {title.style.textShadow = "none"}, 200)
            }, 200)

            setTimeout(() => {
                clearInterval(flickerTitle)
                // fade text into background
                title.classList.add("fade-dark")
                setHasWon(true)
            }, 1500)
        }, 1800)
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
            {hasWon ? (
                <>
                <div className="show-win text-light">
                    <p className="slide-up glow-up">YOU</p>
                    <p className="flip-up glow-up"zzz>WON</p>
                </div>
                <div id="confettis">
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                </div>
                </>
            ) : null}
        </div>
    )
}

export default Board
