import ThemeController from "./ThemeController"

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        {/* drawer button */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
          </button>
        </div>
        {/* nav links */}
        <NavItem content={"Numwhale"} />
        <NavItem content={"Plotting"} />
        <NavItem content={"Ai Whale"} />
        {/* theme controller */}
        <div className="flex-1">
          <ThemeController />
        </div>
      </div>
    </>
  )
}


function NavItem({content}) {
  return (
    <>
      <div className="flex">
        <a className="btn btn-ghost text-xl">{content}</a>
      </div>
    </>
  )
}