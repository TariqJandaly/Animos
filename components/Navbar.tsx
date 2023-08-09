import Link from "next/link"
import Search from "./Search"

const Navbar = () => {
  return (
    <div className="md:flex block justify-between">
        <Link href={ '/' } className="text-white text-2xl md:mb-0 mb-3">Anima</Link>
        <Search />
        <div></div>
    </div>
  )
}

export default Navbar