import Image from "next/image";
import feature from "./feature.png";

function Feature() {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-24 leading-snug">
        Mixland helps you <br /> build beautiful website
      </h2>
      <div className="w-2/3 mx-auto flex justify-center gap-16">
        <nav
          aria-label="Main Nav"
          className="w-1/4 flex flex-col space-y-2 mt-1"
        >
          <li className="block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-medium text-white">
            Blog Headlines
          </li>

          <li className="block rounded-lg px-6 py-4  text-base font-medium border border-gray-600 text-white">
            Blog Intros
          </li>

          <li className="block rounded-lg px-6 py-4 text-base font-medium border border-gray-600 text-white">
            Content Rewriter
          </li>

          <li className="block rounded-lg px-6 py-4 text-base font-medium border border-gray-600 text-white">
            FaceBook Ads
          </li>

          <a className="block rounded-lg px-6 py-4 text-base font-medium border border-gray-600 text-white">
            Product Description
          </a>

          <a className="block rounded-lg px-6 py-4 text-base font-medium border border-gray-600 text-white">
            PAS Copywriting Formula
          </a>
        </nav>
        <Image src={feature} alt="" />
      </div>
    </div>
  );
}

export default Feature;
