import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Project.module.css";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import SplitType from "split-type";
import useSWR from "swr";

function Project(props) {
  const projectRef = useRef();
  const [project, setProject] = useState(props.data);
  useEffect(() => {
    setProject(props.data);
    const tl = gsap.timeline();
    gsap.set(".project", {
      opacity: 1,
    });

    tl.from(".proDes", {
      x: -300,
      opacity: 0,
      scrub: 0.5,
    }).from(".proImg", {
      x: 100,
      opacity: 0,
      scrub: 0.5,
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          const splitTxt = document.querySelectorAll(".project");
          splitTxt.forEach((element) => {
            const text = new SplitType(element, { types: "words, chars" });
            gsap.from(text.chars, {
              duration: 0.8,
              opacity: 1,
              delay: 1,
              scale: 0,
              y: 80,
              rotationX: 180,
              transformOrigin: "0% 50% -50",
              ease: "back",
              stagger: 0.01,
            });
          });
          tl.play();
          console.log("project yes");
        } else {
          tl.reverse();
          console.log("project no");
        }
      });
    },{ threshold: 0.5 });

    console.log(project);
    observer.observe(projectRef.current);

    return () => {};
  }, [props, project]);

  return (
    <div className={styles.proBox}>
      <div className={styles.proSec} ref={projectRef}>
        <h1 className={`project ${styles.projectTitle}`}>Project</h1>
        <div className={styles.proBoxSec}>
          {project != null
            ? project?.map((data, i) => {
                return (
                  <div key={i} className={styles.Project}>
                    <div className={styles.ProjectImg}>
                      <Image
                        src={`/${data.image}`}
                        // layout="fill"
                        height={1000}
                        width={1000}
                        alt="Eshop"
                        className={`proImg ${styles.proImg}`}
                      />
                    </div>
                    <div className={`proDes ${styles.proDes}`}>
                      <h1 className={styles.proH}>{data.name} </h1>
                      <div className={styles.proDiv}>
                        <p className={styles.proP}>{data.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : "null"}
        </div>
      </div>
    </div>
  );
}

export default Project;
