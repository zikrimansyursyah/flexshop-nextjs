import { React, useState, useEffect } from "react";
import { createProducts } from "../../service/product";
import AlertModal from "./alertModal";

const initialFormValue = {
  id: Math.floor(Math.random() * Date.now()),
  name: "",
  price: 0,
  stock: 0,
  category: "",
};

const CreateModal = ({ setOpenCreateModal, data, setData }) => {
  const [form, setForm] = useState(initialFormValue);
  const [OpenAlertModal, setOpenAlertModal] = useState(false);

  const handleSubmit = async (e) => {
    const { code, msg, products } = await createProducts(data, form);
    if (code === 200) {
      setOpenAlertModal(true);
      setData(products);
    } else {
      alert(msg);
    }
  };

  return (
    <>
      <div className="fixed w-screen h-screen bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center backdrop-blur-sm duration-500 top-0 left-0 z-40">
        <div className="w-96 text-right translate-y-12 sm:translate-y-8 sm:translate-x-5">
          <button
            onClick={() => {
              setOpenCreateModal(false);
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
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="w-96 h-auto bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center items-center gap-5">
          <div className="text-center mb-5">
            <h2 className="font-roboto font-semibold text-2xl mb-1">
              Add Item
            </h2>
          </div>
          <form
            action={handleSubmit}
            method="post"
            className="w-full flex flex-col justify-center items-start gap-5"
          >
            <input
              className="w-full border p-3 rounded-xl border-blue-100 focus:outline-none"
              type="text"
              placeholder="Nama"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
            />
            <div className="w-full">
              <label className="ml-1 text-gray-600">Price :</label>
              <input
                className="w-full border p-3 rounded-xl border-blue-100 focus:outline-none"
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="w-full">
              <label className="ml-1 text-gray-600">Stock</label>
              <input
                className="w-full border p-3 rounded-xl border-blue-100 focus:outline-none"
                type="number"
                placeholder="Stock"
                value={form.stock}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    stock: e.target.value,
                  }))
                }
                required
              />
            </div>
            <input
              className="w-full border p-3 mt-2 rounded-xl border-blue-100 focus:outline-none"
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              required
            />
            <button
              className="bg-blue-100 w-full py-3 rounded-2xl font-roboto font-semibold tracking-wider text-gray-800 hover:shadow-lg motion-safe:hover:scale-105 duration-500"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Simpan
            </button>
          </form>
          <button
            className="bg-blue-100 w-full py-3 rounded-2xl font-roboto font-semibold tracking-wider text-gray-800 hover:shadow-lg motion-safe:hover:scale-105 duration-500"
            onClick={() => {
              console.log(form);
            }}
          >
            Cek
          </button>
        </div>
      </div>
      {OpenAlertModal ? (
        <AlertModal
          setOpenAlertModal={setOpenAlertModal}
          alert={"Add Item Sukses"}
        />
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
};

export default CreateModal;
