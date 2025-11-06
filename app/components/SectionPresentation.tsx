import React from 'react'

const SectionPresentation = () => {
    return (

            <section id="home">
                <div className="grid lg:grid-cols-2 gap-10 items-center mt-20">
                    <div className="flex flex-col gap-6 text-center px-2 lg:pl-10">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl lg:text-6xl text-(--color-title) max-w-[430px] m-auto md:max-w-full">Frontend Developer</h1>
                            <h2 className="text-lg text-gray-600 dark:text-gray-400 max-w-[430px] m-auto md:max-w-full ">Passionate about building modern, responsive, and user-friendly web applications.</h2>
                        </div>
                        <div className="flex-wrap gap-3 flex justify-center md:justify-center ">
                            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-70 transition-opacity bg-sky-600" href="https://www.linkedin.com/in/lizettenriquez/" target="_blank" rel="noopener noreferrer">
                                <span className="truncate">LinkedIn</span>
                            </a>
                            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-teal-500 font-bold leading-normal tracking-[0.015em] hover:bg-teal-700 transition-colors" href="https://github.com/lizettDavila" target="_blank" rel="noopener noreferrer  ">
                                <span className="truncate text-(--color-title)">Go to my Github</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto md:max-w-none flex justify-center">
                        <div className="w-96 bg-center bg-no-repeat aspect-square bg-cover rounded-full" data-alt="professional headshot of John Doe" style={{ backgroundImage: 'url("/myPhoto.jpg")' }}></div>
                    </div>
                </div>
            </section>

    )
}

export default SectionPresentation
