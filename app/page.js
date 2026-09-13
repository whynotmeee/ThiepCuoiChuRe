import FallingPetals from "@/components/FallingPetals";
import Invitation from "@/components/Invitation";
import BlessingBar from "@/components/BlessingBar";
import Hero from "@/components/Hero";
import InvitationDetails from "@/components/InvitationDetails";
import BigWords from "@/components/BigWords";
import Intro from "@/components/Intro";
import Quote from "@/components/Quote";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import Calendar from "@/components/Calendar";
import Story from "@/components/Story";
import Gifts from "@/components/Gifts";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import AutoScroll from "@/components/AutoScroll";
import config from "@/data/config";

export default function Home() {
  const quotes = config.quotes || [];

  return (
    <main className="relative">
      <Invitation>
        <FallingPetals />
        <BlessingBar />
        <div className="relative z-10">
          <Hero />
          <InvitationDetails />
          <BigWords words={config.heroWords} tone="light" />
          <Intro />
          <Quote data={quotes[0]} tone="light" />
          <Gallery />
          <Countdown />
          <Quote data={quotes[1]} tone="dark" />
          <Calendar />
          <Quote data={quotes[2]} tone="light" />
          <Story />
          <Quote data={quotes[3]} tone="light" />
          <Gifts />
          <Rsvp />
          <Footer />
        </div>
        <MusicPlayer />
        <AutoScroll />
      </Invitation>
    </main>
  );
}
