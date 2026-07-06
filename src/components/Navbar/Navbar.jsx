import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Linda.png";
import Modal from "../utls/Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-machine-gray/10 shadow-sm">
      <div className="max-w-container-max mx-auto px-gutter h-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <NavLink to={"/"}>
            <img alt="LINDA GROUP Logo" className="h-12 w-auto" src={logo} />
          </NavLink>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink
            className={({ isActive }) =>
              `font-cta-label text-cta-label ${isActive ? "text-industrial-red font-bold border-b-2 border-industrial-red" : "text-deep-steel hover:text-industrial-red transition-opacity duration-200"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-cta-label text-cta-label ${isActive ? "text-industrial-red font-bold border-b-2 border-industrial-red" : "text-deep-steel hover:text-industrial-red transition-opacity duration-200"}`
            }
            to="Manufacturing"
          >
            Manufacturing
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-cta-label text-cta-label ${isActive ? "text-industrial-red font-bold border-b-2 border-industrial-red" : "text-deep-steel hover:text-industrial-red transition-opacity duration-200"}`
            }
            to="Engineering"
          >
            Engineering
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-cta-label text-cta-label ${isActive ? "text-industrial-red font-bold border-b-2 border-industrial-red" : "text-deep-steel hover:text-industrial-red transition-opacity duration-200"}`
            }
            to="global-footprint"
          >
            Global Footprint
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-cta-label text-cta-label ${isActive ? "text-industrial-red font-bold border-b-2 border-industrial-red" : "text-deep-steel hover:text-industrial-red transition-opacity duration-200"}`
            }
            to="about-us"
          >
            About us
          </NavLink>
        </nav>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden lg:block bg-industrial-red text-white px-6 py-3 font-cta-label text-cta-label rounded transition-transform active:scale-95 hover:opacity-90 cursor-pointer"
          >
            Request Quote
          </button>
          {/* <!-- Main modal --> */}
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />


    <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="md:hidden text-deep-steel inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base hover:bg-neutral-tertiary hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-hamburger" aria-expanded={isMenuOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div className={`${isMenuOpen ? "block" : "hidden"} w-full absolute top-20 left-0 z-40 flex flex-col md:flex-row md:items-center md:justify-between md:relative md:top-auto md:left-auto md:w-auto md:h-auto bg-white py-4 md:py-0`} id="navbar-hamburger">
            <ul className="mt-8"> 
              <li>
            <NavLink onClick={() => setIsMenuOpen(false)} aria-current='page' to="/" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span className="ms-3">Home</span>
            </NavLink>
         </li>
              <li>
            <NavLink onClick={() => setIsMenuOpen(false)} to="Manufacturing" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span className="ms-3">Manufacturing</span>
            </NavLink>
         </li>
              <li>
            <NavLink onClick={() => setIsMenuOpen(false)} to="Engineering" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span className="ms-3">Engineering</span>
            </NavLink>
         </li>
              <li>
            <NavLink onClick={() => setIsMenuOpen(false)} to="global-footprint" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span className="ms-3">Global Footprint</span>
            </NavLink>
         </li>
              <li>
            <NavLink onClick={() => setIsMenuOpen(false)} to="about-us" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span className="ms-3">About Us</span>
            </NavLink>
         </li>
         </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
