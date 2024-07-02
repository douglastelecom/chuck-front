export default function Header(): any {
    return (
        <header className="bg-orangeheader text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="hover:text-gray-800 text-2xl font-bold">
                        Chuck Norris
                    </a>
                <nav>
                    {/* <a href="/jokes" className="hover:text-gray-800 mr-4">
                        Piadas
                    </a> */}
                    {/* <a href="/about" className="hover:text-gray-800 mr-4">
                        Sobre
                    </a> */}
                </nav>
            </div>
        </header>
    )
}
