import { React, useEffect, useState } from "react";
import Link from "next/link";
import AuthModal from "../../modal/authModal";

const NavbarLG = () => {
    const [OpenAuthModal, setOpenAuthModal] = useState(false);
    const [Logged, setLogged] = useState({ auth: false, user: '' });
    const [UserMenu, setUserMenu] = useState(false)

    useEffect(() => {
        let username = sessionStorage.getItem('username')
        let isAuth = sessionStorage.getItem('logged')
        if (isAuth) setLogged({ auth: true, user: username })
        else setLogged({ auth: false, user: '' })
    }, [])


    return (
        <>
            <nav className="fixed w-screen flex flex-col gap-6 px-10 pt-6 bg-gray-200 duration-500 z-20">
                <div className="navbar w-full h-full flex gap-3 xl:gap-6">
                    <Link href="../">
                        <a
                            title="Back to Portfolio"
                            className="w-1/12 p-4 flex justify-center text-gray-700 bg-white rounded-xl border border-white hover:border-gray-300"
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
                    <div className="bg-white w-4/12 rounded-xl flex items-center px-6 justify-between border border-gray-200 shadow-lg">
                        <h1 className="text-xl font-medium">Flexshop.</h1>
                        <div className="text-xs text-right">
                            <p>DESIGNED BY</p>
                            <p>ZIKRI MANSYURSYAH</p>
                        </div>
                    </div>
                    <a
                        className="w-1/12 bg-gray-700 text-white font-medium flex items-center justify-center rounded-xl hover:scale-110 transition duration-500 ease-in-out hover:shadow-lg"
                        href="!#"
                    >
                        Catalog
                    </a>
                    <a
                        className="w-1/12 bg-gray-700 text-white font-medium flex items-center justify-center rounded-xl hover:scale-110 transition duration-500 ease-in-out hover:shadow-lg"
                        href="!#"
                    >
                        Featured
                    </a>
                    <div className="flex w-3/6 flex-grow shadow-lg rounded-xl">
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
                    {
                        Logged.auth ?
                            <div className="w-2/12 bg-white rounded-xl flex">
                                <p className="flex-grow flex items-center justify-center font-semibold text-xs lg:text-xl">{Logged.user}</p>
                                <a className="w-14 flex flex-col justify-center items-center border-l cursor-pointer" onClick={() => { setUserMenu(UserMenu ? false : true) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {
                                        UserMenu ?
                                            <div className="fixed w-2/12 h-20 mt-40 mr-28 lg:mr-36 xl:mr-44 2xl:mr-60">
                                                <div className="w-full py-5 px-4 bg-white rounded-lg shadow-lg">
                                                    <a className="w-full flex gap-5 p-2 rounded-lg hover:bg-red-50" onClick={() => {
                                                        sessionStorage.removeItem("logged")
                                                        window.location = '/flexshop'
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden xl:block text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                        </svg>
                                                        <span className="text-red-500 ">Logout</span>
                                                    </a>
                                                </div>
                                            </div> :
                                            <div></div>
                                    }

                                </a>
                            </div> :
                            <a
                                className="w-2/12 bg-gray-700 text-white font-medium px-12 flex items-center justify-center rounded-xl hover:scale-110 transition duration-500 ease-in-out hover:shadow-lg cursor-pointer"
                                onClick={() => setOpenAuthModal(true)}
                            >
                                Login
                            </a>
                    }
                </div>
                <div className="top-frame w-full h-7 bg-white rounded-t-3xl">
                </div>
            </nav>
            {OpenAuthModal ? (
                <AuthModal setOpenAuthModal={setOpenAuthModal} />
            ) : (
                <div></div>
            )}
        </>
    )
}

export default NavbarLG