"use client";
import Chapters from "@/components/maincomponents/chapterssection/Chapters";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import PlayerComponents from "@/components/maincomponents/playercomponents/PlayerComponents";
import PlayerExpanded from "@/components/maincomponents/playerexpanded/PlayerExpanded";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <Chapters />
    </>
  );
}
