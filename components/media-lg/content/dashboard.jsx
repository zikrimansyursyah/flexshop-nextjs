import { React, useState, useEffect } from "react";
import { deleteProducts, getProducts } from "../../../service/product"


const Dasboard = () => {
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
        <table class="w-full table text-transparent space-y-6 text-sm mt-6 border-separate">
            <thead class="bg-gray-700 text-gray-500 rounded-xl">
                <tr>
                    <th class="p-3 rounded-l-xl">No</th>
                    <th class="p-3">Id</th>
                    <th class="p-3">Name</th>
                    <th class="p-3">Price</th>
                    <th class="p-3">Quantity</th>
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
                            <td className="rounded-r-xl m-auto w-44 px-3">
                                <button className="bg-blue-200 px-5 py-2 rounded-lg mr-2">Edit</button>
                                <button className="bg-red-200 px-5 py-2 rounded-lg">Hapus</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Dasboard