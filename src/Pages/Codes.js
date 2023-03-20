import React, { useEffect, useState } from 'react'
import Editor from '../component/Codeeditor/Editor'
import { Iframe } from '../component/Codeeditor/Iframe'
import useLocalStorage from '../component/useLocalStorage'

export const Codes = () => {
    const [HTMLS,setHtmls]=useLocalStorage('html','')
    const [Javscript,setJavascript]=useLocalStorage('js','')
    const [CSS,setCss]=useLocalStorage('css','')
    const [srcdoc,Setsrcod]=useState("")
    useEffect(()=>{
    const aftertime=setTimeout(()=>{
        Setsrcod(`
        <html>
        <body>${HTMLS}</body>
        <style>${CSS}</style>
        <script>${Javscript}</script>
        </html>
        
        
        `)
        

    },250)
    return (()=>clearTimeout(aftertime))

    },[HTMLS,Javscript,CSS])

    
  return (
    <>
    {/* displayname,language,value,onChange */}
    <div className='pan top-pan'>
   <Editor displayname="Html" language="xml" value={HTMLS} onChange={setHtmls}></Editor>
   <Editor displayname="Javascript" language="javascript" value={Javscript} onChange={setJavascript}></Editor>
   <Editor displayname="CSS" language="css" value={CSS} onChange={setCss}></Editor>
    </div>
        <Iframe>
   {srcdoc}
   </Iframe>

    </>
  )
}
