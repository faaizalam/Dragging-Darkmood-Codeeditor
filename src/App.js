
import { DragAndDrop } from "./Pages/DragAndDrop";
import "./index.css"
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import { Codes } from "./Pages/Codes";
import Icons from "./component/Icons";

// import sass from "sass"
// const result = sass.compile(scssFilename);





function App() {









   return (
      <>
      <header> <Icons name={"MoonIcon"} /></header>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<DragAndDrop/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/Codeditor" element={<Codes></Codes>}></Route>
      </Routes>
      
      </BrowserRouter>
      </>
      
      
    
   )
}

export default App;
