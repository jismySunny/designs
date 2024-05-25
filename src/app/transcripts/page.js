"use client";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import Transcripts from "@/components/maincomponents/transcriptssection/Transcripts";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <Transcripts />
    </>
  );
}
