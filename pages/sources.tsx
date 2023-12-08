/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from '../components/Header';
import { FC } from 'react';
import { project_title } from "../constants/project_title";

const Sources: FC = () => {
  return (
    <>
      <Header title={`Project Sources | ${project_title}`} description={"Here's where we got our information!"} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image src={'/Sources.jpg'} fill alt="bgImage" className="w-full h-full object-cover object-center brightness-[30%] blur" />
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-white">
          <h1 className="text-5xl font-bold z-10">
            Sources
          </h1>
          <h2 className="opacity-75 lg:text-2xl text-base font-light mb-8">
            Our sources for this project
          </h2>
        </main>
        <h3 className="text-2xl font-bold z-10 bottom-0 py-8 w-full flex items-center justify-center text-center animate-pulse">
          Scroll down for more information!
        </h3>
        <button onClick={() => window.location.replace(window.location.origin)}>
          <IoMdArrowRoundBack size={'5vmax'} color="white" className="z-10 absolute bottom-0 left-0 m-4 hover:opacity-50" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto p-8 mt-8 rounded-md shadow-md text-white w-full">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">1. "Top 3 Most Popular Artificial Intelligence Scams and How to Avoid Them." CBS News</h3>
          <p className="text-base">
            CBS News provides insights into the most popular AI scams and offers advice on how to avoid falling victim to them. Visit the article <a href="https://www.cbsnews.com/newyork/news/top-3-most-popular-artificial-intelligence-scams-and-how-to-avoid-them/" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">2. Hobson, Anne. ALIGNING CYBERSECURITY INCENTIVES IN AN INTERCONNECTED WORLD. R Street Institute, 2017.</h3>
          <p className="text-base">
            Anne Hobson's report on aligning cybersecurity incentives in an interconnected world is available on <a href="http://www.jstor.org/stable/resrep19135" target="_blank" rel="noopener noreferrer" className="text-blue-500">JSTOR</a>.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">3. Drenik, Gary. "Generative AI Is Democratizing Fraud: What Can Companies and Their Consumers Do to Prevent Being Scammed?" Forbes</h3>
          <p className="text-base">
            Gary Drenik discusses the democratization of fraud through generative AI and offers insights on prevention. Read the Forbes article <a href="https://www.forbes.com/sites/garydrenik/2023/10/11/generative-ai-is-democratizing-fraud-what-can-companies-and-their-consumers-do-to-prevent-being-scammed/?sh=2fa8605813e7" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">4. Builtin. "AI-Driven Fraud on the Rise." Builtin</h3>
          <p className="text-base">
            Builtin explores the rise of AI-driven fraud. Visit the article <a href="https://builtin.com/artificial-intelligence/ai-driven-fraud-on-rise" target="_blank" rel="noopener noreferrer" className="text-blue-500">here</a>.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">5. Wilner, Alex S. “Cybersecurity and Its Discontents: Artificial Intelligence, the Internet of Things, and Digital Misinformation.” International Journal, vol. 73, no. 2, 2018.</h3>
          <p className="text-base">
            Alex S. Wilner&apos;s article on cybersecurity and its relation to AI, the Internet of Things, and digital misinformation can be accessed on <a href="https://www.jstor.org/stable/26499689" target="_blank" rel="noopener noreferrer" className="text-blue-500">JSTOR</a>.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">6. Phishing Scam Illustration (Right Click to Open Image Source)</h3>
          <Image src="https://static.vecteezy.com/system/resources/thumbnails/028/342/387/original/phishing-scam-bw-outline-2d-animation-wire-fraud-with-fishing-rod-catching-computer-folder-4k-motion-graphic-email-danger-monochrome-linear-animated-cartoon-flat-concept-white-background-video.jpg" alt="Phishing Scam Illustration" width={600} height={400} />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">7. Online Learning Illustration (Right Click to Open Image Source)</h3>
          <Image src="https://media.istockphoto.com/id/1126715389/vector/vector-creative-illustration-of-distance-learning-online-learning-exam-preparation.jpg?s=612x612&w=0&k=20&c=uh9LPhxvx0tInX0-1yBfm1pGJf6nKkP_KQvoF4bvHiU=" alt="Online Learning Illustration" width={600} height={400} />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">8. Protest Illustration (Right Click to Open Image Source)</h3>
          <Image src="https://img.freepik.com/free-vector/hands-with-placards-illustration_23-2148653158.jpg" alt="Protest Illustration" width={600} height={400} />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">9. Overcoming Obstacles Illustration (Right Click to Open Image Source)</h3>
          <Image src="https://cdn2.vectorstock.com/i/1000x1000/80/76/businessman-overcoming-obstacles-challenge-vector-36528076.jpg" alt="Overcoming Obstacles Illustration" width={600} height={400} />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">10. Robotics Learning Illustration (Right Click to Open Image Source)</h3>
          <Image src="https://img.freepik.com/premium-vector/robotics-learning-illustration-concept_701961-7546.jpg" alt="Robotics Learning Illustration" width={600} height={400} />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">11. Cyber Security Illustration (Right Click to Open Image Source)</h3>
          <Image src="https://st3.depositphotos.com/1084193/18363/v/450/depositphotos_183635574-stock-illustration-cyber-security-and-information-or.jpg" alt="Cyber Security Illustration" width={600} height={400} />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">12. Technology and Security Illustration (Right Click to Open Image Source)</h3>
          <Image src="https://videohive.img.customer.envatousercontent.com/files/a58ca14a-1346-403e-b6f5-e1245f9352c0/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=8c5fa9c8bd5cd60d2b257a13b1f336b9" alt="Technology and Security Illustration" width={600} height={400} />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-red-400">
          Special Thanks
        </h2>
        <p className="text-base">
          Special thanks to the <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-500">Next.js documentation</a> and <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-500">Tailwind CSS documentation</a> for providing valuable guidance in building this website.
        </p>
      </div>
    </>
  );
}

export default Sources;
