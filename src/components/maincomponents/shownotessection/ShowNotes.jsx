import React from "react";
import styles from "./ShowNotes.module.css";
import Image from "next/image";

function ShowNotes() {
  return (
    <div className={styles.main}>
      <div className={styles.top_section}>
        <div className={styles.music_box}>
          <div className={styles.music}>
            <div className={styles.musicimg}>
              <Image
                src="/images/music.png"
                alt="Description of image"
                width={88}
                height={89}
              />
            </div>
            <div className={styles.items}>
              <Image
                src="/icons/card-menu.svg"
                alt="image"
                width={28}
                height={19}
              />
            </div>
          </div>

          <div className={styles.about_music}>
            <div className={styles.contents}>
              <p className={styles.title}>
                Episode 299: The Horrific Murder of Dorothy..
              </p>
              <p className={styles.desc}>Morbid: A True Crime Podcast</p>
              <div className={styles.date_time}>
                <p className={styles.desc}>06/06/2022,</p>
                <p className={styles.desc}>30sec</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.closeimg}>
          <Image
            src="/icons/playericons/close.svg"
            alt="image"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className={styles.chapter}>
        <div className={styles.tabs}>
          <p className={styles.tab}>Chapters</p>
          <p className={styles.tab}>Transcripts</p>
          <p className={styles.tab_one}>Show notes</p>
        </div>
        <div className={styles.Chapter_tabs}>
          <div className={styles.tab_items}>
            <div className={styles.top_title}>
              <p>
                Funny Cuz It's True with Elyse Funny Cuz It's True with Elyse
                Myers
              </p>
            </div>
            <div className={styles.item_box}>
              <p className={styles.media}>Lemonada Media</p>
              <div className={styles.chapter_image}>
                <Image
                  src="/icons/right-arrow-yellow.svg"
                  alt="image"
                  width={25}
                  height={20}
                />
              </div>
              <div className={styles.chapter_image}>
                <Image
                  src="/icons/plus-yellow.svg"
                  alt="image"
                  width={25}
                  height={20}
                />
              </div>
            </div>
            <div className={styles.titles}>
              <p className={styles.descc}>Season 1 Episode 10</p>
              <span className={styles.line}></span>
              <p className={styles.descc}>1hour 30 minutes</p>
              <span className={styles.line}></span>
              <p className={styles.descc}>100 MB</p>
              <span className={styles.line}></span>
              <Image src="/icons/E.svg" alt="E" width={15} height={15} />
            </div>
            <div className={styles.dates}>
              <p className={styles.descc}>December 15, 2022 at 10:10 am GMT (10 days ago)</p>
            </div>
            <div className={styles.website}>
              <div className={styles.episode}>
                <p className={styles.media}>Episode Website</p>
                <div className={styles.icon}>
                  <Image
                    src="/icons/upside.svg"
                    alt="image"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <p className={styles.media}>100 Plays</p>
            </div>
          </div>
           
          <div className={styles.tab_item}>
            <p className={styles.descc}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className={styles.media}>Google.com</p>
          </div>
        </div>
      </div>
      <div className={styles.music_times}>
        <p className={styles.time}>1:12</p>

        <div className={styles.progress_box}>
          <div className={styles.progress_bar}></div>
        </div>
        <p className={styles.time}>3:12</p>
      </div>
      <div className={styles.player_section}>
        <div className={styles.playing_items}>
          <Image
            src="/icons/playericons/prev.svg"
            alt="image"
            width={25}
            height={25}
          />
          <Image
            src="/icons/playericons/seconds-skips-left.svg"
            alt="image"
            width={40}
            height={40}
          />
          <div className={styles.player_box}>
            <div className={styles.player_img}>
              <Image
                src="/icons/playericons/play-brown.svg"
                alt="image"
                width={23}
                height={23}
              />
            </div>
          </div>
          <Image
            src="/icons/playericons/seconds-skips-right.svg"
            alt="image"
            width={40}
            height={40}
          />
          <Image
            src="/icons/playericons/next.svg"
            alt="image"
            width={25}
            height={25}
          />
        </div>
        <div className={styles.bottom_section}>
          <p className={styles.speed}>1x</p>
          <Image
            src="/icons/playericons/speaker.svg"
            alt="image"
            width={30}
            height={30}
          />

          <Image
            src="/icons/playericons/plus.svg"
            alt="image"
            width={30}
            height={30}
          />
        </div>
        <div className={styles.bottomleft_section}>
          <Image
            src="/icons/playericons/playlist.svg"
            alt="image"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowNotes;
