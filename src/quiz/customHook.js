import { useEffect, useState } from 'react'

export const useReduceString = (phrases, backgroundSpeed, typeSpeed) => {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')
  const [changeWord, setChangeWord] = useState(true)

  useEffect(() => {
    if (changeWord && number < phrases.length) {
      if (text === phrases[number]) setChangeWord(false)
      else {
        const Inteval = setInterval(() => {
          setText(phrases[number].slice(0, text.length + 1))
        }, typeSpeed)
        return () => clearInterval(Inteval)
      }
    } else {
      if (text && text.length) {
        const Interval = setInterval(
          () => setText(text.slice(0, text.length - 1)),
          backgroundSpeed,
        )
        return () => clearInterval(Interval)
      } else {
        if (phrases.length >= number) setNumber(number + 1)
      }
    }
  }, [text, changeWord])

  useEffect(() => {
    console.log(number)
    console.log(phrases[number])
    if (phrases.length <= number) {
      setNumber(0)
    }
    setChangeWord(true)
  }, [number])

  return text
}
