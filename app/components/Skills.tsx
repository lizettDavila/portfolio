const Skills = () => {
const skills = ['HTML5', 'CSS3', 'JS', 'TS', 'React', 'Next.js', 'Git', 'CI/CD'];
    return (
        <section className=" mx-6" id="skills">
            <h2 className="text-3xl font-bold tracking-tight pb-8 text-center text-(--color-title)">My Skills</h2>
            <div className="bg-[#2D3748] w-full p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
                    {skills.map(skill => (
                        <div className="flex flex-col items-center gap-2" key={skill}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-teal-500/20">
                                <span className="font-bold text-teal-300">{skill}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
