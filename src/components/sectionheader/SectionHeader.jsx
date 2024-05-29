import React from "react";
import styles from "./SectionHeader.module.css";
import Image from "next/image";

function SectionHeader() {
  return (
    <div className={styles.sectionheader}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.section_left}>
            <h3>More from Author</h3>
            <p>
              The most popular promotions worldwide. Last updated 4 hours ago
            </p>
          </div>
          <div className={styles.section_right}>
            <p>See All</p>
            <div className={styles.arrows}>
              <Image
                src="/icons/left-arrow.svg"
                alt="image"
                width={20}
                height={20}
              />
              <Image
                src="/icons/right-arrow.svg"
                alt="image"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
