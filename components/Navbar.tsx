import Link from "next/link"
import Search from "./Search"

const Navbar = () => {
  return (
    <div className="md:flex md:pb-0 pb-5 bg-gradient-to-b from-slate-800 via-slate-800 via-80% to-transparent sticky top-0 block justify-between px-10 pt-5 z-50">
        <Link href={ '/' } className="text-white text-2xl md:mb-0 mb-3">Anima</Link>
        <Search />
        <div></div>
    </div>
  )
}

export default Navbar