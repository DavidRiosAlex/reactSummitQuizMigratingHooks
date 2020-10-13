import { useEffect, useState } from 'react'

export const useTypingWord = (phrases, backgroundSpeed, typeSpeed) => {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect( ()=>{
    const interval = setInterval(()=>{
      if (typing){
        if (text === phrases[number]) {
          setTyping(false);
          return false;
        }
        if (number >= phrases.length){setNumber(0);return false}
        setText(phrases[number].substring(0,text.length+1))
      }
      else{
        if (text.length === 0){
          setTyping(true)
          setNumber(number+1)
          return false;
        }
        setText(phrases[number].substring(0,text.length-1))
      }
  }, typing ? typeSpeed : backgroundSpeed)

  return ()=> clearInterval(interval)
  } 
  ,[text,typing,number,backgroundSpeed,typeSpeed,phrases])

  return text
}
