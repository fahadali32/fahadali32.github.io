import React from "react";
import Image from "next/image";
import { Inter, Monoton, Pacifico, Permanent_Marker } from "next/font/google";
import styles from "@/styles/Nav.module.css";
// const fbt = FrederickaTheGreat({ subsets: ["latin"],weight: ['400'], });
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import SplitType from "split-type";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Pivot as Hamburger } from "hamburger-react";

function Nav() {
  const myElement1 = useRef();
  const myElement2 = useRef();
  const myElement3 = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const navh = document.documentElement.clientHeight
    document.documentElement.style.setProperty("--navh", `${navh}px`);
    const timer = setTimeout(() => {
      const text1 = new SplitType(myElement1.current, {
        types: "words, chars",
      });
      setIsVisible(true);
      gsap.fromTo(
        text1.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.1,
        }
      );

      const text2 = new SplitType(myElement2.current, {
        types: "words, chars",
      });
      setIsVisible(true);
      gsap.fromTo(
        text2.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.1,
        }
      );

      const text3 = new SplitType(myElement3.current, {
        types: "words, chars",
      });
      setIsVisible(true);
      gsap.fromTo(
        text3.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 2,
        }
      );

      gsap.fromTo(`mlogo`,{
        scaleX:1.5,
        left:100,
      },{
        scaleX:1,
        left:0,
      })
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  function menubar() {}
  return (
    <div>
      <div className={`navbar ${styles.navbar}`}>
        <div className={`navHeader ${styles.navHeader}`}>
          <div className={styles.brandName}>
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              className={`mlogo ${styles.mLogo}`}
              alt={"Logo"}
            />
          </div>
          <div className={styles.toggleBtn}>
            <Hamburger
              onToggle={(toggled) => {
                if (toggled) {
                  const navlink = (document.querySelector(
                    ".navlink"
                  ).style.clipPath = "circle(141.4% at 100% 0)");
                  document.querySelector(".navbar").style.zIndex = 999
                  document.querySelector(".bd").style.overflowY = "hidden"
                  // document.querySelector(".navlink").style.display = "block";
                } else {
                  const navlink = (document.querySelector(
                    ".navlink"
                  ).style.clipPath = "circle(0.4% at 100% 0)");
                  document.querySelector(".navbar").style.background = "transparent";
                  document.querySelector(".navbar").style.zIndex = 0
                  
                }
              }}
            />
          </div>
        </div>
        <div className={`navlink ${styles.navLink}`}>
          <ul>
            <li>
              <Link
                href={"/about"}
                style={{ display: isVisible ? "block" : "none" }}
                ref={myElement1}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                style={{ display: isVisible ? "block" : "none" }}
                ref={myElement1}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                style={{ display: isVisible ? "block" : "none" }}
                ref={myElement1}
              >
                Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={styles.nav}>
        <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          style={{ display: isVisible ? "block" : "none" }}
          className={styles.Logo}
          alt={"Logo"}
        />
        <div className={styles.navlink}>
          <Link
            href={"/about"}
            style={{ display: isVisible ? "block" : "none" }}
            ref={myElement1}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            style={{ display: isVisible ? "block" : "none" }}
            ref={myElement2}
          >
            Project
          </Link>
          <Link
            href={"/about"}
            style={{ display: isVisible ? "block" : "none" }}
            ref={myElement3}
          >
            About
          </Link>
        </div>
      </div> */}
      {/* <div className={styles.mnav}>
        <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          className={styles.mLogo}
          alt={"Logo"}
        />
        <div
          className={styles.menubar}
          onClick={() => {
            menubar();
          }}
        >
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                const navlink = (document.querySelector(
                  ".navlink"
                ).style.clipPath = "circle(141.4% at 100% 0)");
              } else {
                const navlink = (document.querySelector(
                  ".navlink"
                ).style.clipPath = "circle(0.4% at 100% 0)");
              }
            }}
          />
        </div>
        <div className={`navlink ${styles.mnavlink}`}>
          <Link
            href={"/about"}
            style={{ display: isVisible ? "block" : "none" }}
            ref={myElement1}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            style={{ display: isVisible ? "block" : "none" }}
            ref={myElement2}
          >
            Project
          </Link>
          <Link
            href={"/about"}
            style={{ display: isVisible ? "block" : "none" }}
            ref={myElement3}
          >
            About
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Nav;
