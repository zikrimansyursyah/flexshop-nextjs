import { React, useState } from "react";
import Login from "../auth/login";
import Register from "../auth/register";

const AuthModal = ({ setOpenAuthModal }) => {
    const [currentContainer, setCurrentContainer] = useState(false);
    return (
        <>
            <div className="fixed w-screen h-screen bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center backdrop-blur-sm duration-500 z-50">
                <div className="w-96 text-right translate-y-12 sm:translate-y-8 sm:translate-x-5">
                    <button
                        onClick={() => {
                            setOpenAuthModal(false)
                            setCurrentContainer(false)
                        }}
                        className="bg-red-400 p-3 rounded-lg rounded-tr-3xl sm:rounded-tr-lg motion-safe:hover:scale-110 hover:shadow-md duration-500 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-white "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {currentContainer ? (
                    <Register setCurrentContainer={setCurrentContainer} />
                ) : <Login setCurrentContainer={setCurrentContainer} />
                }
            </div>
        </>
    )
}

export default AuthModal