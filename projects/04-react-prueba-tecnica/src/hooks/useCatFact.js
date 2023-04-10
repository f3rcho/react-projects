import { useState, useEffect } from 'react'
import { getRamdonFact } from '../services/facts.js'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRamdonFact().then((newFact) => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
