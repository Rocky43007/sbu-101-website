import Image from 'next/image';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from '../components/Header';
import { FC } from 'react';
import { project_title } from "../constants/project_title";

const Background: FC = () => {
  return (
    <>
      <Header title={`Background | ${project_title}`} description={"Here's how you can get involved!"} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full">
        <Image src={'/Background_Page.jpg'} fill alt="bgImage" className="w-full h-full object-cover object-center brightness-[30%] blur" />
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-white w-full">
          <h1 className="text-[5vmax] font-bold z-10">
            Background
          </h1>
          <h2 className="opacity-75 lg:text-[1.575vmax] text-[1rem] font-light mb-8">
            Why we need to address the issue of AI-powered scams
          </h2>
        </main>
        <h3 className="text-[1.5vmax] font-bold z-10 bottom-0 py-[10px] w-full flex items-center justify-center text-center animate-pulse">
          Scroll down for more information!
        </h3>
        <button onClick={() => window.location.replace(window.location.origin)}>
          <IoMdArrowRoundBack size={'5vmax'} color="white" className="z-10 absolute bottom-0 left-0 m-[20px] hover:opacity-50" />
        </button>
      </div>
      <div className="max-w-5xl mx-auto p-8 mt-8 rounded-md shadow-md text-white">
        <h2 className="text-2xl font-bold mb-4 ">
          Describing the Social Issue
        </h2>
        <p className="text-base mb-4 ">
          The increasing accessibility of AI tools on the internet has made it accessible for scammers to personalize attacks, analyze large datasets of targeted victim identification, and mimic legitimate user behavior. With the global and interconnected nature of the internet, it further challenges combating these scams. As cybersecurity measures evolve, scammers adeptly utilize AI to bypass traditional defenses, requiring companies and institutions to take an approach against these scams by involving technology, policy, education, and international cooperation.
        </p>

        <h2 className="text-2xl font-bold mb-4 ">
          Prevalent AI-Powered Scams Today
        </h2>
        <p className="text-base mb-4 ">
          AI-powered scams include a variety of sophisticated techniques, with <strong className="text-red-500">deepfake technology</strong> and <strong className="text-blue-500">AI-generated phishing emails</strong> being prominent examples. <strong className="text-red-500">Deepfakes</strong> use advanced machine learning algorithms to create realistic audio or video content by placing facial expressions and even speech onto unsuspecting individuals. This technology has been exploited for impersonation, leading to scams like <strong className="text-red-500">CEO fraud</strong>, where scammers use deepfakes to convincingly mimic company executives and initiate unauthorized transactions.
        </p>
        <p className="text-base mb-4 ">
          In the realm of phishing attacks, AI-driven scams utilize <strong className="text-green-500">natural language processing</strong> to craft highly convincing emails that imitate the writing style of trusted organizations. These <strong className="text-green-500">AI-generated phishing emails</strong> often personalize messages based on extensive data analysis, increasing the chances of deceiving recipients into disclosing sensitive information or transferring funds.
        </p>

        <div className="flex items-center justify-center p-[50px]">
          <div className="absolute w-[50vmax] h-[30vmax] rounded-full">
            <div>
              <Image src='/Background_Pic_1.jpg' fill alt="bgImage" className="relative block w-[100%] h-[100%] object-cover object-center brightness-[50%] blur-3xl rounded-3xl p-[30px]" />
            </div>
          </div>
          <div className="relative text-white">
            <div className="p-[80px] w-[45vmax] h-[25vmax]">
              <div>
                <Image src='/Background_Pic_1.jpg' alt={"Hero Image"} fill className={`block w-[100%] h-[100%] object-cover relative object-center rounded-3xl`} loading='eager' />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 ">
          Why the Public Should Care
        </h2>
        <p className="text-base mb-4 ">
          The target audience for this campaign is anyone who uses the internet today; children and the elderly are particularly susceptible to virtual scams these days. Because of how prevalent it is today, we need the public to be more educated about these topics and companies and the government to do more on their part to strengthen <strong className="text-green-500">cybersecurity measures</strong>, enact robust regulations, and invest in technologies that can effectively detect and mitigate evolving threats. This issue connect both on a local scale and global scale as new AI scams can compromise an entire companies data that can include people&apos;s addresses, bank info and more.
        </p>
        <p className="text-base ">
          Companies should prioritize the integration of AI-driven security solutions to stay ahead of <strong className="text-red-500">cybercriminal tactics</strong>, while government agencies play a pivotal role in crafting and enforcing legislation that addresses the ethical use of AI and imposes consequences for malicious activities. By fostering a collaborative effort between individuals, businesses, and governmental bodies, we can collectively create a safer online environment, increasing our defenses against virtual scams.
        </p>

        <div className="flex items-center justify-center p-[50px]">
          <div className="absolute w-[50vmax] h-[30vmax] rounded-full">
            <div>
              <Image src='/Background_Pic_2.jpg' fill alt="bgImage" className="relative block w-[100%] h-[100%] object-cover object-center brightness-[50%] blur-3xl rounded-3xl p-[30px]" />
            </div>
          </div>
          <div className="relative text-white">
            <div className="p-[80px] w-[45vmax] h-[25vmax]">
              <div>
                <Image src='/Background_Pic_2.jpg' alt={"Hero Image"} fill className={`block w-[100%] h-[100%] object-cover relative object-center rounded-3xl`} loading='eager' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
