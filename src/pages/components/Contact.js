import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Contact.module.css";
import gsap from "gsap";
import axios from "axios";

function Contact() {
  const contactRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline({
      duration: 0.8,
    });

    tl.fromTo(".mailbox", {
      y: 100,
    },{
      y:0
    }).fromTo('.cloud',{
      x:100,
      onComplete:()=>{
        console.log('complete');
      }
    },{
      x:0
    }).fromTo('#msg',{
      scale:0,
      
    },{
      scale:1
    }).fromTo('#question',{
      scale:0
    },{
      scale:1
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            tl.play();
            console.log("contact yes");
          } else {
            tl.reverse();
            console.log("contact no");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(contactRef.current);
    return () => {};

  }, []);

  async function Submit(e) {
    e.preventDefault()
    const email = e.target.email.value
    const name = e.target.name.value
    const message = e.target.message.value
    const send = await axios.post('/api/contact',{
      email:email,
      name:name,
      message:message
    })

    if(send.messageId){
      
    }
    // console.log(email,name,message);
  }

  return (
    <div ref={contactRef} className={styles.conMain}>
      <div className={styles.contactBox}>
        <div className={`form ${styles.form}`}>
          <h1 className={styles.conText}>Contact with me</h1>
          <br />
          <form onSubmit={(e)=>{
            Submit(e)
          }}>
            <input
              type="email"
              name="email"
              placeholder="Input your mail adress"
            ></input>
            <br />
            <input
              type="name"
              name="name"
              placeholder="Input your name here"
            ></input>
            <br />
            <textarea
              name="message"
              rows="10"
              placeholder="Type your message here"
            ></textarea>
            <br />
            <button className={styles.conSubmit}>Submit</button>
          </form>
        </div>
        <div className={`imgbox ${styles.imgBx}`}>
          <svg
            viewBox="0 0 532 666"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="sceneBox">
              <rect id="Rectangle 5" width="532" height="666" fill="#9590BB" />
              <g id="scene">
                <g className="mailbox">
                  <path
                    id="Rectangle 2"
                    d="M175.529 206.78C175.529 206.78 252.943 213.843 257.5 213.844C291.5 213.847 283.003 305.55 283.003 305.55L175.281 318.989L175.529 206.78Z"
                    fill="#554F7D"
                  />
                  <path
                    id="Vector 1"
                    d="M173.072 207.206C205.474 205.174 206.821 288.231 208.851 314.239L142.021 314.237C142.691 289.905 140.669 209.239 173.072 207.206Z"
                    fill="#322E52"
                  />
                  <path
                    id="Vector 2"
                    d="M141.488 364.994C173.998 366.119 206.51 328.445 208.537 313.762L141.486 313.758C129.573 327.594 108.978 363.868 141.488 364.994Z"
                    fill="#79749F"
                  />
                  <path
                    id="Rectangle 3"
                    d="M209 314.248L228 311.686V511.487H209V314.248Z"
                    fill="url(#paint0_linear_2_44)"
                  />
                  <path
                    id="Rectangle 4"
                    d="M207.5 297.341L209 313.735H142L207.5 297.341Z"
                    fill="#4D4775"
                  />
                </g>
                <g id="ground">
                  <path
                    id="Vector 3"
                    d="M456.145 665.811C349.201 479.864 107.488 489.263 0 517.206V665.811H456.145Z"
                    fill="#39316B"
                  />
                  <path
                    id="Vector 4"
                    d="M532 517.117C486.487 459.183 247.378 470.561 219.475 512.208C374.556 542.962 433.055 630.79 444.437 665.389H532V517.117Z"
                    fill="#504883"
                  />
                </g>
                <g className="cloud">
                  <path
                    className="cloud2"
                    d="M337.662 38.5821L337.963 38.5723C427.151 35.672 407.73 80.1317 429.102 79.6377C450.474 79.1438 506.362 93.9126 485.139 124.559C468.161 149.076 439.18 144.214 427.348 133.877C422.466 143.082 402.739 162.904 362.886 168.542C323.033 174.181 295.984 151.887 287.441 140.035C267.765 146.706 229.733 149.471 235.015 107.16C240.297 64.8485 272.408 68.549 287.803 75.6881C304.161 39.6688 321.344 39.1114 337.662 38.5821Z"
                    fill="#D8D5FA"
                  />
                  <path
                    className="cloud1"
                    d="M267.802 19.3419L268.104 19.3321C357.292 16.4319 337.87 60.8915 359.242 60.3976C380.614 59.9036 436.502 74.6725 415.279 105.319C398.301 129.835 369.32 124.974 357.488 114.636C352.607 123.842 332.88 143.664 293.026 149.302C253.173 154.941 226.124 132.646 217.582 120.794C197.905 127.466 159.873 130.23 165.155 87.9194C170.437 45.6083 202.548 49.3088 217.943 56.4479C234.301 20.4286 251.484 19.8712 267.802 19.3419Z"
                    fill="white"
                  />
                </g>
                <g id="msg">
                  <path
                    id="Vector 7"
                    d="M317.315 409.656C334.082 399.381 339.205 391.462 339.671 388.786C357.37 383.97 389.6 377.228 376.931 388.786C364.263 400.345 331.909 407.515 317.315 409.656Z"
                    fill="white"
                  />
                  <rect
                    id="Rectangle 10"
                    x="308"
                    y="324.612"
                    width="136"
                    height="65.8189"
                    rx="27"
                    fill="white"
                  />
                  <ellipse
                    id="Ellipse 1"
                    cx="344.329"
                    cy="357.521"
                    rx="14.9041"
                    ry="11.2374"
                    fill="#554F7D"
                  />
                  <ellipse
                    id="Ellipse 2"
                    cx="379.726"
                    cy="357.521"
                    rx="14.9041"
                    ry="11.2374"
                    fill="#554F7D"
                  />
                  <ellipse
                    id="Ellipse 3"
                    cx="415.123"
                    cy="357.521"
                    rx="14.9041"
                    ry="11.2374"
                    fill="#554F7D"
                  />
                </g>
                <path
                  id="question"
                  d="M58.1676 376.966V374.925C58.2076 367.924 58.8278 362.342 60.0281 358.181C61.2683 354.02 63.0688 350.66 65.4293 348.099C67.7899 345.538 70.6306 343.218 73.9514 341.137C76.4319 339.537 78.6525 337.877 80.6129 336.156C82.5734 334.436 84.1338 332.535 85.294 330.455C86.4543 328.334 87.0345 325.974 87.0345 323.373C87.0345 320.612 86.3743 318.192 85.054 316.111C83.7337 314.031 81.9532 312.431 79.7127 311.31C77.5122 310.19 75.0716 309.63 72.391 309.63C69.7904 309.63 67.3298 310.21 65.0092 311.37C62.6887 312.491 60.7882 314.171 59.3079 316.411C57.8275 318.612 57.0273 321.353 56.9073 324.633H32.4215C32.6216 316.632 34.542 310.03 38.1829 304.829C41.8237 299.587 46.6449 295.687 52.6463 293.126C58.6477 290.525 65.2693 289.225 72.511 289.225C80.4729 289.225 87.5146 290.545 93.636 293.186C99.7575 295.787 104.559 299.567 108.039 304.529C111.52 309.49 113.261 315.471 113.261 322.473C113.261 327.154 112.48 331.315 110.92 334.956C109.4 338.557 107.259 341.757 104.499 344.558C101.738 347.319 98.4772 349.819 94.7163 352.06C91.5555 353.94 88.9549 355.901 86.9144 357.941C84.9139 359.982 83.4136 362.342 82.4134 365.023C81.4531 367.704 80.953 371.004 80.913 374.925V376.966H58.1676ZM70.0504 415.375C66.0495 415.375 62.6287 413.975 59.788 411.174C56.9873 408.333 55.607 404.932 55.647 400.971C55.607 397.051 56.9873 393.69 59.788 390.889C62.6287 388.088 66.0495 386.688 70.0504 386.688C73.8513 386.688 77.1921 388.088 80.0728 390.889C82.9535 393.69 84.4138 397.051 84.4538 400.971C84.4138 403.612 83.7137 406.033 82.3533 408.233C81.033 410.394 79.2926 412.134 77.1321 413.454C74.9716 414.735 72.611 415.375 70.0504 415.375Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2_44"
                x1="292.5"
                y1="415.173"
                x2="200.995"
                y2="412.245"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AEA7E9" />
                <stop offset="1" stop-color="#29235C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Contact;
