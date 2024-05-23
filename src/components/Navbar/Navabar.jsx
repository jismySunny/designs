import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export const Navabar = ({ navRef, sticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Podcast"); // Default active section
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 590) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth <= 590) {
      setIsOpen(!isOpen);
    }
  };

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav
      className={`${styles.nav} ${sticky ? styles.sticky : styles.absolute}`}
      ref={navRef}
    >
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {/* <div className={styles.menu} onClick={toggleMenu} ref={menuRef}>
            <Image width={40} height={40} alt="Menu" src={"/icons/menu.svg"} />
          </div> */}
          <Link href={"/"} className={styles.logo}>
            <Image
              src="/images/gavaria-logo-white.png"
              width={100}
              height={100}
              className="image"
              alt="Gavaria"
              style={{
                opacity: sticky ? 1 : 0,
              }}
            />
          </Link>
          {(isOpen || window.innerWidth > 590) && (
            <div
              className={styles.links}
              style={{
                transform: sticky ? "translateX(20px)" : "translateX(-130px)",
              }}
            >
              <Link
                href="/"
                className={`${styles.link} ${
                  activeSection === "Podcast" ? styles.active : ""
                }`}
                onClick={() => handleSectionChange("Episodes")}
              >
                Episodes
              </Link>
              <Link
                href="/"
                className={`${styles.link} ${
                  activeSection === "Music" ? styles.active : ""
                }`}
                onClick={() => handleSectionChange("Clips")}
              >
                Clips
              </Link>
              <Link
                href="/"
                className={`${styles.link} ${
                  activeSection === "About" ? styles.active : ""
                }`}
                onClick={() => handleSectionChange("About")}
              >
                About
              </Link>
              <Link
                href="/"
                className={`${styles.link} ${
                  activeSection === "Reviews" ? styles.active : ""
                }`}
                onClick={() => handleSectionChange("Reviews")}
              >
                Reviews
              </Link>
              <Link
                href="/"
                className={`${styles.link} ${
                  activeSection === "News" ? styles.active : ""
                }`}
                onClick={() => handleSectionChange("News")}
              >
                Comments
              </Link>
            </div>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.search_box}>
            <input
              type="text"
              className={styles.input}
              placeholder={`Search ${activeSection}`}
            />
            <div className={styles.search_icon}>
              <Image
                width={26}
                height={26}
                alt="Search"
                src={"/icons/search.svg"}
              />
            </div>
          </div>
          <div className={styles.menu} onClick={toggleMenu} ref={menuRef}>
            <Image width={40} height={40} alt="Menu" src={"/icons/menu.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.all}>
              <p>all</p>
              <Image
                className="image"
                width={40}
                height={40}
                src="/icons/down-arrow-white.svg"
                alt="Image"
              />
            </div>
            <Link href={"/"} className={styles.Image}>
              Unplayed{" "}
            </Link>
            <Link href={"/"} className={styles.Image}>
              Downloaded
            </Link>
            <Link href={"/"} className={styles.Image}>
              Played
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.up_down}>
              <Image
                className="image"
                width={40}
                height={40}
                src="/icons/down-arrow-white.svg"
                alt="Image"
              />
              <Image
                className="image"
                width={40}
                height={40}
                src="/icons/down-arrow-white.svg"
                alt="Image"
              />
            </div>
            <div className={styles.menu}>
              <Image
                className="image"
                width={40}
                height={40}
                src="/icons/down-arrow-white.svg"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
