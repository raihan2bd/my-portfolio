import Image from "next/image";

const Exp = ({ exp }) => {
  return (
    <li className="rounded-lg bg-sky-950/40 p-4 w-[100%] md:w-[48%] text-white/70 flex-grow flex flex-col justify-between">
      <div className="flex flex-row gap-3 items-start text-sm w-full">
        <Image src={exp.thumb} width={40} height={40} alt={exp.title} />
        <div className="w-full">
          <h3 className="text-sky-400 text-lg font-bold">{exp.title}</h3>
          <h4 className="text-sky-700">{exp.subTitle}</h4>
          <h5>{`${exp.startDate} - ${exp.endDate}`}</h5>
          {exp.location && <h5 className="text-right text-orange-500">{exp.location}</h5>}
        </div>
      </div>
      <ul className="list-disc list-inside md:ps-4">
        {exp.exp.map(item => (
          <li className="my-4">{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default Exp;
