
import Link from "next/link"

function Navbar() {
    return (
        <div>
        <header>
        
        <nav className="flex w-full font-bold bg-red-500 h-10 items-center">Navabar
                
                    <div className="flex justify-end  w-full text-stone bg-black items-center">
                       <div> <Link  className="flex justify-center font-bold h-10 w-44 items-center bg-slate-400"href="/">Home</Link></div>
                        <div><Link className="flex justify-center font-bold bg-white, items-center bg-blue-800 h-10 w-44"href="/product">Product</Link></div>
                        <div><Link className="flex justify-center font-bold items-center bg-red-800 h-10 w-44 "href="/about">About</Link></div>
                        <div><Link className="flex justify-center font-bold items-center bg-sky-500 h-10 w-44"href="/contact">Contact Us</Link></div>
                        </div>
            </nav>
        </header>
        </div>
    )
}

export default Navbar
