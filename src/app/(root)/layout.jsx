import React from 'react'

const layout = ({ children }) => {
  return (
    <div className='container h-screen  mx-auto max-w-7xl '>
      { children }
    </div>
  )
}

export default layout
