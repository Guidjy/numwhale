import MainLayout from "./MainLayout"


export default function NumwhaleLayout({ title, children }) {
  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col w-full md:w-10/12 lg:w-9/12 xl:w-8/12 items-center p-5">
          <h1 className="text-4xl font-bold mb-5">{title}</h1> 
          <main>{children}</main>
        </div>
      </div>
    </MainLayout>
  )   
}