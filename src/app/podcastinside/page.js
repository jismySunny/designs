"use client";
import { Footer } from "@/components/Footer/Footer";
import Spotlight from "@/components/Spotlight/Spotlight";
import CardSections from "@/components/maincomponents/cardsections/CardSections";
import PodcastDetails from "@/components/maincomponents/podcastdetails/PodcastDetails";
import Promoted from "@/components/maincomponents/promoted/Promoted";

export default function Home({ Component, pageProps }) {
  return (
    <>
    <Spotlight />
    <PodcastDetails />
    <CardSections />
    <Promoted />
    <CardSections />
    <CardSections />
    <Footer />
    </>
  );
}
