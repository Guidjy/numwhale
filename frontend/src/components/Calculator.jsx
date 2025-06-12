import { useState } from "react";


export default function Calculator() {

  const [shift, setShift] = useState(false);

  function changeShift() {
    if (shift) {
      setShift(false);
    } else {
      setShift(true);
    }
  }

  const fx = (
    <>
    {/*variables, f(x) and constants*/}
      <div className="mr-2">
        <div className="grid grid-cols-5 gap-1 mt-1">
          <div><CalculatorButton symbol={"x"} /></div>
          <div><CalculatorButton symbol={"y"} /></div>
          <div><CalculatorButton symbol={"π"} /></div>
          <div><CalculatorButton symbol={"θ"} /></div>
          <div><CalculatorButton symbol={"e"} /></div>
        </div>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <div><CalculatorButton symbol={"^²"} /></div>
          <div><CalculatorButton symbol={"^□"} /></div>
          <div><CalculatorButton symbol={"√"} /></div>
          <div><CalculatorButton symbol={"||"} /></div>
          <div><CalculatorButton symbol={"^-1"} /></div>
        </div>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <div><CalculatorButton symbol={"sin"} /></div>
          <div><CalculatorButton symbol={"cos"} /></div>
          <div><CalculatorButton symbol={"tan"} /></div>
          <div><CalculatorButton symbol={"log"} /></div>
          <div><CalculatorButton symbol={"ln"} /></div>
        </div>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <div><CalculatorButton symbol={"sinh"} /></div>
          <div><CalculatorButton symbol={"cosh"} /></div>
          <div><CalculatorButton symbol={"tanh"} /></div>
          <div><CalculatorButton symbol={"□√"} /></div>
          <div><CalculatorButton symbol={"shift"} onClick={changeShift}/></div>
        </div>
      </div>
    </>
  );

  const shiftFx = (
    <>
      {/*shift variables, f(x) and constants*/}
      <div className="mr-2">
        <div className="grid grid-cols-5 gap-1 mt-1">
          <div><CalculatorButton symbol={"x"} /></div>
          <div><CalculatorButton symbol={"y"} /></div>
          <div><CalculatorButton symbol={"π"} /></div>
          <div><CalculatorButton symbol={"θ"} /></div>
          <div><CalculatorButton symbol={"e"} /></div>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-1">
          <div><ShiftCalculatorButton symbol={"cossec"} /></div>
          <div><ShiftCalculatorButton symbol={"sec"} /></div>
          <div><ShiftCalculatorButton symbol={"cotan"} /></div>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-1">
          <div><ShiftCalculatorButton symbol={"arcsin"} /></div>
          <div><ShiftCalculatorButton symbol={"arccos"} /></div>
          <div><ShiftCalculatorButton symbol={"arctan"} /></div>
        </div>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <div><CalculatorButton symbol={"sinh"} /></div>
          <div><CalculatorButton symbol={"cosh"} /></div>
          <div><CalculatorButton symbol={"tanh"} /></div>
          <div><CalculatorButton symbol={"□√"} /></div>
          <div><CalculatorButton symbol={"shift"} onClick={changeShift}/></div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="flex flex-col items-center bg-base-200 p-2 rounded-xl w-full">
        {/*textarea*/}
        <textarea className="textarea resize-none w-full text-xl pt-9 mb-3" placeholder="X²"></textarea>
        
        {/*Buttons*/}
        <div className="flex">
          {shift ? shiftFx : fx}
          {/*numbers and operators*/}
          <div className="ml-2">
            <div className="grid grid-cols-5 gap-1 mt-1">
              <div><CalculatorButton symbol={"7"} /></div>
              <div><CalculatorButton symbol={"8"} /></div>
              <div><CalculatorButton symbol={"9"} /></div>
              <div><CalculatorButton symbol={"×"} /></div>
              <div><CalculatorButton symbol={"÷"} /></div>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-1">
              <div><CalculatorButton symbol={"4"} /></div>
              <div><CalculatorButton symbol={"5"} /></div>
              <div><CalculatorButton symbol={"6"} /></div>
              <div><CalculatorButton symbol={"+"} /></div>
              <div><CalculatorButton symbol={"-"} /></div>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-1">
              <div><CalculatorButton symbol={"1"} /></div>
              <div><CalculatorButton symbol={"2"} /></div>
              <div><CalculatorButton symbol={"3"} /></div>
              <div><CalculatorButton symbol={"="} /></div>
              <div><CalculatorButton symbol={"⌫"} /></div>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-1">
              <div><CalculatorButton symbol={"0"} /></div>
              <div><CalculatorButton symbol={"."} /></div>
              <div><CalculatorButton symbol={"("} /></div>
              <div><CalculatorButton symbol={")"} /></div>
              <div><CalculatorButton symbol={"↵"} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-10/12">
        <p className="text-xs font-extralight">User the buttons on screen or pythonically write your expression</p>
      </div>
    </>
  )
}


function CalculatorButton({ symbol, onClick }) {
  return (
    <button onClick={onClick} className="btn btn-accent w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-lg">{ symbol }</button>
  )
}


function ShiftCalculatorButton({ symbol, onClick }) {
  return (
    <button onClick={onClick} className="btn btn-accent w-18 md:w-19 lg:w-21 h-10 md:h-11 lg:h-12 text-lg">{ symbol }</button>
  )
}