import { React, useState } from "react";

const DeleteAccount = ({ setOpenDeleteAccount }) => {
  return (
    <>
      <div className="fixed w-screen h-screen bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center backdrop-blur-sm duration-500 top-0 z-50">
        <div className="w-96 text-right translate-y-12 sm:translate-y-8 sm:translate-x-5">
          <button
            onClick={() => {
              setOpenDeleteAccount(false);
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
            <h2 className="font-roboto font-semibold text-xl mb-1">
              Yakin ingin menghapus akun?
            </h2>
            <p className="text-gray-600 mt-5">
              Jika memilih 'ya' tidak akan bisa kembali
            </p>
            <div className="flex gap-3 mt-10">
              <button className="w-1/2 bg-gray-200 py-3 rounded-lg font-semibold motion-safe:hover:scale-110 hover:shadow-md duration-500">
                Ya, Hapus
              </button>
              <button
                className="w-1/2 bg-red-200 py-3 rounded-lg font-semibold motion-safe:hover:scale-110 hover:shadow-md duration-500"
                onClick={() => {
                  setOpenDeleteAccount(false);
                }}
              >
                Tidak!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
