// import React from "react"
import PropTypes from "prop-types"
import "./App.css"

function App(props) {
  if (props.isLoading) {
    return null
  }
  return props.children
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default App
