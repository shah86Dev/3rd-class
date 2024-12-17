import Link from "next/link"


function Footer() {
    return (
            <div>
        <div className="flex justify-center focus-within:bg-white w-full">
        
            <div className="flex justify-center end-auto bg-orange-500 w-full font-bold space-x-10">Made By<Link href="https://portal.governorsindh.com/home">Shah86Dev</Link> @ Copywrite Reserved</div>
            
        </div>
        </div>
    )
}

export default Footer
