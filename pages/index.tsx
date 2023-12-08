/* eslint-disable react/no-unescaped-entities */
import Header from '../components/Header';
import Image from 'next/image';
import PageSelector from '../components/PageSelector';
import { project_title } from "../constants/project_title";

export default function Home() {
  return (
    <>
      <Header title={project_title} description={"Welcome to our platform dedicated to addressing the pressing concerns of privacy and security in today's tech-driven world."} />
      <div className='h-full w-full overflow-hidden relative'>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className='flex items-center justify-center flex-1'>
            <main className="grid lg:grid-cols-2 grid-cols-1 px-20 lg:gap-x-[5vmax] gap-y-[5vmax]">
              <div className='flex items-center justify-center'>
                <div className='flex flex-col justify-start lg:text-left text-center items-start'>
                  <h1 className={`text-[3vmax] font-bold`}>
                    {project_title}
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center p-[50px]">
                <div className="absolute w-[30vmax] h-[30vmax] rounded-full">
                  <div>
                    <Image src='/Hero.jpg' fill alt="bgImage" className="relative block w-[100%] h-[100%] object-cover object-center brightness-[50%] blur-3xl rounded-full p-[30px]" />
                  </div>
                </div>
                <div className="relative text-white">
                  <div className="p-[80px] w-[25vmax] h-[25vmax]">
                    <div>
                      <Image src='/Hero.jpg' alt={"Hero Image"} fill className={`block w-[100%] h-[100%] object-cover relative object-center rounded-full`} loading='eager' />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start min-h-[50vh] py-2">
          <main className="flex flex-col lg:items-start lg:justify-start items-center justify-center flex-1 px-20 text-start">
            <h1 className="text-[4vmax] font-bold underline decoration-yellow-200/60 decoration py-[30px]">
              Overview
            </h1>
            <p className='text-[1.375rem]'>
              Welcome to our platform dedicated to addressing the pressing concerns of
              <strong className="text-green-400"> privacy and security</strong> in today&apos;s tech-driven world.
              With scams on the rise, fueled by the sophistication of
              <strong className="text-blue-400"> Artificial Intelligence, deepfakes, and audio manipulation</strong>,
              our mission is to combat these threats head-on. Every day, individuals fall victim to increasingly complex scams, highlighting the
              <strong className="text-purple-400"> urgent need for solutions and widespread awareness</strong>.
              Join us in creating a safer society by exploring
              <strong className="text-green-400"> actionable insights</strong> and
              <strong className="text-blue-400"> proactive measures</strong> against the evolving landscape of online threats.
            </p>
          </main>
        </div>
      </div>
      <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center min-h-screen py-2">
        <main className="flex flex-col lg:items-start lg:justify-start items-center justify-center flex-1 px-20 text-start">
          <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[200px] gap-y-[100px] justify-center items-center py-[50px]'>
            <PageSelector title='Background' description='Why we need to address the issue of AI-powered scams' bg="/Background_Page.jpg" link={'/background'} />
            <PageSelector title='Get Involved' description='Here&apos;s what you can do to minimize the impact of the current situation.' bg="/Protester_Pic.jpg" link={'/get-involved'} />
            <PageSelector title='Process of Implementation' description="Navigating the Challenges of AI Advocacy" bg="/Obstacles.png" link={'/process'} />
            <PageSelector title='Sources' description='Our sources for this project' bg="/Sources.jpg" link={'/sources'} />
          </div>
        </main>
      </div>
    </>
  )
}