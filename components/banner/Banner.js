import { AiFillPlayCircle } from "react-icons/ai";

function Banner() {
  return (
    <div className="sm:w-full mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
      <h1 className="text-4xl lg:text-6xl font-medium lg:leading-[4.25rem]">
        Write better <br /> content for your <br />
        <div className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold ">
            Facebook Ads
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
        </div>
      </h1>

      <p className="px-2 py-1 mt-8 mb-12 text-lg text-gray-400">
        Artificial intelligence writing tool helps you create blogs, social
        media websites and much more.
      </p>
      <button
        type="button"
        className="px-5 py-4 rounded text-white bg-gradient-to-r from-blue-600 to-purple-600"
      >
        Start 14 Days Free Trial
      </button>
      <div className="flex items-center gap-3 mt-5">
        <AiFillPlayCircle />
        <p>Watch A Demo</p>
      </div>
    </div>
  );
}

export default Banner;
