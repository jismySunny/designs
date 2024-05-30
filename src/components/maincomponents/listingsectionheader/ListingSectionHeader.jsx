import React, { useState } from "react";
import styles from "./ListingSectionHeader.module.css";
import Image from "next/image";

function ListingSectionHeader() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

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
              <div className={styles.icons} onClick={handleMenuClick}>
                <Image
                  src={"/icons/music-Menu.svg"}
                  width={35}
                  height={35}
                  alt="Image"
                />
              </div>
              {dropdownVisible && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownItem}>
                    <Image
                      src={"/icons/menu-icon/document.svg"}
                      width={15}
                      height={15}
                      alt="Item"
                    />
                    <span>Document</span>
                  </div>
                  <p className={styles.lines}></p>
                  <div className={styles.dropdownItem}>
                    <Image
                      src={"/icons/menu-icon/photo.svg"}
                      width={15}
                      height={15}
                      alt="Item"
                    />
                    <span>Photos & Videos</span>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Image
                      src={"/icons/menu-icon/camera.svg"}
                      width={15}
                      height={15}
                      alt="Item"
                    />
                    <span>Camera</span>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Image
                      src={"/icons/menu-icon/user-contact.svg"}
                      width={15}
                      height={15}
                      alt="Item"
                    />
                    <span>Contact</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingSectionHeader;
