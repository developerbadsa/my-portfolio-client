import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
      const [open, setOpen] = useState(false);

      const menus = (
            <>
                  <a href='#projects' className="text-sm  dark:text-gray-300 hover:text-orange-200 dark:hover:text-orange-300">
                        <li> Projects </li>
                  </a>
                  <a href='#technologies' className="text-sm  dark:text-gray-300 hover:text-orange-200 dark:hover:text-orange-300">
                        <li> Technologies </li>
                  </a>
                  <a href='#aboutme' className="text-sm  dark:text-gray-300 hover:text-orange-200 dark:hover:text-orange-300">
                        <li> About me </li>
                  </a>
            </>
      )

      return (
            <header className="bg-gray-900">
                  <div className="max-w-6xl px-4 mx-auto" >
                        <nav className="flex items-center justify-between py-4">
                              <Link to='/'> <img className='max-w-[200px]' src="/src/assets/images/logo-light.png" alt="logo rahim badsa" /></Link>
                              <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center text-gray-200 lg:flex"> {menus}</ul>
                              <div className="lg:hidden">
                                    <button
                                          className="flex items-center px-3 py-2 text-orange-200 border border-orange-200 rounded dark:text-gray-400 hover:text-orange-300 hover:border-orange-300 lg:hidden"
                                          onClick={() => setOpen(true)}
                                    >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                          </svg>
                                    </button>
                              </div>

                              {/* Social menu */}
                              <div className="hidden lg:flex text-xl">
                                    <a href="#" className="mr-4 text-gray-200 hover:text-orange-300"> <FaGithub /></a>
                                    <a href="#" className="mr-4 text-gray-200 hover:text-orange-300"> <FaLinkedin /></a>
                                    <a href="#" className="mr-4 text-gray-200 hover:text-orange-300"> <FaWhatsapp /></a>

                              </div>
                        </nav>
                        {/* Mobile Sidebar */}
                        <div
                              className={`fixed inset-0 w-full opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
                                    }`}
                              onClick={() => setOpen(false)}
                        ></div>
                        <div
                              className={`fixed inset-0 z-50 w-64 bg-white dark:bg-gray-800 overflow-y-auto transform lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
                                    }`}
                        >
                              <div className="flex items-center justify-between p-4">
                                    <a href="#" className="text-xl font-medium leading-none text-gray-800 dark:text-gray-200">
                                          <img className='max-w-[200px]' src="/src/assets/images/logo.png" alt="" />
                                    </a>
                                    <button
                                          className="text-gray-700 dark:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                          onClick={() => setOpen(false)}
                                    >
                                          <div className='text-3xl'><IoIosCloseCircle /></div>
                                    </button>
                              </div>
                              <div className="px-4 py-6 text-slate-800">
                                    <ul className='text-slate-800 flex flex-col gap-2'>
                                          {menus}
                                    </ul>
                                    <div className="divider">Socials</div>
                                    {/* Social menu */}
                                    <div className=" flex text-xl text-slate-800">
                                          <a href="#" className="mr-4  hover:text-orange-300"> <FaGithub /></a>
                                          <a href="#" className="mr-4  hover:text-orange-300"> <FaLinkedin /></a>
                                          <a href="#" className="mr-4  hover:text-orange-300"> <FaWhatsapp /></a>

                                    </div>

                              </div>
                        </div>
                  </div>
            </header>
      );
};

export default Navbar;