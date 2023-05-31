import Image from "next/image";
import review1 from "./review1.png";
import review2 from "./review2.png";
import review3 from "./review3.png";
import {
  default as review4,
  default as review5,
  default as review6,
  default as review7,
  default as review8,
} from "./review4.png";

function Reviews() {
  return (
    <div className="w-3/4 px-5 py-28 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-4xl font-semibold mb-4">What our customers say</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-400">
          Read why thousands of marketers, writers, and <br /> entrepreneurs
          love us so much.
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col gap-4">
            <Image
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
              src={review1}
            />
            <Image
              src={review7}
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col gap-4">
            <Image
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
              src={review2}
            />
            <Image
              src={review6}
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col gap-4">
            <Image
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
              src={review3}
            />
            <Image
              src={review5}
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col gap-4">
            <Image
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
              src={review4}
            />
            <Image
              src={review8}
              alt=""
              className="rounded-lg w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
