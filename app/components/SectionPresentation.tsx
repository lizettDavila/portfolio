import Link from 'next/link';
import '../../app/globals.css';

const SectionPresentation = () => {
    return (
            <section id="home">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">
                    <div className="flex flex-col gap-6 text-center px-2 lg:pl-10">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl lg:text-6xl text-(--color-title) max-w-[430px] m-auto md:max-w-full">Frontend Developer</h1>
                            <h2 className="text-lg text-gray-600 dark:text-gray-400 max-w-[430px] m-auto md:max-w-full ">Passionate about building modern, responsive, and user-friendly web applications.</h2>
                        </div>
                        <div className="gap-3 flex justify-center  items-center ">
                            <Link className="link-base link-gradient-linkedin" href="https://www.linkedin.com/in/lizettenriquez/" target="_blank" rel="noopener noreferrer">
                                <span>LinkedIn</span>
                            </Link>
                            <Link className="link-base link-gradient-github" href="https://github.com/lizettDavila" target="_blank" rel="noopener noreferrer  ">
                                <span>Go to my Github</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto md:max-w-none flex justify-center px-2">
                        <div className="w-96 bg-center bg-no-repeat aspect-square bg-cover rounded-full" data-alt="professional headshot of Lizett Enríquez" style={{ backgroundImage: 'url("/myPhoto.jpg")' }}></div>
                    </div>
                </div>
            </section>

    )
}

export default SectionPresentation
