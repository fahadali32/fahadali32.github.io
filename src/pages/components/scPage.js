import React, { useEffect, useRef } from "react";
import styles from "@/styles/Secbox.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Scpage() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 50%",
        end: "bottom 20%",
        scrub: 1,
        markers: true,
      },
    });
    // tl.fromTo(".skills", { opacity: 0 }, { opacity: 1 });
    tl.fromTo(".skills", { x:100,y: 50 }, { x:0,y: 0 });
  }, []);
  return (
    <div ref={ref} className={styles.secbox}>
      <div className={styles.iamge}>
        
      </div>
      <div className={`skills ${styles.skills}`}>
        <h3>Html</h3>
        <h3>Css</h3>
        <h3>Javascript</h3>
        <h3>Git</h3>
        <h3>Sql</h3>
        <h3>Backend/Api</h3>
      </div>
    </div>
  );
}

export default Scpage;
