import { React, useState } from "react";
import { createProducts } from "../../service/product";

const initialFormValue = {
    id: Math.random() * Date.now(),
    name: "",
    price: 0,
    stock: 0,
    category: ""
}

const Register = ({ setCurrentContainer }) => {


    return (
        <div className="w-96 h-auto bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center items-center gap-5">
            <div className="text-center mb-5">
                <h2 className="font-roboto font-semibold text-2xl mb-1">Lets Started!</h2>
                <p className="text-gray-500 ">Get cool stuff and be hype with us</p>
            </div>
            <form onSubmit={formik.handleSubmit} className="w-full flex flex-col justify-center items-center gap-5">
                {
                    Object.keys(formik.initialValues).map((key) => (
                        <div className="w-full">
                            <input
                                className="w-full border p-3 rounded-xl border-blue-100 focus:outline-none"
                                type={key === "password" || key === "Confirm password" ? "password" : "text"}
                                id={key}
                                name={key}
                                placeholder={key}
                                onChange={formik.handleChange}
                                invalid={formik.touched[key] && Boolean(formik.errors[key])}
                                required
                            />
                            {
                                formik.touched[key] && Boolean(formik.errors[key]) &&
                                <span className="text-xs pl-2 text-red-600">{formik.errors[key]}</span>
                            }
                        </div>

                    ))
                }
                <button className="bg-blue-100 w-full py-3 rounded-2xl font-roboto font-semibold tracking-wider text-gray-800 hover:shadow-lg motion-safe:hover:scale-105 duration-500 mt-10">
                    SIGN UP
                </button>
                <a className="text-gray-500 cursor-pointer" onClick={() => setCurrentContainer(false)}>
                    I Have an Account
                </a>
            </form>
        </div>
    )
}

export default Register