import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CheckeredDivider from '@/components/CheckeredDivider';
import FeaturedPods from '@/components/FeaturedPods';
import Gallery from '@/components/Gallery';
import Products from '@/components/Products';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-racing-black">
      <Navbar />
      <Hero />
      <CheckeredDivider />
      <FeaturedPods />
      <CheckeredDivider />
      <Gallery />
      <CheckeredDivider />
      <Products />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
