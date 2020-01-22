import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import LoadingAnimation from "./component/LoadingAnimation"

function App(props) {
  const [isPastDelay, setIsPastDelay] = useState(false)

  useEffect(function delayTimer() {
    setTimeout(() => setIsPastDelay(true), 200)
  })

  if (props.isLoading) {
    if (!isPastDelay) {
      return null
    }

    return <LoadingAnimation />
  }
  return props.children
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default App
