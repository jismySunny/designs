import React from "react";
import styles from "./Queue.module.css";
import Image from "next/image";
import ShowNotes from "../shownotessection/ShowNotes";

function Queue() {
  return (
    <>
      <ShowNotes />
      <div className={styles.queue}>
        <div className={styles.main}>
          <div className={styles.closeimg}>
            <Image
              src="/icons/playericons/close.svg"
              alt="image"
              width={30}
              height={30}
            />
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Queue;
