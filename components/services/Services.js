import Image from "next/image";
import card1 from "./Card1.png";
import card2 from "./Card2.png";
import frame from "./Frame.png";

function Services() {
  return (
    <section className="">
      <div className="container max-w-[1400px] p-6 py-12 mx-auto space-y-24">
        <div className="flex gap-8 items-center">
          <Image src={card1} alt="" className="" />
          <Image src={frame} alt="" className="-ml-[360px] -mb-36" />
          <div className="w-1/2 px-20 space-y-8">
            <h3 className="text-4xl font-bold">
              Create content efficiently and quickly with great AI writing tools
            </h3>
            <p className="mt-3 text-lg dark:text-gray-400">
              150k+ users. No Credit Card Required. Pro designs and writing at
              no cost. Start for free. Ai Writer Tool | Generate text for com,
              social media, website, sales, blogs etc.
            </p>
            <button
              type="button"
              className="px-5 py-4 rounded text-white bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Start 14 Days Free Trial
            </button>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <div className="w-1/2 px-20 space-y-9">
            <h3 className="text-4xl font-bold">
              Write what you want to convey through clear, & authentic writing
            </h3>
            <p className="mt-3 text-lg dark:text-gray-400">
              AI-Writer is the most accurate content generation platform and
              writing tool that helps you transform your text into a completely
              personalized.
            </p>
            <button
              type="button"
              className="px-5 py-4 rounded text-white bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Start 14 Days Free Trial
            </button>
          </div>
          <Image src={card2} alt="" className="" />
        </div>
      </div>
    </section>
  );
}

export default Services;
