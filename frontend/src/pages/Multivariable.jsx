import { useState } from "react";
import NumwhaleLayout from "../layouts/NumwhaleLayout";
import Calculator from "../components/Calculator";
import { Dropdown, DropDownItem } from "../components/Dropdown";


export default function MultiVarCalc() {

  const [operation, setOperation] = useState('limit');

  const DropDownItems = (
    <>
      <DropDownItem key={1} title={"Limit"} onClick={() => setOperation('limit')} />
      <DropDownItem key={2} title={"Derivative"} onClick={() => setOperation('derivative')} />
      <DropDownItem key={3} title={"Integral"} onClick={() => setOperation('integral')} />
    </>
  )

  return (
    <NumwhaleLayout title={"Multivariable"}>
      <div className="grid grid-cols-1">
        <div className="mb-5">
          <Calculator />
        </div>
        <div>
          <Dropdown 
          styles={"bg-base-200 hover:bg-base-300 p-1 rounded-lg"} 
          title={"Operation"} 
          items={DropDownItems}
          />
        </div>
      </div>
    </NumwhaleLayout>
  )
}