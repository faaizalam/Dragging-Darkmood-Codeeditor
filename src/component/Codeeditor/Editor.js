import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import {Controlled as Controlleditor} from "react-codemirror2"

const Editor = (props) => {
    const [opencol,setopencol]=useState(true)
    const {displayname,language,value,onChange}=props
    const handlechnage=((editor,data,value)=>{
        onChange(value)

    })
    // console.log(opencol)
  return (
    <div className={opencol?"editor-container":"collaps"}>
        <div className='editor-title'>
          {displayname}
          <button
          onClick={()=>setopencol(!opencol)}
          >o/c</button>
        </div>
        <Controlleditor
        
        onBeforeChange={handlechnage}
        value={value}
        className="code-mirror-wrapper"
        options={{
            lineWrapping:true,
            lint:true,
            mode:language,
            lineNumbers:true,
            theme:"material"
        }}
        />

    </div>
  )
}

export default Editor