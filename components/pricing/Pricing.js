function Pricing() {
  return (
    <section className="py-20">
      <div className=" px-4 mx-auto">
        <div className="max-w-md mx-auto mb-16 text-center">
          <h2 className="text-4xl font-semibold">
            Make the wise decision for your business
          </h2>
          <p className="mt-7 text-lg text-gray-400">
            Choose from our affordable 3 packages
          </p>
        </div>
        <div className="lg:flex justify-center gap-6">
          <div className="p-10 space-y-6 pt-16 lg:w-[330px] lg:h-[566px] rounded-2xl bg-[#282A37]">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Starter Plan</h4>
              <p className="text-6xl font-bold">
                $29<span className="text-2xl">/month</span>
              </p>
            </div>
            <p className="mt-3 leading-relaxed dark:text-gray-400">
              This package is suitable for teams <br />
              1-15 people.
            </p>
            <h3>What’s included:</h3>
            <p className="">
              10 GB Dedicated Hosting Free <br /> Best for Developers,
              Freelancers <br /> 1 Year Support{" "}
            </p>
            <div>
              <button
                type="button"
                className="px-16 py-3 ml-5 mt-12 rounded-lg text-white border border-black"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="p-10 space-y-6 pt-16 lg:w-[330px] lg:h-[566px] rounded-2xl bg-[#282A37]">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Starter Plan</h4>
              <p className="text-6xl font-bold">
                $29<span className="text-2xl">/month</span>
              </p>
            </div>
            <p className="mt-3 leading-relaxed dark:text-gray-400">
              This package is suitable for teams <br />
              1-15 people.
            </p>
            <h3>What’s included:</h3>
            <p className="">
              15 GB Dedicated Hosting Free <br />
              Best for Developers, Freelancers <br />
              5 Year Support <br />
              Free Custom Domain <br />
              Basic Statistics
            </p>
            <button
              type="button"
              className="px-16 py-3 ml-5 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Get Started
            </button>
          </div>
          <div className="p-10 space-y-6 pt-16 lg:w-[330px] lg:h-[566px] rounded-2xl bg-[#282A37]">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Starter Plan</h4>
              <p className="text-6xl font-bold">
                $29<span className="text-2xl">/month</span>
              </p>
            </div>
            <p className="mt-3 leading-relaxed dark:text-gray-400">
              This package is suitable for teams <br />
              1-15 people.
            </p>
            <h3>What’s included:</h3>
            <p className="">
              20 GB Dedicated Hosting Free <br />
              Best for Developers, Freelancers <br />
              Unlimited Support <br />
              Free Custom Domain <br />
              Full Statistics
            </p>
            <button
              type="button"
              className="px-16 py-3 ml-5 rounded-lg text-white border border-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
