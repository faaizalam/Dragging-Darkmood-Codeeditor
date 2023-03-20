import React, { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    
    const prefix="codepan"
    const names=prefix+key;
    const [value,setvalue]=useState(()=>{
        const datalocalstoarage=localStorage.getItem(names)
    
        if (datalocalstoarage!==null) {
            return JSON.parse(datalocalstoarage)
            
        }else{
            return " "
        }


        // if (typeof initial==='function') {
        //     console.log("fun")
        //    return initial()
            
        // }else{
        //     console.log(typeof initial === "string")
        //     return initial
        // }
    })
useEffect(()=>{
   
    localStorage.setItem(names, JSON.stringify(value))


},[names,value])

  return [value,setvalue]
}

export default useLocalStorage