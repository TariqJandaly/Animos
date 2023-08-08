import Search from "./Search"

const Navbar = () => {
  return (
    <div className="md:flex block justify-between">
        <h1 className="text-white text-2xl md:mb-0 mb-3">Anima</h1>
        <Search />
        <div></div>
    </div>
  )
}

export default Navbar