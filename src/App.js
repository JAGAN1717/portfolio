import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import './Style/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AppRoutes from './Components/Routes';

function App() {

  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const cursorRef = useRef(null);
  // const cursorFollowRef = useRef(null);
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setPosition({ x: e.pageX, y: e.pageY });
  //   };
  //   document.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (cursorRef.current) {
  //     cursorRef.current.style.left = `${position.x}px`;
  //     cursorRef.current.style.top = `${position.y}px`;
  //   }
  //   if (cursorFollowRef.current) {
  //     cursorFollowRef.current.style.left = `${position.x}px`;
  //     cursorFollowRef.current.style.top = `${position.y}px`;
  //   }
  // }, [position]); 


  return (
    <div className="App">
      {/* <div id="cursor" ref={cursorRef} className="cursor"></div> 
      <div id="cursorFollow" ref={cursorFollowRef} className="cursor-follow"></div> */}
      <div class="scroll_watcher"></div>
      <AppRoutes />
    </div>
  );
}

export default App;
