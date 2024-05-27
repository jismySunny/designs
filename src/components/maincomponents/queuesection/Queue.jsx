import React, { useState } from "react";
import styles from "./Queue.module.css";
import Image from "next/image";
import ShowNotes from "../shownotessection/ShowNotes";

function Queue() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log("Search query:", query);
  };
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
                    src="/icons/pause.svg"
                    alt="image"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <div className={styles.player_details}>
                <div className={styles.top_details}>
                  <div className={styles.titles}>
                    <p className={styles.descc}>Season 1 Episode 10</p>
                    <span className={styles.line}></span>
                    <p className={styles.descc}> February 23, 2022</p>
                  </div>
                  <div className={styles.icon}>
                    <Image
                      src="/icons/card-menu.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <h4 className={styles.epd_name}>
                  Episode 299: The Horrific Murde
                </h4>
                <div className={styles.epd_bottom}>
                    <p className={styles.descc}>16m left</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className={styles.queue_box}>
            <h3>Queue</h3>
            <div className={styles.buttons}>
              <div className={styles.select}>
                <p>Select</p>
              </div>
              <div className={styles.select}>
                <p>Clear Queue</p>
              </div>
              <div className={styles.icon}>
                <Image
                  src="/icons/card-menu.svg"
                  alt="image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className={styles.search_box}>
            <p className={styles.descc}> From Playlist</p>
            <div className={styles.titles}>
              <p className={styles.descc}>12 Item(s)</p>
              <span className={styles.line}></span>
              <p className={styles.descc}>10hours 30minutes remaining</p>
            </div>
            <div className={styles.search}>
              <div className={styles.icon}>
                <Image
                  src="/icons/search-grey.svg"
                  alt="image"
                  width={25}
                  height={25}
                />
              </div>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Search Queue"
                />
              </form>
            </div>
          </div>
          <div className={styles.search_results}>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.results_box}>
              <div className={styles.image_play}>
                <div className={styles.chapter_image}>
                  <Image
                    src="/images/episode.png"
                    alt="image"
                    width={85}
                    height={80}
                  />
                  <div className={styles.play_iconn}>
                    <Image
                      src="/icons/play-round.svg"
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={styles.player_section}>
                  <div className={styles.top_details}>
                    <div className={styles.titles}>
                      <p className={styles.descc}>Season 1 Episode 10</p>
                      <span className={styles.line}></span>
                      <p className={styles.descc}> February 23, 2022</p>
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/icons/lines.svg"
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <h4 className={styles.epd_name}>
                    Episode 299: The Horrific Murde
                  </h4>
                  <div className={styles.bottom}>
                    <p className={styles.descc}>16m</p>
                    <div className={styles.icons_box}>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/download.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/save.svg"
                          alt="image"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/add2.svg"
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.icon}>
                        <Image
                          src="/icons/playericons/plus.svg"
                          alt="image"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Queue;
