import React from "react";
import styles from "./PlayerExpanded.module.css";
import Image from "next/image";

function PlayerExpanded() {
  return (
    <div className={styles.main}>
      <div className={styles.top_section}>
        <Image
          src="/icons/playericons/close.svg"
          alt="image"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.music}>
        <div className={styles.musicimg}>
          <Image
            src="/images/music.png"
            alt="Description of image"
            width={200}
            height={100}
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
      <div className={styles.music_details}>
        <h3 className={styles.title}>
          Episode 299: The Horrific Murder of Dorothy..
        </h3>
        <p className={styles.description}>Morbid: A True Crime Podcast</p>
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

export default PlayerExpanded;
