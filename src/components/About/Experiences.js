import { experienceData } from "@/data/experienceData";
import Exp from "./Exp";

const Experiences = () => {
  let experienceContent = <p>No Experience Found. Please add a new one!</p>
  if (experienceData.length> 0) {
    experienceContent = experienceData.map(exp => {
      return (
        <Exp key={exp.id} exp={exp} />
      )
    });
  }

  return (
    <div className="bg-black/50 border border-sky-950 p-6 rounded-lg mt-6 md:mt-8">
      <h3 className="w-fit mb-6 mx-auto text-lg font-bold text-orange-500 py-2 border-b-2 border-sky-400">Experiences</h3>
      <ul className="flex flex-col md:flex-row gap-6 justify-between list-none flex-wrap">
        {experienceContent}
      </ul>
    </div>
  )
}

export default Experiences;