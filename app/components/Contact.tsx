import { useRef } from "react";
import { ScrollObserver } from "../hooks/ScrollObserver";



const Contact = () => {
    const sectionRef = useRef(null);
    ScrollObserver({ refElement: sectionRef, name: 'link-contact' })
    
    return (
        <section ref={sectionRef} id="contact" className="py-8 md:py-24 px-2" >
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight pb-8 text-(--color-title)">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400">I'm currently open to new opportunities. Feel free to send me a message!</p>
                <p className="text-gray-600 dark:text-gray-400 mb-8 ">If you want to contact me, please, send me an email to: <strong className="font-bold">lizett.enriquez0911@outlook.com</strong> </p>
            </div>
        </section>
    )
}

export default Contact
