import { React } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { authLogin } from "../../service/auth";
const validationSchema = yup.object().shape({
    email: yup.string().email().required("Email salah"),
    password: yup.string().min(8).required(),
});

const Login = ({ setCurrentContainer, setUsername }) => {
    const handleLogin = async (e) => {
        const { code, user, msg } = await authLogin(formik.values);
        if (code === 200) {
            sessionStorage.setItem("logged", true);
            sessionStorage.setItem("username", user)
            window.location = '/flexshop'
            console.log(msg);;
        } else {
            console.log(msg);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: () => handleLogin(),
    });

    return (
        <>
            <div className="w-96 h-auto bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center items-center gap-5">
                <div className="text-center mb-5">
                    <h2 className="font-roboto font-semibold text-2xl mb-1">Welcome Back</h2>
                    <p className="text-gray-500">Enter your credentials to access your account.</p>
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full flex flex-col justify-center items-center gap-5">
                    {
                        Object.keys(formik.initialValues).map((key) => (
                            <div className="w-full">
                                <input
                                    className="w-full border p-3 rounded-xl border-blue-100 focus:outline-none"
                                    type={key}
                                    id={key}
                                    name={key}
                                    placeholder={`Enter your ${key}`}
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
                    <div className="w-full flex justify-end">
                        <a className="text-gray-500 cursor-pointer">
                            Lupa Password
                        </a>
                    </div>
                    <button
                        className="bg-blue-100 w-full py-3 rounded-2xl font-roboto font-semibold tracking-wider text-gray-800 hover:shadow-lg motion-safe:hover:scale-105 duration-500"
                        type="submit"
                    >
                        LOGIN
                    </button>
                </form>
                <a className="text-gray-500 cursor-pointer" onClick={() => setCurrentContainer(true)}>
                    I Don't Have an Account
                </a>
            </div>
        </>
    )
}

export default Login