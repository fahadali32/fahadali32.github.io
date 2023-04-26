import React, { useEffect } from "react";
import styles from "@/styles/Secbox.module.css";
import { gsap } from "gsap";

function Scpage() {
  useEffect(()=>{
    gsap.set('.Rectangle5',{
      opacity:0
    })
    // gsap.from('.Rectangle5',{
    //   repeat:-1,
    //   duration:1,
    //   ease:"back",
    //   x:100,
      
    // })
    // gsap.to('.Rectangle5',{
    //   repeat:-1,
    //   duration:1,
    //   ease:"back",
    //   x:0,
    //   reversed:true
    // })
  },[])
  return (
    <div className={styles.secbox}>
      <div className={styles.image}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="557"
          height="412"
          fill="none"
          viewBox="0 0 557 412"
        >
          <g className="Group 1">
            <rect
              width="557"
              height="343"
              fill="#000"
              className="Rectangle 1"
              rx="23"
            />
            <path fill="#fff" d="M19 21h518v301H19z" className="Rectangle 2" />
            <path
              fill="#000"
              d="M209 350h155l24 62H185l24-62Z"
              className="Rectangle 3"
            />
            <g className="Mask group">
              <path
                fill="#FFFDFD"
                d="M267.879 387h37.63L309 405h-45l3.879-18Z"
                className="Rectangle 4"
              />
            </g>
            <path
              fill="#FFF7F7"
              d="M201.048 379h170.904l1.048 1H200l1.048-1Z"
              className="Rectangle5"
            />
          </g>
        </svg>
      </div>
      <div className={styles.skills}>
        <h3>Html</h3><br/>
        <h3>Css</h3><br/>
        <h3>Javascript</h3><br/>
        <h3>Git</h3><br/>
        <h3>Webgl</h3><br/>
      </div>
    </div>
  );
}

export default Scpage;
