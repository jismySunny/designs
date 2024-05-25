"use client";
import EpisodeInnerSection from "@/components/maincomponents/episodeinnersection/EpisodeInnerSection";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <EpisodeInnerSection />
    </>
  );
}
