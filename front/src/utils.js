import { useState, useEffect } from "react"

export function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    let storage = localStorage.getItem(key)

    if(storage)
      return JSON.parse(storage)
    else
      return initialState
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}
