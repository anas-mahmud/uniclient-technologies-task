import Banner from "@/components/banner/Banner";
import CTA from "@/components/cta/CTA";
import Pricing from "@/components/pricing/Pricing";
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
      <Pricing />
      <CTA />
    </main>
  );
}
