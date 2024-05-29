import React from "react";
import styles from "./PodcastDetails.module.css";
import Image from "next/image";

function PodcastDetails() {
  return (
    <div className={styles.Podcastdetails}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>2023</h3>
        <div className={styles.podcast_boxes}>
          <div className={styles.items}>
            <div className={styles.contents}>
              <div className={styles.music}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/podcastimg.png"
                    alt="Description"
                    width={108}
                    height={109}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    src="/icons/play-round.svg"
                    alt="Play"
                    width={48}
                    height={49}
                  />
                </div>
              </div>
              <div className={styles.content_details}>
                <div className={styles.top}>
                  <h6>Today</h6>
                  <Image
                    src="/icons/card-menu.svg"
                    alt="Menu"
                    width={30}
                    height={30}
                  />
                </div>
                <h4>#052: The Madness of Mental Health Diagnosis</h4>
                <p className={styles.descrption}>
                  Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed, and proposes a different, more
                  realistic approach. Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed.
                </p>
                <div className={styles.bottom}>
                  <h6>16m</h6>
                  <div className={styles.bottom_left}>
                    <Image
                      src="/icons/add-playlist.svg"
                      alt="Add to playlist"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/icons/plus.svg"
                      alt="Plus"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.contents}>
              <div className={styles.music}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/podcastimg.png"
                    alt="Description"
                    width={108}
                    height={109}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    src="/icons/play-round.svg"
                    alt="Play"
                    width={48}
                    height={49}
                  />
                </div>
              </div>
              <div className={styles.content_details}>
                <div className={styles.top}>
                  <div className={styles.titles}>
                    <p className={styles.descc}>Trailer</p>
                    <span className={styles.line}></span>
                    <p className={styles.descc}>Video</p>
                    <span className={styles.line}></span>
                    <p className={styles.descc}>S1 E10</p>
                    <span className={styles.line}></span>
                    <p className={styles.des}>February 12, 2024</p>
                    <span className={styles.line}></span>
                    <Image
                      src="/icons/E.svg"
                      alt="E"
                      width={15}
                      height={15}
                    />
                  </div>
                  <Image
                    src="/icons/card-menu.svg"
                    alt="Menu"
                    width={30}
                    height={30}
                  />
                </div>
                <h4>#052: The Madness of Mental Health Diagnosis</h4>
                <p className={styles.descrption}>
                  Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed, and proposes a different, more
                  realistic approach. Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed.
                </p>
                <div className={styles.bottom}>
                  <div className={styles.bottom_left}>
                    <h6>1hr 16m left</h6>
                    <div className={styles.progress_box}>
                      <div className={styles.progress_bar}></div>
                    </div>
                  </div>
                  <div className={styles.bottom_right}>
                    <Image
                      src="/icons/add-playlist.svg"
                      alt="Add to playlist"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/icons/plus.svg"
                      alt="Plus"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.contents}>
              <div className={styles.music}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/podcastimg.png"
                    alt="Description"
                    width={108}
                    height={109}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    src="/icons/play-round.svg"
                    alt="Play"
                    width={48}
                    height={49}
                  />
                </div>
              </div>
              <div className={styles.content_details}>
                <div className={styles.top}>
                  <h6>May 14</h6>
                  <Image
                    src="/icons/card-menu.svg"
                    alt="Menu"
                    width={38}
                    height={39}
                  />
                </div>
                <h4>#052: The Madness of Mental Health Diagnosis</h4>
                <p className={styles.descrption}>
                  Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed, and proposes a different, more
                  realistic approach. Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed.
                </p>
                <div className={styles.bottom}>
                  <div className={styles.bottom_left}>
                    <Image
                      src="/icons/delete.svg"
                      alt="Delete"
                      width={20}
                      height={20}
                    />
                    <h6>16m</h6>
                  </div>
                  <div className={styles.bottom_right}>
                    <Image
                      src="/icons/add-playlist.svg"
                      alt="Add to playlist"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/icons/plus.svg"
                      alt="Plus"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.contents}>
              <div className={styles.music}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/podcastimg.png"
                    alt="Description"
                    width={108}
                    height={109}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    src="/icons/play-round.svg"
                    alt="Play"
                    width={48}
                    height={49}
                  />
                </div>
              </div>
              <div className={styles.content_details}>
                <div className={styles.top}>
                  <h6>May 14</h6>
                  <Image
                    src="/icons/card-menu.svg"
                    alt="Menu"
                    width={38}
                    height={39}
                  />
                </div>
                <h4>#052: The Madness of Mental Health Diagnosis</h4>
                <p className={styles.descrption}>
                  Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed, and proposes a different, more
                  realistic approach. Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed.
                </p>
                <div className={styles.bottom}>
                  <h6>16m</h6>
                  <div className={styles.bottom_left}>
                    <Image
                      src="/icons/add-playlist.svg"
                      alt="Add to playlist"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/icons/plus.svg"
                      alt="Plus"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.contents}>
              <div className={styles.music}>
                <div className={styles.musicimg}>
                  <Image
                    src="/images/podcastimg.png"
                    alt="Description"
                    width={108}
                    height={109}
                  />
                </div>
              </div>
              <div className={styles.content_details}>
                <div className={styles.top}>
                  <h6>May 14</h6>
                  <Image
                    src="/icons/card-menu.svg"
                    alt="Menu"
                    width={38}
                    height={39}
                  />
                </div>
                <h4>#052: The Madness of Mental Health Diagnosis</h4>
                <p className={styles.descrption}>
                  Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed, and proposes a different, more
                  realistic approach. Possibility Podcast host Mel Schwartz describes how the
                  American Psychological Association&apos;s Diagnosis and Statistical
                  Manual is inherently flawed.
                </p>
                <div className={styles.bottom}>
                  <h6>16m</h6>
                  <div className={styles.bottom_left}>
                    <Image
                      src="/icons/add-playlist.svg"
                      alt="Add to playlist"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/icons/plus.svg"
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
        <div className={styles.podcast_bottom}>
          <div className={styles.podcast_left}>
            <p className={styles.desc}>100 Episodes</p>
            <span className={styles.line}></span>
            <p className={styles.desc}> 10 Archived</p>
          </div>
          <div className={styles.podcast_right}>
            <p className={styles.desc}>See All</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastDetails;
