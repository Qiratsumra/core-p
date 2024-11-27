import Image from "next/image";
import qsiimage from "../../../public/hijabi.png"

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
export default function Introduction() {
  return (
    <main className="main">
    <br className=" md:hidden"/>
    <br className="md:hidden"/>
    <div className=".flex justify-evenly max-sm:block ">
      <div >
      <h1 className=" max-sm:text-center max-sm:items-center text-5xl font-bold mt-40 mr-[10rem] max-sm:p-4 max-sm:text-4xl">
        I'm <span className="font-extrabold text-violet-500 ">Qirat Saeed</span>
      </h1>
      <br className="max-sm:hidden"/>
      {/* <br className="max-sm:hidden"/> */}
      <div className=" font-serif max-sm:flex max-sm:justify-center max-sm:items-center max-sm:m-5 max-sm:p-2 max-sm:font-serif max-sm:bg-violet-500 rounded ">
      <p className="">I'm <b>Qirat Saeed</b> a passionate <strong>Web Developer </strong> dedicated to crafting intuitive,
      <br className="max-sm:hidden"/> responsive, and visually stunning web applications. With expertise in
      <br className="max-sm:hidden"/> <strong>Next.js</strong>, <strong>Typescript</strong>, <strong>CSS Frameorks</strong>,<strong>HTML</strong>,and design tools like <strong>FIGMA</strong>,
      <br className="max-sm:hidden"/>  I transform ideas into seamless digital experiences.
    
    </p>
    </div>
    
    <div className="flex justify-evenly mr-[450px] max-sm:mr-4">
      <Link className="text-violet-800 text-center text-4xl hover:text-5xl" href={"https://github.com/Qiratsumra"}><FaGithub/></Link>
      <Link className="text-violet-800 text-center text-4xl hover:text-5xl" href={"https://www.linkedin.com/in/qirat-saeed-8048662b7/"}><FaLinkedin/></Link>
    </div>
    
    </div>
      <div className="max-sm:flex items-center justify-center">
        <Image src={qsiimage} alt="qs-image" className="slit-in-vertical rounded-full border-x-2 border-y-2 h-[500px] w-[340px] m-5 max-sm:rounded-full max-sm:border-y-2 max-sm:border-x-2 max-sm:m-2"></Image>
      </div>
      <div>
      </div>
    </div>
    
    </main>
        )
}
