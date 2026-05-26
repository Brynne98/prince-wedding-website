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
      <FAQ />
      <Story />
      <Party />
      <RSVP />
      <section className="gallery">
        <img
          className="gallery-photo"
          src="/photos/banner.jpg"
          alt="Brynne and Thama"
          style={{ objectPosition: "70% center" }}
        />
      </section>
      <Children />
      <Rules />
      <Footer />
    </>
  );
}
