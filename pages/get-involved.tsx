/* eslint-disable react/no-unescaped-entities */
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
        Scroll down for More Information
      </h3>
      <button onClick={() => window.location.replace(window.location.origin)}><IoMdArrowRoundBack size={'5vmax'} color="white" className="z-10 absolute bottom-0 left-0 m-[20px] hover:opacity-50" /></button>
    </div>
    <div className="max-w-5xl mx-auto p-8 mt-8 rounded-md shadow-md text-white">
      <main className="flex flex-col lg:items-start lg:justify-start items-center justify-center flex-1 px-20 text-start">
        <div className="section mb-12 text-white">
          <h2 className="text-3xl font-bold text-red-400 mb-4">How Can You Avoid AI Scams?</h2>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">Verify The Sources:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensure that you are dealing with reputable and well-known companies or platforms when using services that rely on AI.</li>
            <li>Check for official websites, reviews, and user feedback to gauge credibility.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-yellow-500">Be Skeptical of Unsolicited Communications:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Be cautious of unexpected emails, messages, or advertisements promoting any service.</li>
            <li>Avoid sharing unnecessary personal information online, especially in response to unsolicited requests.</li>
            <li>Avoid clicking on links or downloading attachments from unknown sources.</li>
            <li>Look out for signs of scams, such as poor grammar and spelling, generic email addresses, or requests for personal or financial information.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-yellow-500">Research the Technology:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Familiarize yourself with the basics of AI technology to better discern legitimate claims from exaggerated or false ones.</li>
            <li>Be wary of AI services that promise unrealistic outcomes or seem too good to be true.</li>
          </ul>

          <p className="mb-4">
            <strong>Ensure that your software, including antivirus and anti-malware programs, is up to date to protect against potential security threats.</strong>
          </p>

          <h2 className="text-2xl font-bold mb-4 text-yellow-500">And Finally, Educate Yourself!</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Stay informed about common AI scams and fraudulent schemes circulating on the internet.</li>
            <li>Regularly check reliable sources for updates on emerging scams and security best practices.</li>
          </ul>
        </div>

        <div className="section mb-12 text-white">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Initiatives Raising Awareness:</h2>
          <p className="text-lg mb-4">
            We recommend looking into initiatives that serve as beacons for learning, shedding light on the complex landscape of Artificial Intelligence (AI) and the resulting scams that come about its development. You can start by researching through StaySafeOnline, a well-known source for online safety, offering dynamic campaigns to educate individuals and businesses. As you navigate through the profound implications of AI, the Electronic Frontier Foundation (EFF) takes center stage, raising awareness about its transformative yet complex presence in online technology.

          </p>
          <p className="text-lg">
            These initiatives collectively can increase one's awareness about the many scams out there and what initiatives are doing to bring about change. This is a way to empower individuals to navigate the digital landscape without the risk of becoming a victim of these issues. Join us in understanding, supporting, and contributing to these impactful endeavors for a safer, more informed technological future.
          </p>
        </div>

        <div className="section mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Organizations Implementing AI for Cybersecurity:</h2>
          <p className="text-lg mb-2">
            To learn about ethical considerations concerning AI another helpful source to go to is the Center for Humane Technology, an advocate for responsible tech use. Engaging in initiatives that spotlight the potential negative impacts of AI on society, prompts introspection on the ethical use of technology. For specificities about what frauds there are we recommend Fraud.org, an educational force unraveling the complexities of fraud, including scams orchestrated by AI.
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
