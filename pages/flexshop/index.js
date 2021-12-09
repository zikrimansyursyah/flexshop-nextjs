import Head from "next/head";
import Link from "next/link";

export default function Flexshop() {
  return (
    <div className="flex">
      <Head>
        <title>Flexshop - Everything you need</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed">
        <nav className="flex gap-4 px-10 py-6 w-screen bg-gray-200">
          <Link href="../">
            <a
              title="Back to Portfolio"
              className="p-4 text-gray-700 bg-white rounded-xl border border-white hover:border-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
          </Link>
          <div className="bg-white w-9/12 rounded-xl flex items-center px-6 justify-between border border-gray-200 shadow-lg">
            <h1 className="text-xl font-medium">Flexshop.</h1>
            <div className=" text-xs text-right">
              <p>DESIGNED BY</p>
              <p>ZIKRI MANSYURSYAH</p>
            </div>
          </div>
          <a
            className="bg-gray-700 text-white font-medium px-12 flex items-center rounded-xl hover:scale-110 transition duration-500 ease-in-out hover:shadow-lg"
            href="!#"
          >
            Catalog
          </a>
          <a
            className="bg-gray-700 text-white font-medium px-12 flex items-center rounded-xl hover:scale-110 transition duration-500 ease-in-out hover:shadow-lg"
            href="!#"
          >
            Featured
          </a>
          <div className="w-full flex shadow-lg rounded-xl">
            <div className="flex pl-5 bg-white items-center rounded-l-xl border-t border-b border-l border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 bg-white text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="w-full pl-6 pr-4 rounded-r-xl focus:outline-none border-t border-r border-b border-gray-200"
              placeholder="Search anything.."
            ></input>
          </div>
          <a
            className="bg-gray-700 text-white font-medium px-12 flex items-center rounded-xl hover:scale-110 transition duration-500 ease-in-out hover:shadow-lg"
            href="!#"
          >
            Login
          </a>
        </nav>
        <div className="w-full bg-gray-200 h-10 px-10">
          <div className="w-full h-full bg-white rounded-t-2xl"></div>
        </div>
      </div>
      <div className="sidebar w-2/12 bg-gray-200 h-screen pl-10 mt-36 fixed">
        <div className="h-full bg-white rounded-bl-2xl">
          <div class=" bg-white h-full">
            <div class="flex flex-col items-center pb-10 pt-5 px-10 shadow-lg rounded-br-lg">
              <h1 className="text-2xl font-semibold mb-5">Flexshop.</h1>
              <h1 className="text-xl font-medium text-center">Get Anything you want here!</h1>
            </div>
            <div class="pl-10">
              <ul class="space-y-8 pt-10">
                <li class="flex space-x-4 items-center hover:text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                  <a href="">Dashboard</a>
                </li>
                <li class="flex space-x-4 items-center hover:text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <a href="">Promo</a>
                </li>
                <li class="flex space-x-4 items-center hover:text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                  <a href="">Sneakers</a>
                </li>
                <li class="flex space-x-4 items-center hover:text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <a href="">Mens</a>
                </li>
                <li class="flex space-x-4 items-center hover:text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <a href="">Womans</a>
                </li>
                <li class="flex space-x-4 items-center hover:text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <a href="">Shirt</a>
                </li>
                <li class="flex space-x-4 items-center hover:text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <a href="">Account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-web mt-36 h-screen w-screen">
        <div className=" pr-6 bg-gray-200 h-5/6">
          <div className="h-full w-full bg-white">
            <div className="flex h-full">
              <div className="flex-shrink w-2/12"></div>
              <div className="flex-none w-10/12 px-10 pt-10 flex gap-10">
                <div className="flex-none bg-yeezy700 bg-cover bg-center w-8/12 pl-14 flex items-end pb-20">
                  <a
                    className="bg-white w-60 h-64 shadow-xl p-9 flex flex-col justify-center border-2 border-white hover:border-blue-600 motion-safe:hover:scale-110 duration-500"
                    href="!#"
                  >
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
                      <p className="bg-gray-800 border border-gray-300 px-1 py-0.5 text-white">60% OFF</p>
                    </div>
                    <p className="text-xs">start from</p>
                    <p className="text-red-500 font-bold text-3xl">IDR 500K</p>
                  </a>
                </div>
                <div className="h-full w-full flex flex-col justify-center">
                  <h4 className="font-semibold text-lg ml-1">Essential Sneakers</h4>
                  <h1 className="font-roboto font-bold text-7xl text-gray-900">Adidas Yeezy 700</h1>
                  <p className="font-roboto text-gray-700 mt-5 ml-2">
                    A foot X-ray gets re-imagined into an all-over graffiti skeleton graphic for these bony Air Force
                    1s. Its Court Purple leather upper creates a costume-like look with flavour, and along with a
                    glow-in-the-dark outsole, these court classics are ready for spooky season.
                  </p>
                  <a className="ml-2 mt-14 font-semibold underline w-max" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-6 bg-gray-200 h-1/6">
          <div className="h-full w-full bg-white">
            <div className="flex h-full">
              <div className="flex-shrink w-2/12"></div>
              <div className="flex-none w-10/12 px-10 pt-10 flex gap-16">
                <div className="bg-nike bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-airJordan bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-champion bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-adidas bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-tomy bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-louis bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-6 bg-gray-200 h-3/6">
          <div className="h-full w-full bg-white">
            <div className="flex h-full">
              <div className="flex-shrink w-2/12"></div>
              <div className="flex-none w-10/12 px-10 pt-10 flex gap-10">
                <div className="men bg-men bg-cover bg-center w-1/2 h-full">
                  <div className="h-full w-full bg-black bg-opacity-30 hover:bg-opacity-60 duration-500 flex flex-col items-center justify-center text-white">
                    <p className="text-lg font-sans mb-2">2022</p>
                    <h3 className="text-5xl font-roboto font-semibold tracking-wider mb-5">MENSWEAR</h3>
                    <a
                      className="bg-gray-900 rounded-md px-5 py-2 shadow-lg text-lg motion-safe:hover:scale-110 duration-500"
                      href="!#"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
                <div className="women bg-women bg-cover bg-center w-1/2 h-full">
                  <div className="h-full w-full bg-black bg-opacity-30 hover:bg-opacity-60 duration-500 flex flex-col items-center justify-center text-white">
                    <p className="text-lg font-sans mb-2">2022</p>
                    <h3 className="text-5xl font-roboto font-semibold tracking-wider mb-5">WOMENSWEAR</h3>
                    <a
                      className="bg-gray-900 rounded-md px-5 py-2 shadow-lg text-lg motion-safe:hover:scale-110 duration-500"
                      href="!#"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-6 bg-gray-200 h-1/6">
          <div className="h-full w-full bg-white">
            <div className="flex h-full">
              <div className="flex-shrink w-2/12"></div>
              <div className="flex-none w-10/12 px-10 pt-10 flex gap-16">
                <div className="bg-nike bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-airJordan bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-champion bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-adidas bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-tomy bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
                <div className="bg-louis bg-contain bg-center w-48 h-auto border-2 border-white motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full fixed bottom-0 pl-10 pr-6 pb-6">
        <div className="bg-white rounded-b-2xl h-10 flex items-center justify-between shadow-xl px-10">
          <p className="text-sm">&copy; Flexshop 2021 All Right Reserved</p>
          <p className="text-sm">Made with Love and Passion - Zikri Mansyursyah</p>
        </div>
      </div>
    </div>
  );
}
