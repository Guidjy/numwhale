import MainLayout from "../layouts/MainLayout";
import numwhaleImage from '../assets/numwhale.png';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex justify-center p-5">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 flex flex-col items-center">
          <h1 className="text-5xl font-bold">Numwhale</h1>
          <h2 className="font-light">The all-in-one <b>math tool</b> for <b>Computer Science</b> and <b>Engineering students</b></h2>
          <img src={numwhaleImage} className="w-4/6" />
        </div>
      </div>
    </MainLayout>
  )
}