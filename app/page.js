import Banner from "@/components/banner/Banner";
import CTA from "@/components/cta/CTA";
import Feature from "@/components/feature/Feature";
import Pricing from "@/components/pricing/Pricing";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import Testimonial from "@/components/testimonial/Testimonial";
import Tools from "@/components/tools/Tools";

export default function Home() {
  return (
    <main>
      <Banner />
      <Testimonial />
      <Services />
      <Tools />
      <Feature />
      <Reviews />
      <Pricing />
      <CTA />
    </main>
  );
}
