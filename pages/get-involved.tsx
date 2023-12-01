import Image from 'next/image';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from '../components/Header';
import { FC } from 'react';
import { project_title } from "../constants/project_title";

const GetInvolved: FC = () => {
  return <>
    <Header title={`Get Involved | ${project_title}`} description={"Here's how you can get involved!"} />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src={'/Protester_Pic.jpg'} fill alt="bgImage" className="w-full h-full object-cover object-center brightness-[30%] blur" />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className={`text-[5vmax] font-bold z-10`}>
          Get Involved
        </h1>
        <h2 className='opacity-75 lg:text-[1.575vmax] text-[1rem] font-light'>
          Here&apos;s how you can get involved in the fight against AI-powered scams
        </h2>
      </main>
      <h3 className="text-[1.5vmax] font-bold z-10 bottom-0 py-[10px] w-full flex items-center justify-center text-center animate-pulse">
        Scroll down for more information!
      </h3>
      <button onClick={() => window.location.replace(window.location.origin)}><IoMdArrowRoundBack size={'5vmax'} color="white" className="z-10 absolute bottom-0 left-0 m-[20px] hover:opacity-50" /></button>
    </div>
    <div className="max-w-5xl mx-auto p-8 mt-8 rounded-md shadow-md text-white">
      <main className="flex flex-col lg:items-start lg:justify-start items-center justify-center flex-1 px-20 text-start">
        <div className="section mb-12 text-white">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Initiatives Raising Awareness:</h2>
          <p className="text-lg mb-2">
            Embark on a captivating exploration into initiatives that serve as beacons, shedding light on the intricate landscape of <strong className="text-yellow-400">Artificial Intelligence (AI)</strong> and the omnipresent threat of <strong className="text-yellow-400">scams</strong>. The journey unfolds with <strong className="text-yellow-400">StaySafeOnline,</strong> a bastion of online safety, offering dynamic campaigns to educate individuals and businesses. As you navigate through the profound implications of AI, the <strong className="text-yellow-400">Electronic Frontier Foundation (EFF)</strong> takes center stage, raising awareness about its transformative yet complex presence in online technology.

          </p>
          <p className="text-lg mb-2">
            Transition into ethical considerations with the <strong className="text-yellow-400">Center for Humane Technology,</strong> an advocate for responsible tech use. Engaging in initiatives that spotlight potential negative impacts of AI on society, it prompts introspection on the ethical use of technology. Continue your exploration with <strong className="text-yellow-400">Fraud.org,</strong> an educational force unraveling the complexities of fraud, including scams orchestrated by AI.
          </p>
          <p className="text-lg">
            These initiatives collectively form a tapestry of awareness, empowering individuals to navigate the digital landscape vigilantly. Join us in understanding, supporting, and contributing to these impactful endeavors for a safer, more informed technological future.
          </p>
        </div>

        <div className="section mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Organizations Implementing AI for Cybersecurity:</h2>
          <p className="text-lg mb-2">
            Transition into ethical considerations with the Center for Humane Technology, an advocate for responsible tech use. Engaging in initiatives that spotlight potential negative impacts of AI on society, it prompts introspection on the ethical use of technology. Continue your exploration with Fraud.org, an educational force unraveling the complexities of fraud, including scams orchestrated by AI.
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong className="text-yellow-400">Google:</strong> Uses AI and machine learning to improve the security of its services. Google’s cybersecurity efforts protect users from phishing and other online scams.
            </li>
            <li className="mb-2">
              <strong className="text-yellow-400">Microsoft:</strong> Invests heavily in AI research to enhance cybersecurity. One major tool they created was Microsoft Defender against threats.
            </li>
            <li>
              <strong className="text-yellow-400">CrowdStrike:</strong> Leverages AI and machine learning to provide endpoint protection and threat intelligence.
            </li>
          </ul>
        </div>
      </main>
    </div>
  </>
};

export default GetInvolved;
