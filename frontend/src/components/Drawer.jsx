import { Link } from 'react-router-dom'
import ThemeController from "./ThemeController"

export default function Drawer({ drawerItems }) {

  const tempDrawerItem = [
    {id: 1, name: "item 1", page: ""},
    {id: 2, name: "item 2", page: "plotting"}
  ];

  return(
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">

        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn drawer-button bg-neutral-content hover:bg-base-200 border-2" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> 
          </svg>
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        {/* side bar div */}
        <div className="min-h-full bg-base-200 flex flex-col">
          <ul className="menu bg-base-200 text-base-content w-80 p-4">
            {/* Sidebar content here */}
            {tempDrawerItem.map((item) => (
              <DrawerItem key={item.id} page={item.page} content={item.name} />
            ))}
          </ul>
          {/* theme controller */}
          <div className="flex flex-1 h-full justify-end items-end">
            <div className="mr-3 mb-3">
              <ThemeController />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


function DrawerItem({page, content}){
  return (
    <>
      <li>
        <Link to={`/${page}`} className="btn btn-ghost text-xl border-0 rounded-3xl hover:bg-base-300">{content}</Link>
      </li>
    </>
  )
}