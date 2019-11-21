import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

function App(props) {
  const [isPastDelay, setIsPastDelay] = useState(false)

  useEffect(function delayTimer() {
    setTimeout(() => setIsPastDelay(true), 100)
  })

  if (props.isLoading) {
    if (!isPastDelay) {
      return null
    }

    return <div>Loading...</div>
  }
  return props.children
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default App
