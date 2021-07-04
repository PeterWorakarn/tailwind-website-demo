import React, { useState } from 'react'
// https://codesandbox.io/s/vmwxjnv433?file=/src/index.js
export default function PhoneBook() {
    const [userFirstname, setuserFirstname] = useState('');
    const [userLastname, setuserLastname] = useState('');
    const [userPhone, setuserPhone] = useState('');
    const [info, setInfo] = useState([])
    const formSubmit = () => {
        console.log("hello world")
        setInfo([...info, { firstname: userFirstname, lastname: userLastname, phone: userPhone }])
        setuserFirstname('')
        setuserLastname('')
        setuserPhone('')

    }

    return (
        <div className="py-5 w-full min-h-screen bg-gray-100">
            <div className="container w-full max-w-5xl mx-auto flex gap-5">
                <div className="w-1/4 bg-white shadow rounded px-4 py-2">
                    <h1 className="font-bold text-2xl">Phone book</h1>
                    <form onSubmit={e => { e.preventDefault() }}>
                        <label className="block text-md font-medium text-gray-700 mt-3">Firstname</label>
                        <input className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border border-gray-300 rounded-md" value={userFirstname} onChange={(e) => { setuserFirstname(e.target.value) }} type="text" />
                        <label className="block text-md font-medium text-gray-700 mt-3">Lastname</label>
                        <input className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border border-gray-300 rounded-md" value={userLastname} onChange={(e) => { setuserLastname(e.target.value) }} type="text" />
                        <label className="block text-md font-medium text-gray-700 mt-3">Phone</label>
                        <input inputMode="tel" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border border-gray-300 rounded-md" value={userPhone} onChange={(e) => { setuserPhone(e.target.value) }} type="text" />
                        <input className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => formSubmit()} type="submit" />
                    </form>
                </div>
                <main className="my-12 md:my-0 w-3/4">
                    <table className="min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" style={{ width: "100%" }}>
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Firstname</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lastname</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {info.length === 0 ? <tr className="w-full p-4 text-center"><td></td><td className="p-4 font-medium">Contact not found</td><td></td></tr> : null}
                            {info.sort((a, b) => {
                                return (
                                    (a.lastname).localeCompare(b.lastname)
                                )
                            }).map((each) => {
                                return (
                                    <tr key={each.phone}>
                                        <td className="px-6 py-4 whitespace-nowrap">{each.firstname}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{each.lastname}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{each.phone}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}
