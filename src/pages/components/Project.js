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
    const tl = gsap.timeline({
      duration: 1,
    });

    const splitTxt = document.querySelectorAll(".project");

    splitTxt.forEach((element) => {
      const text = new SplitType(element, { types: "words, chars" });
      tl.from(text.chars, {
        duration: 0.5,
        opacity: 1,
        delay: -1,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      });
    });
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: projectRef.current,
        start: "top 70%",
        end: "bottom 5%+=200",
        ease: "Power.inOut",
        toggleActions: "play none none reverse",
        scrub: 1,
        markers: true,
        // pin: true,
        animation: tl,
        endTrigger: projectRef.current,
        duration: function () {
          return this.trigger.offsetHeight / 100;
        },
      });

    })

    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((el) => {
    //       if (el.isIntersecting) {
    //         tl.play();
    //         console.log("yes project");
    //       } else {
    //         tl.reverse();
    //         console.log("no project");
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0.5,
    //   }
    // );

    // observer.observe(projectRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.proBox}>
      <div ref={projectRef} className={styles.proSec}>
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
