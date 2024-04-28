// components/MagicCursor.js
"use client"

import React,{ useEffect, useState } from "react";

const MagicCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

  }, []);
    return (
    //   <div className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50">
    //     <img src="/magicwand.png" alt="Magic Wand Cursor" className="w-full h-full" />
    //   </div>
    <div className="fixed z-50 pointer-events-none">
      <img
        src="/magicwand.png"
        alt="Magic Wand Cursor"
        className="w-12 h-12 absolute"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      />
    </div>
    );
  };
  
  export default MagicCursor;
  