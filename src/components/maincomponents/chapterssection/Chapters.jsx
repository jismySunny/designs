import React from "react";
import styles from "./Chapters.module.css";
import Image from "next/image";

function Chapters() {
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
          <p className={styles.tab_one}>Chapters</p>
          <p className={styles.tab}>Transcripts</p>
          <p className={styles.tab}>Show notes</p>
        </div>
        <div className={styles.Chapter_tabs}>
          <div className={styles.tab_items}>
            <p>1.</p>
            <div className={styles.item_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_icon}>
                 <Image
                  src="/icons/play-round.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
                 </div>
                </div>

                <div className={styles.player_details}>
                  <h5>Chameleon: Wild Boys</h5>
                  <p>0:20</p>
                </div>
              </div>

              <div className={styles.icon}>
                <Image
                  src="/icons/playericons/Vector.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className={styles.tab_items}>
            <p>2.</p>
            <div className={styles.item_boxes}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/podcastimg.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                </div>

                <div className={styles.player_details}>
                  <h5>Chameleon: Wild Boys</h5>
                  <p>0:20</p>
                </div>
              </div>

              <div className={styles.icon}>
                <Image
                  src="/icons/playericons/Vector.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className={styles.tab_items}>
            <p>3.</p>
            <div className={styles.item_boxes}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                   <div className={styles.play_icon}>
                 <Image
                  src="/icons/play-round.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
                 </div>
                </div>

                <div className={styles.player_details}>
                  <h5>Chameleon: Wild Boys</h5>
                  <p>0:20</p>
                </div>
              </div>

              <div className={styles.icon}>
                <Image
                  src="/icons/playericons/Vector.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className={styles.tab_items}>
            <p>4.</p>
            <div className={styles.item_boxes}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_icon}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_details}>
                  <h5>Chameleon: Wild Boys</h5>
                  <p>0:20</p>
                </div>
              </div>

              <div className={styles.icon}>
                <Image
                  src="/icons/playericons/Vector.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className={styles.tab_items}>
            <p>5.</p>
            <div className={styles.item_boxes}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                   <div className={styles.play_icon}>
                 <Image
                  src="/icons/play-round.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
                 </div>
                </div>

                <div className={styles.player_details}>
                  <h5>Chameleon: Wild Boys</h5>
                  <p>0:20</p>
                </div>
              </div>

              <div className={styles.icon}>
                <Image
                  src="/icons/playericons/Vector.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className={styles.tab_items}>
            <p>6.</p>
            <div className={styles.item_boxes}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                   <div className={styles.play_icon}>
                 <Image
                  src="/icons/play-round.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
                 </div>
                </div>

                <div className={styles.player_details}>
                  <h5>Chameleon: Wild Boys</h5>
                  <p>0:20</p>
                </div>
              </div>

              <div className={styles.icon}>
                <Image
                  src="/icons/playericons/Vector.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
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
      <div className={styles.bottom}>
        <p>Funny Cuz Its True with Elys Funny Cuz Its True with Elyse Myers. Funny Cuz Its True with Elys Funny Cuz Its</p>

      </div>
    </div>
  );
}

export default Chapters;
