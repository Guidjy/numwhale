export function Dropdown({ title, page, items }) {
  return (
    <>
      <div className="dropdown dropdown-bottom md:dropdown-right md:dropdown-center">
        {/* parent item form which the dropdown items appear */}
        <div tabIndex={0} role="button" className="btn m-1 w-full">
          {title}
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {items}
        </ul>
      </div>
    </>
  )
}


export function DropdownItem({ component }) {
  return (
    <li>{component}</li>
  )
}