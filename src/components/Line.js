import React from "react"
import theme from "../theme"

const Line = props => {
  const styles = {
    margin: props.align,
    background: `${theme.colors.calico}`,
    height: 4,
    width: 80,
  }
  return <div style={styles}></div>
}

export default Line
