import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Btn from './components/Btn';
import React, { useState } from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Video from './components/Video';
import ReactPlayer from  'react-player';


// global state to solve this use react context api 
// in context api their is no need of prop drilling and 
// no need for lifting stte up 
// the component that needs the data simply gets it from
// context api 
// 


function Header(props){
  return <h1>hello world {props.title}</h1>
} 

function App(props) {
  const [world , setworld] = React.useState('Eat');
  // setworld('aldk'); -> this is not allowed 
  function handleworld(){
    setworld('lewis');
  } // -> this is what is allowed to change the state 


// this is the root component
 function Myvideo(){
  return (
    <h1>this is video</h1>
  )
 }

  return (
    <>
    <Header />
    <Myvideo />
    <ReactPlayer
      url={'https://www.youtube.com/watch?v=zcYtPyigxSE&list=RDzcYtPyigxSE&start_radio=1'}
      playing={false}
      volume={0.5}
    />
    </>

);

}

export default App;
