"use client";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import ShowNotes from "@/components/maincomponents/shownotessection/ShowNotes";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <ShowNotes />
    </>
  );
}
