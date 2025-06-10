export default function Calculator() {
  return (
    <>
      <div className="flex flex-col items-center bg-base-200 p-2 rounded-xl w-full md:w-10/12 ">
        <textarea className="textarea resize-none w-full text-xl pt-9" placeholder="X²"></textarea>
        <div className="flex w-full">
        </div>
      </div>
      <div className="flex w-full md:w-10/12">
        <p className="text-xs font-extralight">User the buttons above or pythonically write your expression</p>
      </div>
    </>
  )
}