import Navbar from '../components/Navbar'
import { Dropdown, DropdownItem } from '../components/Dropdown';

export default function MainLayout({ children }) {
  
  const singleVariableItems = (
    <>
      <li>
        <DropdownItem key={111} title={"Limit"} page={"calculus/single_variable/limit"} />
      </li>
      <li>
        <DropdownItem key={112} title={"Derivative"} page={"calculus/single_variable/derivative"} />
      </li>
      <li>
        <DropdownItem key={113} title={"Integral"} page={"calculus/single_variable/integral"} />
      </li>
    </>
  );
  
    const MultiVariableItems = (
      <>
        <li>
          <DropdownItem key={121} title={"Limit"} page={"calculus/multivariable/limit"} />
        </li>
        <li>
          <DropdownItem key={122} title={"Derivative"} page={"calculus/multivariable/derivative"} />
        </li>
        <li>
          <DropdownItem key={123} title={"Integral"} page={"calculus/multivariable/integral"} />
        </li>
      </>
    );
  
    const calculusItems = (
      <>
        <li>
          <Dropdown key={11} title={"Single variable"} items={singleVariableItems}  />
        </li>
        <li>
          <Dropdown key={12} title={"Multivariable"} items={MultiVariableItems} />
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