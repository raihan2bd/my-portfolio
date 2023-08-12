import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({title, image, description, tags, projectDemo, projectSource }) => {
  return (
    <li className="w-[400px] max-w-full border rounded-lg border-sky-950 p-4 flex flex-col gap-3 bg-black/50">
        <div className="">
          <Image
            className="rounded-lg min-h-[200px]"
            src={image}
            width={400}
            height={400}
            alt={title}
          />
        </div>
        <h3 className="text-center text-lime-500 text-3xl font-bold">{title}</h3>
        <ul className="list-none flex flex-wrap gap-2 text-sm">
          {tags.map(tag => (
            <li key={Date.now().toString(36) + Math.random().toString(36)} className="p-1 rounded bg-sky-900/40 text-slate-300 text-sm">{tag}</li>
          ) )}
        </ul>
        <p className="text-sm text-justify">
          {description}
        </p>
        <div className="flex flex-row justify-between mt-4 md:mt-auto">
          <Link
            className="block rounded bg-sky-800 text-sky-200 hover:bg-orange-500 hover:text-white text-sm px-4 py-2"
            href={projectDemo}
            target="_blank"
          >
            Project Demo
          </Link>
          <Link
            className="block rounded bg-sky-800 text-sky-200 hover:bg-orange-500 hover:text-white text-sm px-4 py-2"
            href={projectSource}
            target="_blank"
          >
            Project Source
          </Link>
        </div>
    </li>
  );
};

export default ProjectItem;
