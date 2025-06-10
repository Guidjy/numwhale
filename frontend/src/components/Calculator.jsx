export default function Calculator() {
  return (
    <>
      <div className="flex flex-col items-center bg-base-200 p-2 rounded-xl w-full md:w-10/12 ">
        {/*textarea*/}
        <textarea className="textarea resize-none w-full text-xl pt-9" placeholder="X²"></textarea>
        
        {/*Buttons*/}
        <div className="flex">
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
              <div><CalculatorButton symbol={" "} /></div>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-1">
              <div><CalculatorButton symbol={"x"} /></div>
              <div><CalculatorButton symbol={"y"} /></div>
              <div><CalculatorButton symbol={"π"} /></div>
              <div><CalculatorButton symbol={"θ"} /></div>
              <div><CalculatorButton symbol={"e"} /></div>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-1">
              <div><CalculatorButton symbol={"x"} /></div>
              <div><CalculatorButton symbol={"y"} /></div>
              <div><CalculatorButton symbol={"π"} /></div>
              <div><CalculatorButton symbol={"θ"} /></div>
              <div><CalculatorButton symbol={"e"} /></div>
            </div>
          </div>

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
              <div><CalculatorButton symbol={"+"} /></div>
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
        <p className="text-xs font-extralight">User the buttons above or pythonically write your expression</p>
      </div>
    </>
  )
}


function CalculatorButton({ symbol }) {
  return (
    <button className="btn btn-accent w-11 md:w-12 lg:w-14 h-11 md:h-12 lg:h-14 text-lg">{ symbol }</button>
  )
}