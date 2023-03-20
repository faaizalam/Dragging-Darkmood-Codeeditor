import React from 'react'

export const Iframe = ({children}) => {
   
  return (
    <iframe
    srcDoc={children}
    title='output'
    sandbox='allow-scripts'
    frameBorder="0"
    width="100%"
    height="100%"
    >

    </iframe>
  )
}
