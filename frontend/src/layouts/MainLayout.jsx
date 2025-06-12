import Navbar from '../components/Navbar'
import { Dropdown, DropdownItem } from '../components/Dropdown';

export default function MainLayout({ children }) {
  
    const calculusItems = (
      <>
        <li>
          <DropdownItem key={11} title={"Single variable"} page={"calculus/single_variable"} />
        </li>
        <li>
          <DropdownItem key={11} title={"Multivariable"} page={"calculus/multivariable"} />
        </li>
      </>
    );
  
    const drawerItems = (
      <>
        <li>
          <Dropdown key={1} title={"Calculus"} items={calculusItems} />
        </li>
      </>
    );

  return (
    <>
      <Navbar drawerItems={drawerItems} />
      <main>{children}</main>
    </>
  )
}