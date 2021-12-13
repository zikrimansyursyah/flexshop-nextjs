import { React, useState } from "react";
import AuthModal from "../../modal/authModal";


const NavbarSM = () => {
    const [OpenNav, setOpenNav] = useState(false)
    const [OpenAuthModal, setOpenAuthModal] = useState(false)

    return (
        <>
            <nav className="fixed w-screen h-16 flex bg-white shadow-md">
                <div className="w-10/12 pl-10 flex items-center">
                    <a className="text-2xl font-roboto font-semibold">Flexshop.</a>
                </div>
                <a className="w-2/12 flex justify-center items-center cursor-pointer" onClick={() => setOpenNav(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </a>
            </nav>
            {
                OpenNav ?
                    <div className="fixed h-screen w-screen bg-black bg-opacity-20 backdrop-blur-md">
                        <a className="absolute w-16 h-16 right-0 top-0 rounded-bl-xl bg-red-400 flex items-center justify-center cursor-pointer" onClick={() => setOpenNav(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </a>
                        <div className="w-full h-full flex flex-col justify-center items-center gap-5 text-2xl font-semibold">
                            <a>Dasboard</a>
                            <a>Catalog</a>
                            <a onClick={() => setOpenAuthModal(true)} className="cursor-pointer">Login</a>
                        </div>
                    </div> :
                    <div></div>
            }
            {OpenAuthModal ? (
                <AuthModal setOpenAuthModal={setOpenAuthModal} />
            ) : (
                <div></div>
            )}
        </>
    )
}

export default NavbarSM