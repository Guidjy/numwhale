import { Link } from "react-router-dom"


export function Dropdown({ title, items, styles }) {
  return (
    <>
      <div className="dropdown dropdown-bottom md:dropdown-right">
        {/* parent item form which the dropdown items appear */}
        <div tabIndex={0} role="button" className={`w-full text-center text-2xl ${styles}`} >
          {title}
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {items}
        </ul>
      </div>
    </>
  )
}


export function DropDownLink({ title, page }) {
  return (
    <Link to={`/${page}`} className="w-full text-center">{title}</Link>
  )
}


export function DropDownItem({ title, onClick }) {
  return (
    <>
      <li>
        <div onClick={onClick}>{title}</div>
      </li>
    </>
  )
}