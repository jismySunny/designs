"use client";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import Queue from "@/components/maincomponents/queuesection/Queue";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <Queue />
    </>
  );
}
