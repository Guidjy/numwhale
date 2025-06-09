import { Link } from 'react-router-dom'
import Drawer from "./Drawer"

export default function Navbar({ drawerItems }) {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-3">
        {/* drawer button */}
        <div className="flex-none">
          <Drawer drawerItems={drawerItems} />
        </div>
        {/* nav links */}
        <NavItem page="" content={"Numwhale"} />
        <NavItem page="plotting" content={"Plotting"} />
        <NavItem page="" content={"Ai Whale"} />
        {/* profile page */}
        <div className="flex flex-1 justify-end">
          <Link to="/profile" className='hover:bg-base-200 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}


function NavItem({page, content}) {
  return (
    <>
      <div className="flex">
        <Link to={`/${page}`}  className="btn btn-ghost text-xl border-0 rounded-3xl hover:bg-base-200">{content}</Link>
      </div>
    </>
  )
}