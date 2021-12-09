import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Zikri Mansyursyah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Hai! Im Zikri Mansyursyah</h1>
        <p className="mt-6 text-2xl">an UI/UX Designer and Frontend Web Developer</p>
        <code className="mt-5 py-3 px-5 font-mono text-lg bg-gray-100 rounded-md">
          My Portfolio is being developed, stay tuned 😊 ✌🏿
        </code>
        <h3 className="text-xl mt-12 mb-3">My little Project</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
        <div className="mt-5 flex items-center justify-center gap-6">
          <Link href="./flexshop">
            <a className="px-7 py-4 border-2 motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600 hover:text-blue-600 rounded-lg text-gray-600 font-semibold">
              Flexshop
            </a>
          </Link>
          <Link href="!#">
            <a
              className="px-7 py-4 border-2 motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600 hover:text-blue-600 rounded-lg text-gray-600 font-semibold"
              href="https://zikrimansyursyah.com/"
              target="_blank"
            >
              Superb Color
            </a>
          </Link>
          <a
            className="px-7 py-4 border-2 motion-safe:hover:scale-110 duration-500 hover:shadow-lg hover:border-blue-600 hover:text-blue-600 rounded-lg text-gray-600 font-semibold"
            href="https://silungkang.id/"
            target="_blank"
          >
            Silungkang App
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="mt-6 text-xl">Made With Love and Passion - 2021</p>
      </footer>
    </div>
  );
}
