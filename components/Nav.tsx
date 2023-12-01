import Link from "next/link";
import { useState } from "react";
import { NavItems } from "../constants/NavItems";
import { project_title } from "../constants/project_title";

export const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="p-7 w-full z-[1] fixed lg:top-0">
      <nav className="flex items-center lg:justify-between justify-center flex-wrap bg-transparent bg-opacity-50 p-6 border-4 rounded-xl border-transparent backdrop-blur-xl">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-6 w-full lg:w-auto">
          <Link href="/" passHref={true} legacyBehavior>
            <button className="font-semibold text-xl tracking-tight text-center w-full">{project_title}</button>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-yellow-500 border-teal-400 hover:text-white hover:border-white" onClick={() => openNav === true ? setOpenNav(false) : setOpenNav(true)}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`w-full flex justify-center items-center text-right lg:flex-grow lg:flex lg:w-auto ${openNav === false ? "hidden" : ""}`}>
          <div className="text-sm lg:flex-grow flex flex-col justify-center items-center lg:block">
            {NavItems.map((item, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link key={`navItem_${index}`} href={item.url} legacyBehavior>
                  <span className="block mt-4 lg:inline-block lg:mt-0 text-xl text-white mr-4 hover:text-yellow-500">{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav >
    </div >
  );
};