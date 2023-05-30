import Image from "next/image";
import logo1 from "./Logo1.png";
import logo2 from "./Logo2.png";
import logo3 from "./Logo3.png";
import logo4 from "./Logo4.png";
import logo5 from "./Logo5.png";
import logo6 from "./Logo6.png";
import logo7 from "./Logo7.png";
import logo8 from "./Logo8.png";

function Testimonial() {
  return (
    <div>
      <section className="m-4 md:m-8">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-2xl font-bold">
            Trusted by nearly 5000+ paying customers
          </h2>
        </div>
        <div className="w-2/3 mx-auto grid grid-cols-4 gap-y-16 my-24">
          <Image src={logo1} alt="" className="mx-auto" />
          <Image src={logo2} alt="" className="mx-auto" />
          <Image src={logo3} alt="" className="mx-auto" />
          <Image src={logo4} alt="" className="mx-auto" />
          <Image src={logo5} alt="" className="mx-auto" />
          <Image src={logo6} alt="" className="mx-auto" />
          <Image src={logo7} alt="" className="mx-auto" />
          <Image src={logo8} alt="" className="mx-auto" />
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
