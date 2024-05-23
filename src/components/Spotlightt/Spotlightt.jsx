import React from 'react';
import SpotlightNavbar from "../SpotlightHeader/SpotlightHeader";
import Image from "next/image";
import styles from "./Spotlightt.module.css"
import { Navabar } from "@/components/Navbar/Navabar";


function Spotlightt() {
  return (
    <div className={styles.Spotlight_img}>
        
      <SpotlightNavbar />
      <img
            className="image"
            width={20}
            height={20}
            src="/background-images/spotlight.png"
            alt="Image"
          />
      <Navabar />
    </div>
  )
}

export default Spotlightt
