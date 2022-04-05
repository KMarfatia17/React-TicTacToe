import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useGlobalContext } from './context'
import { Board } from './Board'
//import './index.css'

export const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill('-')])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setxIsNext] = useState(true)
  const { checkWinner } = useGlobalContext()
  const [currentModal, setCurrentModal] = useState('---------')
  const xo = xIsNext ? 'x' : 'o'

  const handleClick = (i) => {
    console.log(history)
    const historyPoint = history.slice(0, stepNumber + 1)
    const current = historyPoint[stepNumber]
    const squares = [...current]

    if (checkWinner(squares) || squares[i]) return

    squares[i] = xo
    setHistory([...historyPoint, squares])
    setxIsNext(!xIsNext)
    setStepNumber(historyPoint.length)
  }

  const jumpTo = (step) => {
    if (step === 0) setHistory([Array(9).fill(null)])
    setStepNumber(step)
    setxIsNext(step % 2 === 0)
  }

  const renderMoves = () => {
    return history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'Go to Start'
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      )
    })
  }
  console.log(stepNumber, '  ', history[stepNumber])

  console.log('history', history)
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className='info-wrapper'>
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>
          {checkWinner(history[stepNumber])
            ? 'Winner: ' + checkWinner(history[stepNumber])
            : 'Next Player: ' + xo}
        </h3>
        <br />
        <h3>{`current model ${currentModal}`}</h3>
      </div>
    </>
  )
}
export default TicTacToe
