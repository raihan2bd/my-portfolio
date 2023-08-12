import { mySkills } from "@/deta/skills";
import Image from "next/image";

const Skills = () => {
  const skillsContent = mySkills.map(skill => {
    return (
      <div key={skill.id} className="mb-6">
      <h4 className="font-bold border-b py-3 text-sky-500">{ skill.title }</h4>
      <ul className="p-4 flex flex-row flex-wrap gap-3">
        {skill.skills.map(item => (
          <li key={item.id} className="flex gap-1 border border-sky-950 rounded text-sm items-center">
          {item.image && <Image
            className="rounded p-1"
            src={item.image}
            width={32}
            height={32}
          />}
          <span className="bg-sky-950 block px-2 py-1 h-full">{item.title}</span>
        </li>
        ))}
      </ul>
      </div>
    )
  })

  return (
    <>
     {skillsContent}
    </>
  );
};

export default Skills;
