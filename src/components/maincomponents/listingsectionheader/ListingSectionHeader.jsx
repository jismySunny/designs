import React from "react";
import styles from "./ListingSectionHeader.module.css";
import Image from "next/image";

function ListingSectionHeader() {
  return (
    <div className={styles.listingsection}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <Image
                src={"/icons/podcast_listing.svg"}
                width={15}
                height={15}
                alt="Image"
              />
            </div>
            <h4>Episode Listing</h4>
          </div>
          <div className={styles.right}>
            <div className={styles.menu_list}>
              <div className={styles.icons}>
                <Image
                  src={"/icons/music-Menu.svg"}
                  width={35}
                  height={35}
                  alt="Image"
                />
              </div>
              {/* <div className={styles.menu_items}>
                <div className={styles.items}>
                  <div className={styles.icon}>
                    <Image
                      src={"/icons/music-Menu.svg"}
                      width={15}
                      height={15}
                      alt="Image"
                    />
                  </div>
                  <p>Document</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingSectionHeader;
