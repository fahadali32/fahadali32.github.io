import React, { useEffect, useState } from "react";
import styles from "@/styles/Svg.module.css";

function Logo() {
  const [st,setSt] = useState([])
  useEffect(()=>{
    const svSt = {
        marginTop:"20%",
        top:0,
        left:0,
    }
    setSt(svSt)
    const timer = setTimeout(()=>{
        const svSt = {
            animationName: "logo",
            animationDuration:"1s",
            transform: "scale(0.2)",
            position:"relative",    
        }
        setSt(svSt)
        // console.log("showing");
      },3000)
    setTimeout(()=>{
      // width: 100%;
      // setSt({ display:"none" })
    
    },4010)
    return()=> clearTimeout(timer)
    
  },[])

  return (
    <div className={styles.logo} style={st}>
      <svg
        width="202"
        height="189"
        viewBox="0 0 202 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
         className={styles.path1}
          d="M11 93.7103L39.0645 10H164.387L191 96.3427L164.387 179H39.0645L11 93.7103Z"
          stroke="white"
          strokeWidth="20"
        />
        <path className={styles.path2} d="M76 159V49H150" stroke="white" strokeWidth="20" />
        <path className={styles.path3} d="M75 99H135" stroke="white" strokeWidth="20" />
      </svg>
    </div>
  );
}

export default Logo;
