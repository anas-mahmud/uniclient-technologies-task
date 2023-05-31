import Image from "next/image";
import tool1 from "./image 318.png";
import tool2 from "./image 319.png";
import tool3 from "./image 320.png";
import tool4 from "./image 321.png";

function Tools() {
  return (
    <section className="body-font">
      <div className="w-3/4 px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="text-4xl font-semibold mb-6">
            54 exciting writing tools
          </h1>
          <p className="text-lg text-gray-500">
            AI engines take information from various sources and read <br />{" "}
            them like a human would do.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool1} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                Blog Headlines
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Write a better blog title with our A.I tool.
              </p>
            </div>
          </div>
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool2} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                Blog Intros
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Generate a paragraph of blog content using Blog Intros tool
              </p>
            </div>
          </div>
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool3} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                Blog Outline
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Need an attention-grabbing headline for your article?
              </p>
            </div>
          </div>
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool1} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                Blog Conclusions
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Write a better conclusions with AI writing tool.
              </p>
            </div>
          </div>
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool4} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                Content Rewriter
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Get AI writer to rewrite your sentence in a different way.
              </p>
            </div>
          </div>
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool2} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                Product Description
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Need an attention-grabbing headline for your article?
              </p>
            </div>
          </div>
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool3} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                PAS Copywriting Formula
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Get AI writer to rewrite your sentence in a different way.
              </p>
            </div>
          </div>
          <div className="bg-[#282A37] w-80 h-32 flex p-6 rounded-xl">
            <Image src={tool1} alt="" className="w-10 h-10 mr-4 ml-1 mt-1" />
            <div>
              <h2 className="text-base font-medium title-font mb-2">
                Company About Us
              </h2>
              <p className="leading-relaxed text-sm text-gray-400">
                Write a better blog title with our AI tool.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-center text-base font-semibold">
            See all 54 available tools
          </p>
        </div>
      </div>
    </section>
  );
}

export default Tools;
