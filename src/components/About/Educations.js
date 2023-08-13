import { educationData } from "@/data/educationData";
import Exp from "./Exp";

const Educations = () => {
  let educationContent = <p>No Experience Found. Please add a new one!</p>
  if (educationData.length> 0) {
    educationContent = educationData.map(exp => {
      return (
        <Exp key={exp.id} exp={exp} />
      )
    });
  }

  return (
    <div className="bg-black/50 border border-sky-950 p-6 rounded-lg mt-6">
      <h3 className="w-fit mb-6 mx-auto text-lg font-bold text-orange-500 py-2 border-b-2 border-sky-400">Educations</h3>
      <ul className="flex flex-col md:flex-row gap-6 justify-between list-none flex-wrap">
        {educationContent}
      </ul>
    </div>
  )
}

export default Educations;