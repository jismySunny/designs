import React from "react";
import styles from "./EpisodeInnerSection.module.css";
import Image from "next/image";

function EpisodeInnerSection() {
  return (
    <div className={styles.main}>
      <div className={styles.episodeinner}>
        <div className={styles.wrapper}>
        <div className={styles.closeimg}>
          <Image
            src="/icons/playericons/close.svg"
            alt="image"
            width={30}
            height={30}
          />
        </div>
          <div className={styles.episode_box}>
            <div className={styles.top_section}>
              <div className={styles.image_section}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/episodeinnerimg.png"
                    alt="Description of image"
                    width={208}
                    height={109}
                  />
                </div>
                <div className={styles.play_icon}>
                  <Image
                    src="/icons/card-menu.svg"
                    alt="image"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <div className={styles.image_details}>
                <div className={styles.top_title}>
                  <p>
                    Funny Cuz Its True with Elyse Funny Cuz Its True with Elyse
                    Myers
                  </p>
                </div>
                <div className={styles.titles}>
                  <p className={styles.descc}>Season 1 Episode 10</p>
                  <span className={styles.line}></span>
                  <p className={styles.descc}>December 15, 2022</p>
                  <span className={styles.line}></span>
                  <p className={styles.descc}> 57 min</p>
                  <span className={styles.line}></span>
                  <Image src="/icons/E.svg" alt="E" width={15} height={15} />
                </div>
                <div className={styles.item_box}>
                  <p className={styles.media}>Lemonada Media</p>
                  <div className={styles.chapter_image}>
                    <Image
                      src="/icons/right-arrow-yellow.svg"
                      alt="image"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className={styles.chapter_image}>
                    <Image
                      src="/icons/plus-yellow.svg"
                      alt="image"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.icon}>
                    <Image
                      src="/icons/play-black.svg"
                      alt="image"
                      width={23}
                      height={25}
                    />
                  </div>
                  <p>Preview</p>
                </div>
              </div>
            </div>
            <div className={styles.progress_box}>
              <div className={styles.progress_bar}></div>
            </div>
            <div className={styles.player_section}>
              <div className={styles.icons}>
                <Image
                  src="/icons/plus.svg"
                  alt="image"
                  width={26}
                  height={26}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/icons/download.svg"
                  alt="image"
                  width={26}
                  height={26}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/icons/add1.svg"
                  alt="image"
                  width={55}
                  height={55}
                />
              </div>
              <div className={styles.play}>
                <div className={styles.player_img}>
                  <Image
                    src="/icons/playericons/play.svg"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className={styles.icons}>
                <Image
                  src="/icons/add-playlist.svg"
                  alt="image"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/icons/playericons/save.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.like}>
                <div className={styles.icons}>
                  <Image
                    src="/icons/playericons/like.svg"
                    alt="image"
                    width={30}
                    height={30}
                    style={{
                      marginTop: "18px",
                    }}
                  />
                </div>
                <p>100</p>
              </div>
            </div>
            <div className={styles.navlinks}>
              <p className={styles.nav_items}>Episodes</p>
              <p className={styles.nav_item}>Clips</p>
              <p className={styles.nav_item}>About</p>
              <p className={styles.nav_item}>Reviews</p>
              <p className={styles.nav_item}>Comments</p>
            </div>
            <div className={styles.date_links}>
              <div className={styles.top}>
                <div className={styles.left}>
                  <p>December 15, 2022 at 10:10 am GMT (10 days ago)</p>
                  <div className={styles.time}>
                    <p>57 Minutes left</p>
                    <span className={styles.line}></span>
                    <p>100 MB</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.icons}>
                    <Image
                      src="/icons/tick.svg"
                      alt="image"
                      width={35}
                      height={35}
                    />
                  </div>
                  <p>Mark as Played</p>
                  <span className={styles.line}></span>
                  <div className={styles.icons}>
                    <Image
                      src="/icons/Vector1.svg"
                      alt="image"
                      width={35}
                      height={35}
                    />
                  </div>
                  <p>Archive</p>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.left}>
                  <p>Episode Website</p>
                  <div className={styles.icons}>
                    <Image
                      src="/icons/upside.svg"
                      alt="image"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
                <div className={styles.right}>
                  <p>100 Plays</p>
                </div>
              </div>
            </div>
            <div className={styles.shownotes}>
              <h3>Show Notes</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. It is
                a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
            </div>
            <div className={styles.hosts}>
              <h3>Hosts and Guests</h3>
              <div className={styles.hostsimg}>
                <Image
                  src="/images/follower2.png"
                  alt="Description of image"
                  width={108}
                  height={108}
                />
              </div>
              <p>Host Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpisodeInnerSection;
