import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import firebaseApp from '../util/firebase'
import thankyou from '../assets/img/thankyou.svg'
import { HiExclamation } from "react-icons/hi"

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false)
    const submitHandler = (data) => {
        setSuccess(false)

        // firebase function
        const contactRef = firebaseApp.database().ref("contact")
        const contact = {
            email: data.email,
            message: data.message,
            datetime: new Date()
        }
        contactRef.push(contact)

        reset({ email: '', message: '' })
        setSuccess(true)
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9564069851085!2d100.49313081436057!3d13.721089101702315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298f1dafa9a2d%3A0xd05c6b9bfdb75b47!2sWongwian%20Yai!5e0!3m2!1sen!2sth!4v1624731446248!5m2!1sen!2sth" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}></iframe>
            </div>
            <form onSubmit={handleSubmit(submitHandler)} className="container px-5 py-24 mx-auto flex">
                <div style={{minHeight:"60vh"}} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    {success ?
                        <div>
                            <img src={thankyou} alt="thank you for contact us" />
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Thank you for getting in touch!</h2>
                            <p>One of our colleagues will get back in touch with you soon!</p>
                        </div>
                        :
                        <div >
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                            <div className="relative mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    {errors.email?.type === 'pattern' && <HiExclamation className="text-yellow-500" title="invalid email" />}
                                </div>
                                <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i })}
                                    defaultValue={"test@gmail.com"}
                                    inputMode="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    {errors.message?.type === 'minLength' && <HiExclamation className="text-yellow-500" title="too short message" />}
                                </div>
                                <textarea {...register("message", { required: true, minLength: 10 })}
                                    defaultValue={"Hello world"}
                                    id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                        </div>
                    }
                </div>
            </form>
        </section>
    )
}
