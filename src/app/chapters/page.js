"use client";
import Chapters from "@/components/maincomponents/chapterssection/Chapters";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <Chapters />
    </>
  );
}
