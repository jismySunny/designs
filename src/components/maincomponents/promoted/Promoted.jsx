import React from 'react';
import styles from "./Promoted.module.css";
import Image from "next/image";

function Promoted() {
  return (
    <div>
        <div className={styles.promoted}>
        <div className={styles.wrapper}>
           <h3 className={styles.top_title}>Promoted</h3>
           <p className={styles.top_desc}>The suggested podcasts worldwide. Last updated 4 hours ago</p>
           <div className={styles.main}>
           <div className={styles.items}>
            <div className={styles.contents}>
              <div className={styles.music}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/promoted.png"
                    alt="Description"
                    width={108}
                    height={109}
                  />
                </div>
              </div>
              <div className={styles.content_details}>
                <div className={styles.top}>
                  <h4>Episode 299: The Horrific Murder of Dorothy Eggers</h4>
                  <Image
                    src="/icons/card-menu.svg"
                    alt="Menu"
                    width={38}
                    height={39}
                  />
                </div>
                <h6>Sam Laliberte</h6>
                <p className={styles.descrption}>
                A strange letter appears on a city councillors desk in Birmingham, England, laying out an elaborate plot by Islamic extremists to infiltrate the citys schools 
                A strange letter appears on a city councillors desk in Birmingham, England, laying out an elaborate plot by Islamic extremists to infiltrate the citys schools...

                </p>
                <div className={styles.bottom}>
                  
                    <Image
                      src="/icons/round-plus.svg"
                      alt="Plus"
                      width={30}
                      height={30}
                    />
                  
                </div>
              </div>
            </div>
          </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Promoted
