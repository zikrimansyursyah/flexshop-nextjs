import { React, useState, useEffect } from "react";
import AlertModal from "../../modal/alertModal";
import Dasboard from "./dashboard";
import Home from "./home";

const Content = () => {
  const [Menu, setMenu] = useState("Home");
  const [Logged, setLogged] = useState(false);
  const [OpenAlertModal, setOpenAlertModal] = useState(false);
  const [Alert, setAlert] = useState(null);

  useEffect(() => {
    let isAuth = sessionStorage.getItem("logged");
    if (isAuth) setLogged(true);
  }, []);

  return (
    <>
      <div className="w-92vw ml-16 pt-32 duration-500 z-30">
        <div className="sidebar fixed w-2/12 h-screen bg-white">
          <div className="w-full flex flex-col justify-center items-center gap-5 p-5 pb-10 rounded-br-xl border-b border-r">
            <h1 className="text-3xl font-semibold">Flexshop.</h1>
            <div className="text-xl text-center">
              Get Anything you want <span>here!</span>
            </div>
          </div>
          <div className="w-full h-full pl-4 pt-10 pr-6 flex flex-col gap-4 border-r">
            <a
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100 ${
                Menu === "Home" ? "bg-blue-100" : ""
              }`}
              onClick={() => {
                setMenu("Home");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <p className=" font-semibold ">Home</p>
            </a>
            <a
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100 ${
                Menu === "Dashboard" ? "bg-blue-100" : ""
              }`}
              onClick={() => {
                if (Logged) {
                  setMenu("Dashboard");
                } else {
                  setAlert("Login First");
                  setOpenAlertModal(true);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className=" font-semibold ">Dashboard</p>
            </a>
            <a
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100`}
              onClick={() => {
                setAlert("This Page Is On Development");
                setOpenAlertModal(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <p className=" font-semibold ">Products</p>
            </a>
            <a
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100 focus:bg-blue-100`}
              onClick={() => {
                setAlert("This Page Is On Development");
                setOpenAlertModal(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className=" font-semibold ">Account</p>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="content w-10/12 ml-content mr-32 pr-16 flex flex-col gap-10">
          <div className="w-full h-85vh">
            {Menu === "Home" || Menu === "Products" || Menu === "Account" ? (
              <Home />
            ) : Menu === "Dashboard" ? (
              <Dasboard />
            ) : (
              <div className="hidden"></div>
            )}
            <div className="mt-20">.</div>
          </div>
        </div>
      </div>
      {OpenAlertModal ? (
        <AlertModal setOpenAlertModal={setOpenAlertModal} alert={Alert} />
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
};

export default Content;
