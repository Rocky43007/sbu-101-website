import Image from "next/image";
import Link from "next/link";

type PageSelectorProps = {
  title: string,
  description: string,
  bg: string,
  link: string,
}

const PageSelector_1 = ({ title, description, bg, link }: PageSelectorProps) => {
  return (
    <div className="flex items-center justify-center p-[50px]">
      <div className="absolute lg:p-[200px] lg:w-[50vmax] lg:h-[25vmax] w-[400px] p-[250px] rounded-xl">
        <div>
          <Image src={bg} fill alt="bgImage" className="relative block w-[100%] h-[100%] object-cover object-center brightness-[25%] blur-3xl rounded-3xl p-[30px]" />
        </div>
      </div>
      <div className="relative text-white">
        <div className="p-[80px] lg:w-[40vmax] lg:h-[20vmax] h-[40vmax] w-[350px]">
          <div>
            <Image src={bg} alt={title + " Image"} fill className={`block w-[100%] h-[100%] object-cover relative object-center brightness-[25%] rounded-xl`} />
          </div>
          <div className={`grid grid-cols-1 gap-1 absolute bottom-0 left-0 lg:p-[1.15vmax] p-5 justify-start items-start w-[100%] right-[50px] text-left text-[1rem]`}>
            <p className={`lg:text-[2vmax] text-[2rem] font-bold w-[100%] flex flex-row items-center justify-start`}>
              {title}
            </p>
            <div className={`flex flex-col justify-start items-start font-light text-opacity-40 w-[100%] lg:text-[1vmax]`}>
              {description}
              <br></br>
              <Link
                href={link}
                className="py-[4px]"
                aria-description={description}
                legacyBehavior>
                <p className="lg:p-[1vmax] p-3 bg-gray-800 rounded-3xl w-auto font-normal text-center hover:bg-gray-700 lg:text-[0.75vmax]">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageSelector = ({ title, description, bg, link }: PageSelectorProps) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="absolute p-[3rem] lg:w-[45%] lg:h-[50%] w-full h-[50%] rounded-xl">
        <div>
          <Image src={bg} fill alt="bgImage" className="relative block w-full h-full object-cover object-center brightness-[25%] blur-3xl rounded-3xl p-4" />
        </div>
      </div>
      <div className="relative text-white">
        <div className="p-[10rem] lg:h-[20rem] h-1/2 lg:w-[38rem] w-full">
          <div>
            <Image src={bg} alt={title + " Image"} fill className={`block w-full h-full object-cover relative object-center brightness-[25%] rounded-xl`} />
          </div>
          <div className={`grid grid-cols-1 gap-1 absolute bottom-0 left-0 p-4 justify-start items-start w-full right-4 text-left text-sm`}>
            <p className={`lg:text-2xl text-xl font-bold w-full flex flex-row items-center justify-start`}>
              {title}
            </p>
            <div className={`flex flex-col justify-start items-start font-light text-opacity-40 w-full lg:text-xl`}>
              {description}
              <br></br>
              <Link
                href={link}
                className="py-1"
                aria-description={description}
                legacyBehavior>
                <p className="p-3 bg-gray-800 rounded-3xl lg:w-auto w-full font-normal text-center hover:bg-gray-700 lg:text-sm">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;