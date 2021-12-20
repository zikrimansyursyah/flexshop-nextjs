import { React, useState } from "react";
import { createProducts } from "../../service/product";

const initialFormValue = {
    id: Math.floor(Math.random() * Date.now()),
    name: "",
    price: 0,
    stock: 0,
    category: ""
}

const CreateModal = ({ setOpenCreateModal }) => {
    const [form, setForm] = useState(initialFormValue);
    const [currentContainer, setCurrentContainer] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { code, msg, products } = await createProducts(form)
        if (code === 200) {
            setData(products)
            setOpen(false);
        } else {
            alert(msg)
        }
    }

    return (
        <>
            <div className="fixed w-screen h-screen bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center backdrop-blur-sm duration-500 z-50">
                <div className="w-96 text-right translate-y-12 sm:translate-y-8 sm:translate-x-5">
                    <button
                        onClick={() => {
                            setOpenCreateModal(false)
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
                <div className="w-96 h-auto bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center items-center gap-5">
                    <div className="text-center mb-5">
                        <h2 className="font-roboto font-semibold text-2xl mb-1">Add Item</h2>
                    </div>
                    <form action={handleSubmit} method="post" className="w-full flex flex-col justify-center items-center gap-5">
                        {
                            Object.keys(form).map((key) => (
                                key == "id" ? <div className="hidden"></div> :
                                    <div className="w-full">
                                        <input
                                            className="w-full border p-3 rounded-xl border-blue-100 focus:outline-none"
                                            type={key}
                                            placeholder={key}
                                            onChange={(e) => setForm(prev => ({
                                                ...prev,
                                                key: e.target.value
                                            }))}
                                        />
                                    </div>
                            ))
                        }
                        <button
                            className="bg-blue-100 w-full py-3 rounded-2xl font-roboto font-semibold tracking-wider text-gray-800 hover:shadow-lg motion-safe:hover:scale-105 duration-500"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateModal