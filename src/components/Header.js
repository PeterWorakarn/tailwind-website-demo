import React, { useState } from 'react';
import {NavLink } from 'react-router-dom';

export default function Header() {
    const [navToggle, setNavToggle] = useState(false)

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <NavLink  to="/" className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </NavLink >

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex md:hidden">
                        <button onClick={() => setNavToggle(!navToggle)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="items-center md:flex">
                    <div className={`${navToggle ? "nav-open" : "nav-close"}`}>
                        <NavLink activeClassName="md:border-b-4 border-blue-500 text-indigo-500 dark:text-indigo-400" to="/blog" className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-3 pl-1 md:pl-0" >Blog</NavLink >
                        <NavLink activeClassName="md:border-b-4 border-blue-500 text-indigo-500 dark:text-indigo-400" to="/about" className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-3 pl-1 md:pl-0" >About</NavLink >
                        <NavLink activeClassName="md:border-b-4 border-blue-500 text-indigo-500 dark:text-indigo-400" to="/contact" className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-3 pl-1 md:pl-0" >Contact</NavLink >
                    </div>

                    <div className="flex justify-center md:block">

                    </div>
                </div>
            </div>
        </nav>
    )
}
