import React, { useEffect, useRef } from 'react'
import {DragDropContext, Draggable, Droppable,DropResult} from "react-beautiful-dnd"
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
// import Icons from '../Icons';

export const Draganddrop = () => {
    let task=[
        {
        name:"excersie",
        isComp:false
    },
        {
        name:"playing",
        isComp:false
    },
        {
        name:"working",
        isComp:false
    },
]
    



// const [cookies, setCookie] = useCookies(['faaiz']);
  const navig=useNavigate()
  const cookies = new Cookies();
  
  const myfunsetcook=(()=>{
      cookies.set('myCookie', '123321', { path: '/', expires: new Date(Date.now() + 1000*30) });

      
      
      // if (cookies.name('faaiz')==="faaiz") {
          
              navig('/login')
          // }
        })
        useEffect(()=>{
    const cookiess = new Cookies();
    
  if (cookiess.get('myCookie')) {
    navig("/login")
    
  }
},[navig])




    const ondragend=(x)=>{
       const {destination,source}=x;
       if (destination==null) {
        return
    }
        if (destination.droppableId===source.droppableId && destination.index===source.index) {
            return
        }
            if (destination.droppableId === "draggable1" && source.droppableId === "draggable1") {
                // task=task.splice(task[])
                // console.log(x)
                let takenoutarr=null
                takenoutarr=task.splice(source.index,1)
                // console.log(takenoutarr)
                task.splice(destination.index, 0 , takenoutarr[0])
                //   console.log(task)
                
                
            }
            else if(source.droppableId === "draggable1" && destination.droppableId==="dragremove"){
                let othrarr=null
                othrarr = task.splice(source.index, 1)
                othrarr=[{...othrarr[0],isComp:true}]
            //   othrarr={...othrarr[0],isComp:true}
                // console.log(destination.index)
                console.log(destination.index,source.index)
                task.splice(destination.index,0,othrarr[0])
                // console.log(othrarr)
                

            }else if(source.droppableId === "dragremove" && destination.droppableId==="draggable1"){
                let othrarr=null
                // console.log(destination.index,source.index)
                othrarr = task.splice(source.index, 1)
                othrarr=[{...othrarr[0],isComp:false}]
            //   othrarr={...othrarr[0],isComp:true}
                console.log(othrarr)
                task.splice(destination.index,0,othrarr[0])
                   console.log(task)
            }else{
                let othrarr=null
                // console.log(destination.index,source.index)
                othrarr = task.splice(source.index, 1)
               task.splice(destination.index,0,othrarr[0])
                //    console.log(task)

            }
    }
    // const g=useRef
  return (
    
      <DragDropContext onDragEnd={ondragend}>  
        <main className="flex h-[100%] shadow-lg justify-center overflow-hidden w-[100%] items-center" >
   
            {/* <h1>Active Task</h1> */}
        <Droppable droppableId="draggable1">
            {(provided)=>(
            
            <div className="h-[60%] shadow-lg  w-[100%] p-[30px]" ref={provided.innerRef} {...provided.droppableProps} >
    {
        task.map((x,index)=>(
            !x.isComp&&(

        <Draggable draggableId={(index).toString()} index={index}>
        {(provided)=>(
            <div className='bg-yellow-600 w-[100%] h-[20%] m-[10px] hover:transition-all hover:scale-110 hover:shadow-2xl p-[10px]'  {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>{x.name}</div>
            
            )}
       </Draggable>
            )
        ))
        }
       
        
       {provided.placeholder}
        </div>
        )}

        </Droppable>
            <button onClick={myfunsetcook}>click</button>
           
        <Droppable droppableId="dragremove">
            {/* <h1>Complete Task</h1> */}
        {(provided)=>(
            
            <div className="h-[60%] shadow-lg  w-[100%] p-[30px]" ref={provided.innerRef} {...provided.droppableProps}>
             {
                task.map((x,index)=>(
              
                     x.isComp&&(
                  
                  
                  <Draggable draggableId={(index).toString()} index={index}>
                  {(provided)=>(
                      <div className='bg-red-600 w-[100%] h-[20%] m-[10px] hover:transition-all hover:scale-110 hover:shadow-2xl p-[10px]'
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      >
                            {x.name}
                            </div>
                        
                        )}
                        
                        </Draggable>
                     )
                    
                        ))
                    }
           
           {provided.placeholder}
        </div>
        )}

        </Droppable>
    
</main>
    </DragDropContext>
    
  )
}
