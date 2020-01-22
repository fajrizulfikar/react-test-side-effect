import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import LoadingAnimation from "./component/LoadingAnimation"

export interface Props {
  isLoading: boolean,
  children: JSX.Element
}
function App({ isLoading, children } : Props) {
  const [isPastDelay, setIsPastDelay] = useState(false)

  useEffect(function delayTimer() {
    setTimeout(() => setIsPastDelay(true), 200)
  })

  if (isLoading) {
    if (!isPastDelay) {
      return null
    }

    return <LoadingAnimation />
  }
  return children
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default App
