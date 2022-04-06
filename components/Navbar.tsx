import Link from "next/link"

const Navbar = () => {
    return (
        <div className="fixed top-0 grid grid-cols-7 w-full px-4 py-2 bg-white shadow-md z-10">
            <div className="col-span-2">
                <Link href="/">
                    <a className="inline-flex flex-row items-center h-full gap-x-3">
                        <img className="h-10" src="IB.png" alt="IB Logo" />
                        <h1 className="text-lg font-bold">
                            CAS
                        </h1>
                    </a>
                </Link>
            </div>
            <div className="col-span-3 flex flex-row items-center h-full">
            </div>
            <div className="col-span-2 flex flex-row justify-end items-center gap-x-3">
                <h1 className="text-lg font-bold">
                    Colonel By
                </h1>
                <img className="h-10" src="CB logo.png" alt="Colonel By Logo" />
            </div>
        </div>
    );
}

export default Navbar;