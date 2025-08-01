// layout
import MainLayout from "../layouts/MainLayout";
// components
import AboutCard from "../components/AboutCard";
import { Dropdown, DropDownLink } from "../components/Dropdown";
// assets
import numwhaleImage from '../assets/numwhale.png';
import placeholderPlot from '../assets/placeholderPlot.webp';
import placeholderLinalg from '../assets/placeholderLinalg.webp'
import placeholderNumMeth from '../assets/placeholderNumMeth.png'
import placeholderAi from '../assets/placeholderAi.webp'

export default function Home() {

  return (
    <MainLayout >
      <div className="flex justify-center">
        <div className="w-full flex flex-col items-center">

          {/* Introduction */}
          <div id="introduction" className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 p-5 flex flex-col items-center">
            <h1 className="text-5xl font-bold">Numwhale</h1>
            <h2 className="font-light">The all-in-one <b>math tool</b> for <b>Computer Science</b> and <b>Engineering students</b></h2>
            <img src={numwhaleImage} className="w-4/6" />
          </div>

          {/* About */}
          <div id="about" className="bg-base-200 w-full p-5 flex flex-col items-center">
            <h2 className="text-lg text-success font-light mt-5">Explore the powerful mathematical computation abilities of Numwhale...</h2>
            <AboutCard 
              key={1}
              header={"Symbolic mathematics"}
              content={"yur"}
              contentPosition={"right"}
              image={placeholderLinalg} 
            />
            <AboutCard 
              key={2}
              header={"Numerical methods"}
              content={"yur"}
              contentPosition={"left"}
              image={placeholderNumMeth} 
            />
            <AboutCard 
              key={3}
              header={"Graph plotting"}
              content={"yur"}
              contentPosition={"right"}
              image={placeholderPlot} 
            />
            <AboutCard 
              key={4}
              header={"Ai powered problem solving"}
              content={"yur"}
              contentPosition={"left"}
              image={placeholderAi} 
            />
          </div>

        </div>
      </div>
    </MainLayout>
  )
}