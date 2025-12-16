import React from 'react'

function Loading({ text = 'Loading...' }) {
  return (
    <div className="loading-wrapper">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  )
}

export default Loading
