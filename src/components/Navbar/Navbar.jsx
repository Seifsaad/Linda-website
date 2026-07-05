import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Linda.png";
import Modal from "../utls/Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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


          <button className="md:hidden text-deep-steel" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft border-e border-default" tabindex="-1" aria-labelledby="drawer-navigation-label">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center">
                <img src={logo} alt="LINDA GROUP LOGO" className="h-12" />
                <span className="text-deep-steel text-lg ml-2 font-bold">LINDA GROUP</span>
              </a>
            </div>
            <ul className="mt-8">
              <li>
            <a href="/" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span class="ms-3">Home</span>
            </a>
         </li>
              <li>
            <a href="Manufacturing" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span class="ms-3">Manufacturing</span>
            </a>
         </li>
              <li>
            <a href="Engineering" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span class="ms-3">Engineering</span>
            </a>
         </li>
              <li>
            <a href="global-footprint" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span class="ms-3">Global Footprint</span>
            </a>
         </li>
              <li>
            <a href="about-us" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span class="ms-3">About Us</span>
            </a>
         </li>
         </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
