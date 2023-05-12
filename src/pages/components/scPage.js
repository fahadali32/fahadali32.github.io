import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Secbox.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiDjango } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";

function Scpage() {
  const ref = useRef(null);
  const [size, setSize] = useState();

  useEffect(() => {
    
    let mm = gsap.matchMedia();
    mm.add("(max-width: 500px)", () => {
      setSize(1);
    });

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      window.addEventListener("resize", (e) => {
        e.preventDefault();
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 1200);
      });

      let width = window.innerWidth;
      width >= 630 ? setSize(1) : setSize(0);
      function resize() {
        width = window.innerWidth;
        window.innerWidth >= 630 ? setSize(1) : setSize(0);
      }

      ScrollTrigger.addEventListener("refreshInit", resize);
      resize();

      const element = ref.current;
      gsap.set(".question", {
        opacity: 0,
        scaleY: 0,
        duration: 0.1,
      });

      const tl = gsap.timeline();

      tl.to(".question", {
        opacity: 1,
        scaleY: 1,
        duration: 1,
      })
        .to(
          ".part1",
          {
            onStart: () => {
              document.querySelector(".question").style.width = "auto";
              document.querySelector(".bigcir").style.opacity = 1;
            },
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onReverseComplete: () => {
              document.querySelector(".bigcir").style.opacity = 0;
              document.querySelector(".question").style.width = "100%";
            },
          },
          ">0.5"
        )
        .to(
          ".I",
          {
            duration: 1,
            scaleX: 7.57,
            scaleY: 3.57,
            x: -227,
            y: -25,
            delay: 0.5,
          },
          ">0.5"
        )
        .to(".I", {
          opacity: 0,
          duration: 0.5,
        })
        .to(".fullMonitor", {
          opacity: 1,
          duration: 2,
        })
        .to(".fullMonitor", {
          duration: 2,
          scaleX: 1,
          scaleY: 1,
          onStart: () => {
            tl.to(".inputs", {
              opacity: 0,
            })
              .to(".laptopBd", {
                duration: 1,
                opacity: 1,
                transformOrigin: "top",
              })
              .to(".div1", {
                scaleX: 1,
                scaleY: 1,
                xPercent: 0,
                yPercent: 0,
                transformOrigin: "center",
              })
              .to(".div2", { scaleX: 1, scaleY: 1, xPercent: 0, yPercent: 0 });
          },
        })
        .to(".laptopBd", {
          scaleX: 3.17,
          xPercent: 1,
          yPercent: -30,
          transformOrigin: "center",
          duration: 1,
          onComplete: () => {
            tl.to(".laptopBd", {
              delay: 1,
              scaleX: 1,
              xPercent: 1,
              yPercent: 1,
              transformOrigin: "center",
              duration: 1,
            });
          },
        })
        .from(
          ".skills",
          {
            delay: 3,
            opacity: 0,
            duration: 1,
            y: -100,
            stagger: {
              amount: 3,
              from: "start",
              ease: "back",
            },
          },
          "<3"
        );

      document.querySelector(".bigcir").style.opacity = 0;

      gsap.set(".laptopInside", { opacity: 0 });
      gsap.set(".laptopBd", { opacity: 0 });
      gsap.set(
        ".fullMonitor",
        { opacity: 0, scaleX: 0.3, transformOrigin: "center" },
        "+=0.5"
      );
      gsap.set(".div1", {
        scaleX: 1,
        scaleY: 1,
        xPercent: 0,
        yPercent: 0,
        transformOrigin: "center",
      });
      gsap.set(".div2", { scaleX: 1, scaleY: 1, xPercent: 0, yPercent: 0 });
      gsap.set(".inputs", { opacity: 1, yPercent: -3700, xPercent: -7 });
      gsap.set(".div1", {
        scaleX: 1.67,
        scaleY: -0.6,
        xPercent: -35,
        yPercent: -27,
        transformOrigin: "center",
      });
      gsap.set(".div2", {
        scaleX: 3,
        scaleY: -0.5,
        xPercent: 100,
        yPercent: 35,
        transformOrigin: "center",
      });

      window.addEventListener("load", () => {
        tl.play();
      });

      ScrollTrigger.create({
        trigger: element,
        start: "50% 70%",
        end: "bottom 5%+=100",
        ease: "Power.inOut",
        toggleActions: "play none none reverse",
        scrub: 1,
        // markers: true,
        pin: true,
        animation: tl,
        endTrigger: element,
        duration: function () {
          return this.trigger.offsetHeight / 100;
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={ref} className={`secbox ${styles.secbox}`}>
      <div className={styles.mainBx}>
        <div className={styles.questionBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="709"
            height="127"
            fill="none"
            viewBox="0 0 709 127"
            className={`question ${styles.question}`}
          >
            <g className="Group 9">
              <path
                fill="#fff"
                d="M24.053 103 1.995 25.91H19.8l12.76 53.564h.64l14.078-53.565h15.245l14.04 53.678h.678l12.761-53.678h17.805L85.749 103H69.864l-14.68-50.403h-.603L39.938 103H24.053Zm108.212-33.426V103h-16.036V25.91h15.584v29.473h.678c1.305-3.413 3.412-6.086 6.323-8.018 2.911-1.957 6.563-2.936 10.954-2.936 4.015 0 7.516.878 10.502 2.635 3.012 1.731 5.346 4.228 7.002 7.49 1.681 3.238 2.509 7.115 2.484 11.632V103h-16.035V69.047c.025-3.564-.879-6.336-2.711-8.319-1.806-1.983-4.341-2.974-7.603-2.974-2.183 0-4.116.465-5.797 1.393-1.656.928-2.961 2.284-3.915 4.065-.928 1.757-1.405 3.877-1.43 6.362Zm66.598 34.518c-3.689 0-6.976-.64-9.862-1.92-2.886-1.305-5.17-3.225-6.851-5.76-1.656-2.559-2.485-5.746-2.485-9.56 0-3.213.59-5.91 1.77-8.094 1.179-2.183 2.785-3.94 4.818-5.27 2.033-1.33 4.341-2.333 6.926-3.01a52.784 52.784 0 0 1 8.206-1.431c3.363-.352 6.073-.678 8.131-.979 2.057-.326 3.551-.803 4.479-1.43.929-.628 1.393-1.556 1.393-2.786v-.226c0-2.384-.753-4.228-2.259-5.533-1.48-1.305-3.588-1.957-6.324-1.957-2.885 0-5.182.64-6.888 1.92-1.707 1.254-2.836 2.835-3.388 4.742l-14.831-1.204c.753-3.514 2.234-6.55 4.442-9.11 2.208-2.584 5.056-4.567 8.545-5.947 3.513-1.405 7.578-2.108 12.196-2.108 3.212 0 6.286.376 9.222 1.13 2.961.752 5.584 1.919 7.867 3.5a17.01 17.01 0 0 1 5.458 6.098c1.33 2.46 1.995 5.408 1.995 8.846V103h-15.207v-8.018h-.452a16.305 16.305 0 0 1-3.726 4.78c-1.556 1.356-3.426 2.422-5.609 3.2-2.183.753-4.705 1.13-7.566 1.13Zm4.592-11.067c2.359 0 4.442-.464 6.249-1.393 1.807-.954 3.225-2.233 4.253-3.84 1.029-1.605 1.544-3.425 1.544-5.457v-6.136c-.502.326-1.192.627-2.071.903-.853.251-1.819.49-2.898.715-1.079.201-2.158.39-3.237.565-1.079.15-2.058.289-2.936.414-1.882.276-3.526.715-4.931 1.318-1.406.602-2.497 1.417-3.275 2.446-.778 1.004-1.167 2.259-1.167 3.765 0 2.183.79 3.852 2.371 5.006 1.606 1.13 3.639 1.694 6.098 1.694Zm71.163-47.843v12.045h-34.819V45.182h34.819Zm-26.915-13.853h16.036v53.904c0 1.48.226 2.635.678 3.463.451.803 1.079 1.368 1.882 1.694.828.326 1.781.49 2.86.49.753 0 1.506-.063 2.259-.189.753-.15 1.33-.263 1.732-.339l2.522 11.933c-.804.251-1.933.539-3.388.866-1.456.351-3.225.564-5.308.639-3.864.151-7.252-.363-10.163-1.543-2.886-1.179-5.132-3.011-6.738-5.496-1.606-2.484-2.397-5.62-2.372-9.41V31.33Zm88.017 72.8c-5.922 0-11.017-1.254-15.283-3.764-4.241-2.534-7.503-6.048-9.787-10.54-2.258-4.492-3.387-9.661-3.387-15.508 0-5.923 1.141-11.117 3.425-15.584 2.309-4.492 5.584-7.993 9.825-10.502 4.241-2.535 9.285-3.802 15.132-3.802 5.044 0 9.46.916 13.25 2.748 3.789 1.832 6.788 4.404 8.996 7.717 2.208 3.312 3.426 7.202 3.651 11.669H346.41c-.426-2.886-1.556-5.208-3.387-6.964-1.807-1.782-4.179-2.673-7.115-2.673-2.484 0-4.655.678-6.512 2.033-1.832 1.33-3.262 3.275-4.291 5.834-1.029 2.56-1.543 5.66-1.543 9.298 0 3.689.502 6.826 1.505 9.41 1.029 2.585 2.472 4.555 4.329 5.91 1.857 1.355 4.028 2.033 6.512 2.033 1.832 0 3.476-.377 4.931-1.13 1.481-.752 2.698-1.844 3.652-3.274.978-1.456 1.618-3.2 1.919-5.233h15.132c-.251 4.417-1.455 8.307-3.613 11.67-2.133 3.337-5.082 5.947-8.846 7.829-3.764 1.882-8.219 2.823-13.363 2.823Zm52.577-.037c-3.689 0-6.977-.64-9.863-1.92-2.886-1.305-5.169-3.225-6.851-5.76-1.656-2.559-2.484-5.746-2.484-9.56 0-3.213.59-5.91 1.769-8.094 1.18-2.183 2.786-3.94 4.818-5.27 2.033-1.33 4.342-2.333 6.927-3.01a52.763 52.763 0 0 1 8.206-1.431c3.362-.352 6.072-.678 8.13-.979 2.058-.326 3.551-.803 4.48-1.43.928-.628 1.392-1.556 1.392-2.786v-.226c0-2.384-.752-4.228-2.258-5.533-1.481-1.305-3.589-1.957-6.324-1.957-2.886 0-5.182.64-6.889 1.92-1.706 1.254-2.835 2.835-3.387 4.742l-14.831-1.204c.753-3.514 2.233-6.55 4.442-9.11 2.208-2.584 5.056-4.567 8.544-5.947 3.514-1.405 7.579-2.108 12.196-2.108 3.212 0 6.286.376 9.223 1.13 2.961.752 5.583 1.919 7.867 3.5a17.02 17.02 0 0 1 5.458 6.098c1.33 2.46 1.995 5.408 1.995 8.846V103H405.65v-8.018h-.452a16.325 16.325 0 0 1-3.727 4.78c-1.556 1.356-3.425 2.422-5.608 3.2-2.184.753-4.706 1.13-7.566 1.13Zm4.592-11.067c2.359 0 4.442-.464 6.248-1.393 1.807-.954 3.225-2.233 4.254-3.84 1.029-1.605 1.543-3.425 1.543-5.457v-6.136c-.502.326-1.192.627-2.07.903-.853.251-1.819.49-2.898.715-1.08.201-2.159.39-3.238.565-1.079.15-2.057.289-2.936.414-1.882.276-3.526.715-4.931 1.318-1.405.602-2.497 1.417-3.275 2.446-.778 1.004-1.167 2.259-1.167 3.765 0 2.183.791 3.852 2.372 5.006 1.606 1.13 3.639 1.694 6.098 1.694Zm56.444-23.451V103h-16.035V45.182h15.282v10.2h.678c1.28-3.362 3.425-6.022 6.437-7.98 3.011-1.982 6.662-2.973 10.953-2.973 4.016 0 7.516.878 10.503 2.635 2.986 1.757 5.307 4.266 6.963 7.528 1.657 3.238 2.485 7.102 2.485 11.594V103h-16.036V69.047c.025-3.538-.878-6.299-2.71-8.281-1.832-2.008-4.354-3.012-7.566-3.012-2.158 0-4.065.465-5.722 1.393-1.631.928-2.911 2.284-3.839 4.065-.904 1.757-1.368 3.877-1.393 6.362Z"
                className="part1"
              />
              <path
                fill="#fff"
                d="M536.999 25.91V103H520.7V25.91h16.299Z"
                className="I"
              />
              <path
                fill="#fff"
                d="M594.705 103.941c-4.392 0-8.37-1.129-11.933-3.388-3.538-2.283-6.349-5.633-8.432-10.05-2.058-4.442-3.086-9.888-3.086-16.337 0-6.625 1.066-12.133 3.199-16.525 2.133-4.416 4.969-7.716 8.507-9.9 3.564-2.208 7.466-3.312 11.707-3.312 3.237 0 5.935.552 8.093 1.656 2.183 1.08 3.94 2.434 5.27 4.066 1.355 1.606 2.384 3.187 3.086 4.742h.49V25.91h15.998V103h-15.81v-9.26h-.678c-.752 1.606-1.819 3.2-3.199 4.78-1.355 1.556-3.124 2.849-5.308 3.878-2.158 1.029-4.793 1.543-7.904 1.543Zm5.081-12.76c2.585 0 4.768-.703 6.55-2.109 1.807-1.43 3.187-3.425 4.141-5.985.978-2.56 1.468-5.558 1.468-8.996 0-3.438-.477-6.424-1.431-8.959-.953-2.535-2.334-4.492-4.14-5.872-1.807-1.38-4.003-2.07-6.588-2.07-2.635 0-4.856.715-6.662 2.145-1.807 1.43-3.175 3.413-4.103 5.948-.929 2.534-1.393 5.47-1.393 8.808 0 3.363.464 6.336 1.393 8.921.953 2.56 2.321 4.567 4.103 6.023 1.806 1.43 4.027 2.145 6.662 2.145Zm67.125 12.948c-5.847 0-10.903-1.242-15.169-3.726-4.241-2.51-7.516-5.998-9.825-10.465-2.309-4.492-3.463-9.699-3.463-15.621 0-5.973 1.154-11.192 3.463-15.66 2.309-4.491 5.584-7.98 9.825-10.464 4.266-2.51 9.322-3.764 15.169-3.764 5.847 0 10.891 1.255 15.133 3.764 4.266 2.485 7.553 5.973 9.862 10.465 2.308 4.466 3.463 9.686 3.463 15.659 0 5.922-1.155 11.13-3.463 15.621-2.309 4.467-5.596 7.955-9.862 10.465-4.242 2.484-9.286 3.726-15.133 3.726Zm.076-12.422c2.66 0 4.881-.752 6.662-2.258 1.782-1.53 3.125-3.614 4.028-6.249.929-2.635 1.393-5.633 1.393-8.996 0-3.363-.464-6.362-1.393-8.997-.903-2.635-2.246-4.717-4.028-6.248-1.781-1.531-4.002-2.296-6.662-2.296-2.685 0-4.944.765-6.776 2.296-1.807 1.53-3.174 3.613-4.103 6.248-.903 2.635-1.355 5.634-1.355 8.997 0 3.363.452 6.361 1.355 8.996.929 2.635 2.296 4.718 4.103 6.249 1.832 1.505 4.091 2.258 6.776 2.258Z"
                className="part1"
              />
            </g>
          </svg>
          <div className={styles.deviceBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="416"
              height="331"
              fill="none"
              className={styles.devices}
              viewBox="0 0 416 331"
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
                    <path
                      fill="#D9D9D9"
                      d="M34 33h348v34H34z"
                      className="div3"
                    />
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

            <svg
              width="762"
              height="588"
              viewBox="0 0 762 588"
              fill="none"
              className={`bigcir ${styles.bigCir}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="381"
                cy="318"
                rx="381"
                ry="318"
                fill="url(#paint0_radial_4_13)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_4_13"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(381 318) rotate(93.1037) scale(295.376 353.921)"
                >
                  <stop stopColor="#8A77FF" />
                  <stop offset="1" stopColor="#322D51" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className={`options ${styles.options}`}>
          <div className={`skills ${styles.skillShow}`}>
            <h1>Web Services</h1>
            <br />
            <p>
              Create websites and design websites Frontend by using
              Reactjs,html,css,Javascript
            </p>
            <br />
            <div className={styles.icons}>
              <AiFillHtml5 className={styles.skcon} />
              <SiCss3 className={styles.skcon} />
              <IoLogoJavascript className={styles.skcon} />
              <FaReact className={styles.skcon} />
            </div>
          </div>
          <div className={`skills ${styles.skillShow}`}>
            <h1>Backend Services</h1>
            <br />
            <p>
              Create websites backend by using
              Express.Js,Next.Js,Django,Sql,MongoDB,Git
            </p>
            <br />
            <div className={styles.icons}>
              <SiExpress className={styles.skcon} />
              <TbBrandNextjs className={styles.skcon} />
              <SiDjango className={styles.skcon} />
              <DiMongodb className={styles.skcon} />
              <BsGit className={styles.skcon} />
            </div>
          </div>
          <div className={`skills ${styles.skillShow}`}>
            <h1>API services</h1>
            <br />
            <p>Create Rest API by using Django,Express.Js,Git</p>
            <br />
            <div className={styles.icons}>
              <AiFillHtml5 className={styles.skcon} />
              <SiCss3 className={styles.skcon} />
              <IoLogoJavascript className={styles.skcon} />
              <FaReact className={styles.skcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scpage;
