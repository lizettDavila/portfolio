const Footer = () => {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t-2 border-amber-50  mt-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Frontend Developer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
