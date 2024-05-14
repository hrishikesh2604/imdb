"use client"
import React from 'react'
import {useState,useEffect} from 'react'
import {MdLightMode,MdDarkMode} from 'react-icons/md'
import {useTheme} from 'next-themes'
export default function ThemeSwitch() {
    const {theme,setTheme,systemTheme}=useTheme();
    const [mounted,setMounted]=useState(false);
    useEffect(()=>setMounted(true),[])
    const currentTheme=theme==='system'?systemTheme:theme
  return (
    <div>
      {
        mounted && (currentTheme==='dark'?<MdLightMode onClick={()=>setTheme('light')} className="text-xl cursor-pointer hover:text-amber-500"/>:<MdDarkMode onClick={()=>setTheme('dark')} className="text-xl cursor-pointer hover:text-amber-500"/>
      )}
    </div>
  )
}
