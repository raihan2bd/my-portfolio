import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialKit = () => (
  <div className="flex flex-col items-center gap-3">
    <h3 className="text-lg border-orange-500 border-b-2 w-fit text-sky-400">
      Let&apos;s Connect
    </h3>
    <ul className="flex flex-row gap-3 mt-2 text-xl">
      <li>
        <a
          className="rounded-[50%] p-2 border-sky-500 border block hover:bg-sky-900 hover:animate-rotate" target="_blank"
          href="https://github.com/raihan2bd"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          className="rounded-[50%] p-2 border-sky-500 border block hover:bg-sky-900 hover:animate-rotate" target="_blank"
          href="https://www.linkedin.com/in/raihan2bd"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          className="rounded-[50%] p-2 border-sky-500 border block hover:bg-sky-900 hover:animate-rotate" target="_blank"
          href="https://twitter.com/raihan2bd"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          className="rounded-[50%] p-2 border-sky-500 border block hover:bg-sky-900 hover:animate-rotate" target="_blank"
          href="https://www.facebook.com/raihan2bd/"
        >
          <FaFacebook />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialKit;
