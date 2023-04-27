import React, { useEffect } from "react";
import styles from "@/styles/Test.module.css";
import { gsap } from "gsap";

export default function Test() {
  useEffect(() => {
    gsap.set(".laptopInside", { opacity: 0 });
    gsap.set(".Device", { opacity: 1 });
    const tl = gsap.timeline({
      repeat: -1,
      ease: "back",
      yoyo: true,
    });

    

    tl.to(".Device", {
      delay: 2,
      opacity: 1,
      duration: 1,
      rotationY: 0,
      transformOrigin: "center",
    });
    
    tl.to(".fullMonitor", {
      delay: 2,
      scale: 0.9,
      duration: 1,
      transformOrigin: "center",
    });
    tl.to(".inputs", {
      opacity: 0,
      yPercent: -1,
    });
    tl.to(".laptopBd", {
      scaleX: 3.17,
      duration: 1,
      // opacity: 1,
      // scalex(3.2) translate(4.5%, -10%);
      xPercent: 1,
      yPercent: -30,
      transformOrigin: "center",
    });
    tl.to(".laptopBorder", {
      scaleY: 4.3,
      duration: 1,
      // scalex(3.2) translate(4.5%, -10%);
      xPercent: 0,
      yPercent: 300,
      transformOrigin: "bottom",
    });

    
    tl.to(".laptopBd", {
      scaleY: 0,
      transformOrigin:"top"
    });
    tl.to(".fullMonitor", {
      scaleX: 0.25,
      transformOrigin: "center",
    });
    tl.to(".div1", {
      scaleX: 1,
      scaleY: 1,
      xPercent: 0,
      yPercent: 0,
      transformOrigin: "center",
    });
    tl.to(".div2", {
      scaleX: 1,
      scaleY: 1,
      xPercent: 0,
      yPercent: 0,
    });
    tl.to(".inputs", {
      opacity: 1,
      yPercent: -3700,
      xPercent: -7,
    });
    tl.to(".div1", {
      scaleX: 1.67,
      scaleY: -0.6,
      xPercent: -35,
      yPercent: -27,
      transformOrigin: "center",
    });
    tl.to(".div2", {
      scaleX: 3,
      scaleY: -0.5,
      xPercent: 100,
      yPercent: 35,

      transformOrigin: "center",
    });
  }, []);
  return (
    <div className={styles.animationBox}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="416"
        height="331"
        fill="none"
        viewBox="0 0 500 331"
        style={{ overflow: "inherit" }}
      >
        <g className="Device">
          <g className="laptopBd">
            <path
              fill="#000"
              d="M132 326.641h151.612l-3.734 4.019H134.614L132 326.641Z"
              className="laptopBorder"
            />
            <path
              fill="#000"
              d="M149.925 276h115.763l17.924 49.837H132L149.925 276Z"
              className="laptopDown"
            />
            <g className="laptopInside">
              <path
                fill="#FFFDFD"
                d="M193.899 305.742h28.104l2.607 14.468h-33.608l2.897-14.468Z"
                className="trackpad"
              />
              <path
                fill="#FFF7F7"
                d="M143.986 299.311h127.64l.783.804H143.203l.783-.804Z"
                className="keypadBorder"
              />
            </g>
          </g>
          <g className="fullMonitor">
            <rect
              width="416"
              height="275.713"
              fill="#000"
              className="monitorBack"
              rx="23"
            />
            <path
              fill="#fff"
              d="M14.19 16.88h386.873v241.952H14.19z"
              className="monitor"
            />
            <g className="contents">
              <path fill="#D9D9D9" d="M34 33h348v34H34z" className="div3" />
              <path
                fill="#D9D9D9"
                d="m36 234.816.757-150.234 115.557.582-.757 150.234L36 234.816Z"
                className="div2"
              />
              <path
                fill="#D9D9D9"
                d="M173 235.234 173.757 85l207.51 1.045-.757 150.234L173 235.234Z"
                className="div1"
              />
            </g>
            <g className="inputs">
              <path
                fill="#353535"
                stroke="#9B9B9B"
                d="M149.5 265.5h98v3h-98z"
                className="speaker"
              />
              <path
                fill="#353535"
                stroke="#9B9B9B"
                d="M394.5 267c0 1.835-1.905 3.5-4.5 3.5-2.595 0-4.5-1.665-4.5-3.5s1.905-3.5 4.5-3.5c2.595 0 4.5 1.665 4.5 3.5Z"
                className="camera"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
