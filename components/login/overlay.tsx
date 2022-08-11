import Link from "next/Link";
import React,{useState,useEffect} from "react";

const Overlay: React.FC<{hidden?:string}> = ({hidden=true}) => {
  const [hide,setHidden] = useState(hidden)
  useEffect(()=>{
    setHidden(hidden)
  },[hidden])
  return (
    <div className={hide=="None" ? "hidden" :"hidden  border-red-300 md:block w-[100vw] h-[100vh] bg-[#333333E5] fixed top-[0px] left-0 backdrop-blur-sm z-10"}>
             
    </div>
  )}

  export default Overlay