import React from "react";
import desktop from "../assets/desktop.webp"

const Technology = () => {
    return (
        <>
            <div className="container mx-auto overflow-hidden pb-20" id="about">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <i className="fas fa-sitemap text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            Elevating Business Through Technology
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                            Whether you’re a budding startup or an established enterprise, our tailored solutions are designed to elevate your business in the digital space.
                        </p>
                        <div className="block pb-6">
                            <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-slate-700 uppercase last:mr-0 mr-2 mt-2">
                                Web Solutions
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-slate-700  last:mr-0 mr-2 mt-2">
                                Frontend Development
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-slate-700 last:mr-0 mr-2 mt-2">
                                Customize Web or Mobile Application
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-slate-700 last:mr-0 mr-2 mt-2">
                                Shopping
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-slate-700 last:mr-0 mr-2 mt-2">
                                Content Management System
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-slate-700  last:mr-0 mr-2 mt-2">
                                ERP
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                            <img
                                alt="images"
                                src={desktop}
                                className=""
                            />
                    </div>
                    <div className="inset-0 absolute blur-[120px] left-[85%] top-[260%] max-w-xs h-[357px] sm:max-w-md md:max-w-lg z-10" style={{ background: "linear-gradient(16.89deg, rgba(47, 56, 246, 0.537) 15.73%, rgba(240, 62, 225, 0.29) 50.74%, rgba(213, 6, 221, 0.259) 56.49%)" }}></div>
                </div>
            </div>
        </>
    );
};

export default Technology;
