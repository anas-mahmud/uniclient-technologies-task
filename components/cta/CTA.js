function CTA() {
  return (
    <div className="lg:w-3/4 lg:flex justify-between px-11 py-9 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
      <h2 className="leading-tight lg:text-3xl text-2xl font-semibold">
        It will help you improve your writing <br /> & bring ideas more clearly.
      </h2>
      <div className="flex items-center">
        <button
          type="button"
          className="px-5 py-4 rounded text-black font-semibold bg-white"
        >
          Start 14 Days Free Trial
        </button>
      </div>
    </div>
  );
}

export default CTA;
