import React from "react"

const style = {
  margin: "0 auto",
  maxWidth: "1100px",
}

const Wrapper = ({ children }) => {
  return <div style={style}>{children}</div>
}

export default Wrapper
