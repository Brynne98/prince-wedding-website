import Nav from "../components/Nav";
import Hero from "../components/Hero";
import DetailsStrip from "../components/DetailsStrip";
import Couple from "../components/Couple";
import Programme from "../components/Programme";
import Dress from "../components/Dress";
import Rules from "../components/Rules";
import FAQ from "../components/FAQ";
import RSVP from "../components/RSVP";
import Story from "../components/Story";
import Gallery from "../components/Gallery";
import Party from "../components/Party";
import Children from "../components/Children";
import Footer from "../components/Footer";
import ScrollEffects from "../components/ScrollEffects";

export default function Page() {
  return (
    <>
      <ScrollEffects />
      <Nav />
      <Hero />
      <DetailsStrip />
      <Couple />
      <Programme />
      <Dress />
      <Rules />
      <FAQ />
      <RSVP />
      <Story />
      <Gallery />
      <Party />
      <Children />
      <Footer />
    </>
  );
}
