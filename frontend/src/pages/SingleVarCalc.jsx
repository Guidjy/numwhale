import NumwhaleLayout from "../layouts/NumwhaleLayout";
import Calculator from "../components/Calculator";
import { Dropdown, DropDownItem } from "../components/Dropdown";


export default function SingleVarCalc() {

  const DropDownItems = (
    <>
      <DropDownItem key={1} title={"Limit"} />
      <DropDownItem key={2} title={"Derivative"} />
      <DropDownItem key={3} title={"Integral"} />
    </>
  )

  return (
    <NumwhaleLayout title={"Single Variable"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Calculator />
        </div>
        <div>
          <Dropdown title={"Operation"} items={DropDownItems}/>
        </div>
      </div>
    </NumwhaleLayout>
  )
}