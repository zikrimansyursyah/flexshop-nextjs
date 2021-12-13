import { React } from "react"

const Frame = () => {
    return (
        <>
            <div className="frame-left fixed h-screen w-16 pl-10 pb-6 bg-gray-200 z-10">
                <div className="h-full bg-white rounded-bl-3xl">
                </div>
            </div>
            <div className="pr-frame-right fixed h-screen w-12 pb-6 bg-gray-200 right-0 z-10">
                <div className="h-full bg-white rounded-br-3xl">
                </div>
            </div>
            <div className="frame-bottom fixed w-screen h-14 px-10 pb-6 bg-gray-200 bottom-0 z-10">
                <div className="h-full bg-white rounded-b-3xl">
                </div>
            </div>
        </>
    )
}

export default Frame