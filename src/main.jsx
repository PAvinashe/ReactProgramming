import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
//import ClassCreateForm from './Components/ClassForm'
import Calculator from './Components/ClassCalc'
import FuncForm from './Components/funcForm'
import FuncCalculator from './Components/FuncCalc'
import GoogleForm from './Components/GoogleForm'
import CounterSet from './Components/useEffect/counter'
import Checkmemo from './Components/memo/parent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDataList from './JobPortalWithFunctComp/Home'
import UserDetails from './JobPortalWithFunctComp/UserDetails'
import SelectedUsers from './JobPortalWithFunctComp/Selected'
import RejectedUsers from './JobPortalWithFunctComp/Rejected'
import RenderFunction from './Components/useEffect/newUseEffect'
import Mute from './MuteFunction/mute'

ReactDOM.createRoot(document.getElementById('root')).render(  
    
    <div>      
      {/* <BrowserRouter>
         <Routes>
           <Route path="/" element={<UserDataList />} />
           <Route path="/details/:id" element={<UserDetails />} />
           <Route path="/selected" element={<SelectedUsers />} />
           <Route path="/rejected" element={<RejectedUsers />} />
        </Routes>
      </BrowserRouter>      */}
      <Mute />
    </div>  
)
