import React, { useEffect, useState, useRef } from "react";
import SpotlightNavbar from "../SpotlightHeader/SpotlightHeader";
import styles from "./spotlight.module.css";
import Image from "next/image";
import { Navabar } from "@/components/Navbar/Navabar";

function Spotlight() {
  return (
    <section className={styles.main}>
      <div className={styles.main_overlay}>
        <div className={styles.wrapper_bg}>
          <img
            className="image"
            width={20}
            height={20}
            src="/background-images/spotlight.png"
            alt="Image"
          />
        </div>
      </div>
      <SpotlightNavbar />
      <div className={styles.slide_container}>
        <div className={styles.curvy_bg}>
          <Image
            width={30}
            height={30}
            src={"/background-images/spotlight-curvy-bg.svg"}
            className="image"
            alt="Curvy Background"
          />
        </div>
      </div>
      <Navabar />
    </section>
  );
}

export default Spotlight;
