import React from "react";
import styles from "./CardSections.module.css";
import Image from "next/image";
import SectionHeader from "@/components/sectionheader/SectionHeader";

function CardSections() {
  return (
    <>
      <SectionHeader />
      <div className={styles.cardsections}>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.main}>
              <div className={styles.card_container}>
                <div className={styles.card}>
                  <div className={styles.pod_image}>
                    <Image
                      src={"/images/episode.png"}
                      width={200}
                      height={133}
                      alt="Image"
                      className="image"
                      style={{
                        borderRadius: "7px",
                        opacity:"0.5",
                        
                      }}
                    />
                     <div
                      className={styles.icon}
                      style={{
                        top: "5%",
                      }}
                    >
                      <Image
                        src={"/icons/card-menu.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                    <div
                      className={styles.icon}
                      style={{
                        bottom: "4%",
                      }}
                    >
                      <Image
                        src={"/icons/round-plus.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className={styles.pod_content}>
                    <h1 className={styles.title}>Chameleon: Wild Boys
                    </h1>
                    <h2 className={styles.description}>Campside Media</h2>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pod_image}>
                    <Image
                      src={"/images/card-one.png"}
                      width={200}
                      height={133}
                      alt="Image"
                      className="image"
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                     <div
                      className={styles.icon}
                      style={{
                        top: "5%",
                      }}
                    >
                      <Image
                        src={"/icons/card-menu.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className={styles.pod_content}>
                    <h1 className={styles.title}>Chameleon: Wild Boys
                    </h1>
                    <h2 className={styles.description}>Campside Media</h2>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pod_image}>
                    <Image
                      src={"/images/card-two.png"}
                      width={200}
                      height={133}
                      alt="Image"
                      className="image"
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                     <div
                      className={styles.icon}
                      style={{
                        top: "5%",
                      }}
                    >
                      <Image
                        src={"/icons/card-menu.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className={styles.pod_content}>
                    <h1 className={styles.title}>Chameleon: Wild Boys
                    </h1>
                    <h2 className={styles.description}>Campside Media</h2>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pod_image}>
                    <Image
                      src={"/images/card-one.png"}
                      width={200}
                      height={133}
                      alt="Image"
                      className="image"
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                     <div
                      className={styles.icon}
                      style={{
                        top: "5%",
                      }}
                    >
                      <Image
                        src={"/icons/card-menu.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className={styles.pod_content}>
                    <h1 className={styles.title}>Chameleon: Wild Boys
                    </h1>
                    <h2 className={styles.description}>Campside Media</h2>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pod_image}>
                    <Image
                      src={"/images/card-two.png"}
                      width={200}
                      height={133}
                      alt="Image"
                      className="image"
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                     <div
                      className={styles.icon}
                      style={{
                        top: "5%",
                      }}
                    >
                      <Image
                        src={"/icons/card-menu.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className={styles.pod_content}>
                    <h1 className={styles.title}>Chameleon: Wild Boys
                    </h1>
                    <h2 className={styles.description}>Campside Media</h2>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pod_image}>
                    <Image
                      src={"/images/card-one.png"}
                      width={200}
                      height={133}
                      alt="Image"
                      className="image"
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                     <div
                      className={styles.icon}
                      style={{
                        top: "5%",
                      }}
                    >
                      <Image
                        src={"/icons/card-menu.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className={styles.pod_content}>
                    <h1 className={styles.title}>Chameleon: Wild Boys
                    </h1>
                    <h2 className={styles.description}>Campside Media</h2>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pod_image}>
                    <Image
                      src={"/images/card-two.png"}
                      width={200}
                      height={133}
                      alt="Image"
                      className="image"
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                     <div
                      className={styles.icon}
                      style={{
                        top: "5%",
                      }}
                    >
                      <Image
                        src={"/icons/card-menu.svg"}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className={styles.pod_content}>
                    <h1 className={styles.title}>Chameleon: Wild Boys
                    </h1>
                    <h2 className={styles.description}>Campside Media</h2>
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

export default CardSections;
