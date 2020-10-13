import React from 'react'
import PropTypes from 'prop-types'
import { useReduceString } from './customHook'

const AutoTypist = ({ phrases, typeSpeed, backspaceSpeed }) => {
  const text = useReduceString(phrases, backspaceSpeed, typeSpeed)

  if (phrases.length === 0) {
    return null
  }
  return <span style={{ color: 'red' }}>{text}.</span>
}

AutoTypist.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeSpeed: PropTypes.number,
  backspaceSpeed: PropTypes.number,
}
AutoTypist.defaultProps = {
  typeSpeed: 100,
  backspaceSpeed: 25,
}

const App = () => {
  return (
    <h1>
      My favorite hobbies are{' '}
      <AutoTypist
        phrases={['playing basketball', 'watching movies', 'DIY', 'napping']}
      />
    </h1>
  )
}

export default App
