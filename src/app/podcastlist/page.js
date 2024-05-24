"use client";
import { Footer } from "@/components/Footer/Footer";
import SpotlightHeader from "@/components/SpotlightHeader/SpotlightHeader";
import EpisodeListing from "@/components/maincomponents/episodelisting/EpisodeListing";
import ListingSectionHeader from "@/components/maincomponents/listingsectionheader/ListingSectionHeader";
import PodcastListing from "@/components/maincomponents/podcastlisting/PodcastListing";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <SpotlightHeader />
      <ListingSectionHeader />
      <PodcastListing />
      <Footer />
    </>
  );
}
