import React from "react";
function Header({darkMode,setDarkMode}){return <div className="header"><span>Mini Task Manager</span><button className="theme-btn" onClick={()=>setDarkMode(!darkMode)}>{darkMode?"☀ Light":"🌙 Dark"}</button></div>}
export default Header;
