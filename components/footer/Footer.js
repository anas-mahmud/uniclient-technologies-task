function Footer() {
  return (
    <footer>
      <div className="lg:w-11/12 px-5 pt-20 mx-auto lg:ml-32 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-base mb-5">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-3">About</li>
              <li className="mb-3">Features</li>
              <li className="mb-3">Works</li>
              <li className="mb-3">Career</li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-base mb-5">
              Help
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-3">Customer Support</li>
              <li className="mb-3">Delivery Details</li>
              <li className="mb-3">Terms & Conditions</li>
              <li className="mb-3">Privacy Policy</li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-base mb-5">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-3">Free eBooks</li>
              <li className="mb-3">Development Tutorial</li>
              <li className="mb-3">How to - Blog</li>
              <li className="mb-3">Youtube Playlist</li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-base mb-5">
              Links
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-3">Free eBooks</li>
              <li className="mb-3">Development Tutorial</li>
              <li className="mb-3">How to - Blog</li>
              <li className="mb-3">Youtube Playlist</li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
