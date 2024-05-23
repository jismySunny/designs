import React from "react";
import styles from "./CardSections.module.css";
import Image from "next/image";
import SectionHeader from "@/components/sectionheader/SectionHeader";

function CardSections() {
  return (
    <>
      <SectionHeader />
      <div className={styles.cardsections}>
        <div className={styles.wrapper}>
            
        </div>
      </div>
    </>
  );
}

export default CardSections;
