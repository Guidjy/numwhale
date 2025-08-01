import Navbar from '../components/Navbar'
import { Dropdown, DropDownLink } from '../components/Dropdown';
import { Link } from 'react-router-dom';

export default function MainLayout({ children }) {
  
    const calculusItems = (
      <>
        <li>
          <DropDownLink key={11} title={"Single variable"} page={"calculus/single_variable"} />
        </li>
        <li>
          <DropDownLink key={11} title={"Multivariable"} page={"calculus/multivariable"} />
        </li>
      </>
    );
  
    const drawerItems = (
      <>
        <li>
          <Dropdown key={1} title={"Calculus"} items={calculusItems} />
        </li>
        <li>
          <Link className='w-full text-center block text-2xl' to="/linear_algebra">Linear Algebra</Link>
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