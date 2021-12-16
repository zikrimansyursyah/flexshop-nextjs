import { React, useState, useEffect } from "react"
import { deleteProducts, getProducts } from "../../../service/product"

const Content = () => {
    const [data, setData] = useState({ headers: [], rows: [] });

    const getData = async () => {
        const { code, products, msg } = await getProducts()
        if (code === 200) {
            setData(products)
        } else {
            alert(msg)
        }
    }

    const handleDelete = async (id) => {

        const { code, msg, products } = await deleteProducts(data, id)
        if (code === 200) {
            console.log({ products })
            setData(products)
        } else {
            alert(msg)
        }
    }

    // const handleEdit = (id) => {
    //     setEditedDataId(id)
    //     setIsEditModalOpen(true)
    // }

    useEffect(() => {
        getData()
        // ... another func
    }, [])
    return (
        <>
            <div className="w-92vw ml-16 pt-32 duration-500">
                <div className="sidebar fixed w-2/12 h-screen bg-white">
                    <div className="w-full flex flex-col justify-center items-center gap-5 p-5 pb-10 rounded-br-xl border-b border-r">
                        <h1 className="text-3xl font-semibold">Flexshop.</h1>
                        <div className="text-xl text-center">Get Anything you want <span>here!</span></div>
                    </div>
                    <div className="w-full h-full pl-4 pt-10 pr-6 flex flex-col gap-4 border-r">
                        <a className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100" href="#home">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <p className=" font-semibold ">Home</p>
                        </a>
                        <a className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <p className=" font-semibold ">Dashboard</p>
                        </a>
                        <a className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <p className=" font-semibold ">Products</p>
                        </a>
                        <a className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p className=" font-semibold ">Account</p>
                        </a>
                    </div>
                </div>

                {/* Content */}
                <div className="content w-10/12 ml-content mr-32 pr-16 flex flex-col gap-10">
                    <div className="w-full h-85vh">
                        <table class="w-full table text-gray-400 space-y-6 text-sm mt-6 border-separate">
                            <thead class="bg-gray-700 text-gray-500 rounded-xl">
                                <tr>
                                    <th class="p-3 rounded-l-xl">No</th>
                                    <th class="p-3">Id</th>
                                    <th class="p-3">Name</th>
                                    <th class="p-3">Quantity</th>
                                    <th class="p-3">Price</th>
                                    <th class="p-3 rounded-r-xl">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100 text-gray-500 rounded-xl">
                                {
                                    data.rows.map((row, idx) => (
                                        <tr key={idx}>
                                            <th scope="row" className="p-3 rounded-l-xl text-center">{idx + 1}</th>
                                            <td className="p-3 text-center">{row.id}</td>
                                            <td className="p-3 text-center">{row.name}</td>
                                            <td className="p-3 text-center">{row.price}</td>
                                            <td className="p-3 text-center">{row.stock}</td>
                                            <td className="p-3 w-min rounded-r-xl flex m-auto gap-1">
                                                <button className="bg-blue-200 px-5 py-2 rounded-lg">Edit</button>
                                                <button className="bg-red-200 px-5 py-2 rounded-lg">Hapus</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="w-full h-85vh flex gap-7" id="home">
                        <div className="flex-grow bg-yeezy700 bg-cover bg-center flex items-center pl-14 pt-36">
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
                        <div className="w-4/12 flex flex-col justify-center py-40">
                            <h4 className="font-semibold text-lg ml-1">Essential Sneakers</h4>
                            <h1 className="font-roboto font-bold text-4xl lg:text-7xl text-gray-900">Adidas Yeezy 700</h1>
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
                    <div className="grid grid-cols-6 gap-4">
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
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Content

// dashboard, products, accounts