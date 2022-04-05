import React, { useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const checkWinner = (square) => {
    const sequence = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < sequence.length; i++) {
      const [a, b, c] = sequence[i]
      if (
        square[a] &&
        square[b] &&
        square[c] &&
        square[a] === square[b] &&
        square[a] === square[c]
      ) {
        return square[a]
      }
    }
    return null
  }
  return (
    <AppContext.Provider value={{ checkWinner }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
