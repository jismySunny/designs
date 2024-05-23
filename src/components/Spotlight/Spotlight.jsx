import React, { useEffect, useState } from "react";
import SpotlightNavbar from "../SpotlightHeader/SpotlightHeader";
import styles from "./spotlight.module.css";
import Image from "next/image";
import { Navabar } from "@/components/Navbar/Navabar";
import Link from "next/link";

function Spotlight() {
  // Example state to demonstrate useEffect
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Client-side only code
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    }
  }, []);

  return (
    <section className={styles.main}>
      <div className={styles.main_overlay}>
        <div className={styles.wrapper_bg}>
          <Image
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
        <div className={styles.left_container}>
          <div className={styles.image_box}>
            <div className={styles.details}>
              <div className={styles.details_img}>
                <Image
                  className="image"
                  width={490}
                  height={38}
                  src="/images/spotlightimg.png"
                  alt="Image"
                />
              </div>
              <div className={styles.followers_container}>
                <div className={styles.followers_img}>
                  <Image
                    className="image"
                    width={100}
                    height={100}
                    src="/images/follower2.jpeg"
                    alt="Image"
                  />
                  <Image
                    className="image"
                    width={100}
                    height={100}
                    src="/images/follower1.png"
                    alt="Image"
                  />
                  <Image
                    className="image"
                    width={100}
                    height={100}
                    src="/images/follower2.jpeg"
                    alt="Image"
                  />
                  <Image
                    className="image"
                    width={100}
                    height={100}
                    src="/images/follower1.png"
                    alt="Image"
                  />
                </div>
                <div className={styles.followers_details}>
                  <p>10k</p>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <div className={styles.follow}>
              <div className={styles.follow_details}>
                <Image
                  className="image"
                  width={40}
                  height={40}
                  src="/icons/follow.svg"
                  alt="Image"
                />
                <p className={styles.item}>Follow</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.top}>
            <p>Paul Weller Fan Podcast The Thing About Pam</p>
            <div className={styles.icon_E}>
              {/* <Image src={"/icons/E.svg"} width={11} height={13} alt="Image" /> */}
            </div>
          </div>
          <div className={styles.author}>
            <p>Author Name</p>
            <div className={styles.icon}>
              <Image
                src={"/icons/share.svg"}
                width={33}
                height={33}
                alt="Image"
              />
              <Image
                src={"/icons/setting.svg"}
                width={33}
                height={33}
                alt="Image"
              />
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.star}>
              <Image
                src={"/icons/golden-star.svg"}
                width={33}
                height={33}
                alt="Image"
              />
              <p>4.5 (1.1k)</p>
            </div>
            <div className={styles.items}>
              <h3 className={styles.category}>News</h3>
              <span className={styles.dot}></span>
              <h3 className={styles.category}>Technology</h3>
              <span className={styles.dot}></span>
              <h3 className={styles.category}>Music Interviews</h3>
            </div>
          </div>
          <p className={styles.descrption}>
            The Worlds first Paul Weller Fan Podcast - For the fans by the
            fans.A radio broadcaster who gave up a career with one big regret.
            Never getting to interview his hero , the legendary A radio
            broadcaster who gave up a career with one big regret. Never getting
            to interview his hero , the legendary
          </p>
          <div className={styles.buttons}>
            <div className={styles.trailer}>
              <p>Trailer</p>
              <Image
                src={"/icons/play.svg"}
                width={25}
                height={33}
                alt="Image"
              />
            </div>
            <div className={styles.down_arrow}>
              <Image
                src={"/icons/down-arrow.svg"}
                width={25}
                height={33}
                alt="Image"
              />
            </div>
            <div className={styles.promote}>
              <p>Promote me</p>
            </div>
          </div>
          <div className={styles.epiosde}>
            <div className={styles.episode_details}>
              <p className={styles.epiosde_number}>Total Episodes: 300</p>
              <span className={styles.line}></span>
              <p className={styles.epiosde_number}>
                Last Updated on Jan 22 2024
              </p>
            </div>
            <Link href={"#"}>
              <div className={styles.podacast_website}>
                <p className={styles.website}>Podcast Website</p>
                <Image
                  src={"/icons/upside.svg"}
                  width={11}
                  height={13}
                  alt="Image"
                />
              </div>
            </Link>
          </div>
          <div className={styles.episode_box}>
            <h3>Latest Episode</h3>
            <div className={styles.contents}>
              <div className={styles.music}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/episode.png"
                    alt="Description"
                    width={108}
                    height={109}
                  />
                </div>
                <div className={styles.items}>
                  <Image
                    src="/icons/play-round.svg"
                    alt="image"
                    width={38}
                    height={39}
                  />
                </div>
              </div>
              <div className={styles.content_details}>
               <h6>Today</h6>
               <h4>Episode 299: The Horrific Murder, the Horrific Murder</h4>
               <h6>16m</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navabar />
    </section>
  );
}

export default Spotlight;
