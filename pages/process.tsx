import Image from 'next/image';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from '../components/Header';
import { FC } from 'react';
import { project_title } from "../constants/project_title";

const Process: FC = () => {
  return (
    <>
      <Header title={`Process of Implementation | ${project_title}`} description={"Here's how we're going to solve this issue!"} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image src={'/Obstacles.png'} fill alt="bgImage" className="w-full h-full object-cover object-center brightness-[30%] blur" />
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-white">
          <h1 className="text-[5vmax] font-bold z-10">
            Process of Implementation
          </h1>
          <h2 className="opacity-75 lg:text-[1.575vmax] text-[1rem] font-light mb-8">
            Navigating the Challenges of AI Advocacy
          </h2>
        </main>
        <h3 className="text-[1.5vmax] font-bold z-10 bottom-0 py-[10px] w-full flex items-center justify-center text-center animate-pulse">
          Scroll down for More Information
        </h3>
        <button onClick={() => window.location.replace(window.location.origin)}>
          <IoMdArrowRoundBack size={'5vmax'} color="white" className="z-10 absolute bottom-0 left-0 m-[20px] hover:opacity-50" />
        </button>
      </div>
      <div className="max-w-5xl mx-auto p-8 mt-8 rounded-md shadow-md text-white">
        <main className="flex flex-col lg:items-start lg:justify-start items-center justify-center flex-1 px-20 text-start">
          <p className="text-lg mb-4">
            In the advocacy of this campaign, potential stumbling blocks and obstacles arise from the <strong className="text-yellow-400">untested nature of AI development</strong>. While some companies and initiatives acknowledge the dangers, many aspects of AI remain uncharted territory in terms of research and development. The <strong className="text-blue-400">ever-evolving landscape of cyber threats</strong> adds another layer of complexity, with cybercriminals constantly adapting to new technologies.
          </p>
          <p className="text-lg mb-4">
            The lack of knowledge about artificial intelligence brings forth multiple concerns about the <strong className="text-purple-400">future of technology and its relationship to humans</strong>. From ethical concerns surrounding data privacy to the potential misuse of AI in various domains, addressing these issues requires a <strong className="text-orange-400">collective and proactive effort</strong>. Cybersecurity, a prevalent aspect of AI advocacy, is crucial for the safety of those on the internet, as the systems that can potentially endanger us on the internet are <strong className='text-blue-400'>the same systems that can aid us</strong> in reducing the risk as well.
          </p>
          <p className="text-lg">
            Distinguishing genuine concerns from <strong className="text-red-400">AI fearmongering</strong> is crucial, as some news may not represent new evidence concerning the development of artificial intelligence. Navigating these complexities necessitates a comprehensive approach involving ongoing research, collaboration, and <strong className="text-green-400">public awareness</strong>. Through initiatives that shed light on the intricacies of AI and scams, we empower individuals to navigate the digital landscape vigilantly and contribute to a safer, more informed technological future.
          </p>
        </main>
      </div>
    </>
  );
};

export default Process;
