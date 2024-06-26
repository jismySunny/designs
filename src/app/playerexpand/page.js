"use client";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import PlayerExpanded from "@/components/maincomponents/playerexpanded/PlayerExpanded";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <PlayerExpanded />
    </>
  );
}
