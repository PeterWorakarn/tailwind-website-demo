import React from 'react'
import { useSelector } from 'react-redux'

export default function GithubUser() {
    const github = useSelector(state => state.github)

    return (
        <div className="flex flex-col items-center">
            {github.isFetching ? <p className="block text-md font-medium text-gray-700 mt-3 text-center">Loading...</p> : null}
            {github.isError ? <p className="text-red-500 block text-md font-medium  mt-3 text-center">Not Found</p> : null}
            {Object.keys(github.userData).length > 0 ?
                <div className="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="w-1/3 bg-cover bg-gray-900"></div>
                    <div className="w-2/3 p-4 md:p-4">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Backpack</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
                        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
                            </svg>

                            <p class="px-2 text-sm">patterson@example.com</p>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    )
}
