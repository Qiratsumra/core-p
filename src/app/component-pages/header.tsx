"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";


const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <span>logo</span>
        </div>
        <div className={`links ${isActive ? "active" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/components-page/projects">Projects</Link>
          <Link href="/components-page/skills">Skills</Link>
          <Link href="/components-page/contact">Contact</Link>
        </div>
        <CiMenuBurger
          onClick={() => setIsActive(true)}
          className={`.menuIcon ${isActive ? "hidden" : "block"}`}
        />
        <RxCross2
          onClick={() => setIsActive(false)}
          className={`closeIcon ${isActive ? "block" : "hidden"}`}
        />
      </div>

      {isActive && (
        <div className="mobileMenu">
          <Link href="/" onClick={() => setIsActive(false)}>
            Home
          </Link>
          <Link href="/component-pages/projects" onClick={() => setIsActive(false)}>
            Projects
          </Link>
          <Link href="/component-pages/skills" onClick={() => setIsActive(false)}>
            Skills
          </Link>
          <Link href="/component-pages/contact" onClick={() => setIsActive(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
