import { useRef } from "react";
import { ScrollObserver } from "../hooks/ScrollObserver";



const Contact = () => {
    const sectionRef = useRef(null);
    ScrollObserver({ refElement: sectionRef, name: 'link-contact' })
    
    return (
        <section ref={sectionRef} id="contact" className="mt-16 mx-4 md:mx-0" >
            <div className="max-w-2xl mx-auto text-center bg-gray-700/30 rounded-md p-4">
                <h2 className="text-3xl font-bold tracking-tight pb-8 text-(--color-title)">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400">I'm currently open to new opportunities. Feel free to send me a message!</p>
                <p className="text-gray-600 dark:text-gray-400 mb-8 ">If you want to contact me, please, send me an email to: <strong className="font-bold text-teal-500/60">lizett.enriquez0911@outlook.com</strong> </p>
            </div>
        </section>
    )
}

export default Contact
