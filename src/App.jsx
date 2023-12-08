import React from 'react'
import Fun from "./1Module1/Fun"
import ClassCom from './2Component/ClassCom'
import FunCom from './2Component/FunCom'
import ReactStrapCom from './3Style_Bootstrap/ReactStrapCom'
import FunState from './4State/FunState'
import ClassState from './4State/ClassState'
import State_Task from './4State/State_Task'
import PropCom from './5Props/PropCom'
import FragmantCom from './6Fragment/fragmentsCom'
import Con_Rendering from './7Conditional_Rendering/Con_Rendering'
import Rendering_com from './7Conditional_Rendering/Rendering_com'
import Map_Key from './8Map_key/Map_Key'
import UseEffectCom from './9Hook/UseEffectCom'
import Com_Input from './10Input/Com_Input'
import New_SingleInput from './10Input/New_SingleInput'
import Router from './11Routing/Router'
import Header from './11Routing/Header'



export default function App() {
  return (
    <div>
      {/* ---------------------Intro---------------------- */}
      {/* <Fun/> */}
      {/* ---------------------Component------------------ */}
      {/* <ClassCom/> */}
      {/* <FunCom/> */}
      {/* ---------------------ReactStrap----------------- */}
      {/* <ReactStrapCom/> */}
      {/* ---------------------Use state------------------ */}
      {/* <FunState/> */}
      {/* <ClassState/> */}
      {/* <State_Task/> */}
      {/* ---------------------Props---------------------- */}
      {/* <PropCom/> */}
      {/* ---------------------Fragments------------------ */}
      {/* <FragmantCom/> */}
      {/* ---------------Conditional Rendering------------ */}
      {/* <Con_Rendering/> */}
      {/* <Rendering_com/> */}
      {/* -------------------Map And Key ----------------- */}
      {/* <Map_Key/> */}
      {/* ------------------HOOKS------------------------- */}
      {/* <UseEffectCom/> */}
      {/* <UseRefCom/> */}
      {/* ------------------Input---------- */}
      {/* <Com_Input/> */}
      {/* <New_SingleInput/> */}
      {/* -----------------Router--------- */}
      {/* <Router/> */}
      <Header/>
      </div>
  )
}
