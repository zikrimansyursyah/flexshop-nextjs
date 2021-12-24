import { React } from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-85vh flex gap-7" id="home">
        <div className="flex-grow bg-yeezy700 bg-cover bg-center flex items-center pl-14 pt-36">
          <a className="bg-white w-60 h-64 shadow-xl p-9 flex flex-col justify-center border-2 border-white hover:border-blue-600 motion-safe:hover:scale-110 duration-500 cursor-pointer">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="text-sm text-gray-500">
                Present by <span className="font-bold text-blue-600">BCA</span>
              </p>
            </div>
            <h1 className="font-bold font-roboto text-gray-900 text-xl border-b-4 pb-3 mt-1 mb-4">
              SNEAKERS DAY
            </h1>
            <div className="flex gap-2 items-center mb-3">
              <p className="line-through">IDR 3000K</p>
              <p className="bg-gray-800 border border-gray-300 px-1 py-0.5 text-white">
                60% OFF
              </p>
            </div>
            <p className="text-xs">start from</p>
            <p className="text-red-500 font-bold text-3xl">IDR 500K</p>
          </a>
        </div>
        <div className="w-4/12 flex flex-col justify-center py-40">
          <h4 className="font-semibold text-lg ml-1">Essential Sneakers</h4>
          <h1 className="font-roboto font-bold text-4xl lg:text-7xl text-gray-900">
            Adidas Yeezy 700
          </h1>
          <p className="font-roboto text-gray-700 mt-5 ml-2">
            A foot X-ray gets re-imagined into an all-over graffiti skeleton
            graphic for these bony Air Force 1s. Its Court Purple leather upper
            creates a costume-like look with flavour, and along with a
            glow-in-the-dark outsole, these court classics are ready for spooky
            season.
          </p>
          <a className="ml-2 mt-14 font-semibold underline w-max cursor-pointer">
            Shop Now
          </a>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 my-16">
        <div className="h-10vw w-10vw bg-nike bg-contain bg-no-repeat bg-center border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
        <div className="h-10vw w-10vw  bg-airJordan bg-contain bg-no-repeat bg-center border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
        <div className="h-10vw w-10vw  bg-champion bg-contain bg-no-repeat bg-center border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
        <div className="h-10vw w-10vw  bg-adidas bg-contain bg-no-repeat bg-center border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
        <div className="h-10vw w-10vw  bg-tomy bg-contain bg-no-repeat bg-center border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
        <div className="h-10vw w-10vw  bg-louis bg-contain bg-no-repeat bg-center border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
      </div>
      <div className="flex gap-10 h-50vh">
        <div className="men bg-men bg-cover bg-center w-1/2 h-full">
          <div className="h-full w-full bg-black bg-opacity-30 hover:bg-opacity-60 duration-500 flex flex-col items-center justify-center text-white">
            <p className="text-lg font-sans mb-2">2022</p>
            <h3 className="text-5xl font-roboto font-semibold tracking-wider mb-5">
              MENSWEAR
            </h3>
            <a className="bg-gray-900 rounded-md px-5 py-2 shadow-lg text-lg motion-safe:hover:scale-110 duration-500 cursor-pointer">
              Discover More
            </a>
          </div>
        </div>
        <div className="women bg-women bg-cover bg-center w-1/2 h-full">
          <div className="h-full w-full bg-black bg-opacity-30 hover:bg-opacity-60 duration-500 flex flex-col items-center justify-center text-white">
            <p className="text-lg font-sans mb-2">2022</p>
            <h3 className="text-5xl font-roboto font-semibold tracking-wider mb-5">
              WOMENSWEAR
            </h3>
            <a className="bg-gray-900 rounded-md px-5 py-2 shadow-lg text-lg motion-safe:hover:scale-110 duration-500 cursor-pointer">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
