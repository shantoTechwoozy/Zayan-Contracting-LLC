import CTA from "@/components/cta/page";
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import Service from "@/components/services/page";
import Footer from "@/components/footer/page";
import ImageGallery from "@/components/gallery/page";
import Contact from "@/components/contact/page";
import Announcement from "@/components/announcement/page";

export default function Home() {
  return (
    <main >
      <Announcement/>
      <Header/>
      <Hero/>
      <CTA/>
      <Service/>
      <ImageGallery/>
      <Contact/>
      <Footer/>
    </main>
  );
}
