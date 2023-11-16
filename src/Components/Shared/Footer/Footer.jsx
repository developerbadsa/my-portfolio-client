import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
      return (
            <footer className="flex flex-col lg:justify-end font-poppins">
                  <div className="hero-overlay bg-opacity-80 z-20"></div>
                  <div
                        className="relative py-10 bg-center bg-no-repeat bg-cover"
                        style={{
                              backgroundImage: 'linear-gradient(19deg, rgba(13,9,20,0.13489145658263302) 0%, rgba(2,1,18,0.5186449579831933) 52%), url("https://i.ibb.co/LZxNCWr/SL-103020-37400-03.jpg")',
                        }}
                  >
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 " />
                        <div className="relative z-10 justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
                              <div className="flex flex-wrap pb-10 -mx-3">
                                    <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0">
                                          <a
                                                href="#"
                                                className="inline-block pb-2 text-lg font-bold text-gray-300"
                                          >
                                                About Me
                                          </a>
                                          <div className="w-16 mb-4 border-b-2 border-gray-300 " />
                                          <p className="text-base font-normal leading-6 text-gray-400 lg:w-64">
                                                Hello! 👋 I'm Rahim Badsa, a passionate and creative React developer based Project. With a love for clean and efficient code, I specialize in building dynamic and responsive web applications.
                                          </p>
                                    </div>
                                    <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
                                          <h2 className="pb-2 text-lg font-bold text-gray-300 ">Quick Links</h2>
                                          <div className="w-16 mb-4 border-b-2 border-gray-300 " />
                                          <ul className="my-6">
                                                <li className="mb-4">
                                                      <NavLink className="inline-block text-base font-normal text-gray-400 " to='/'>Home</NavLink>
                                                </li>
                                                <li className="mb-4">
                                                      <NavLink className="inline-block text-base font-normal text-gray-400 " to='/'> About Us</NavLink>
                                                </li>
                                                <li className="mb-4">
                                                      <NavLink className="inline-block text-base font-normal text-gray-400 " to='/'>Services</NavLink>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className="w-full px-4 mb-11 lg:mb-0 md:w-1/4 lg:w-2/12">
                                          <h2 className="pb-2 text-lg font-bold text-gray-300">Features </h2>
                                          <div className="w-16 mb-4 border-b-2 border-gray-300 " />
                                          <ul className="my-6 text-gray-400 flex flex-col gap-3">
                                                <a href='#projects' className="text-sm  dark:text-gray-300 hover:text-orange-200 dark:hover:text-orange-300">
                                                      <li> Projects </li>
                                                </a>
                                                <a href='#technologies' className="text-sm  dark:text-gray-300 hover:text-orange-200 dark:hover:text-orange-300">
                                                      <li> Technologies </li>
                                                </a>
                                                <a href='#aboutme' className="text-sm  dark:text-gray-300 hover:text-orange-200 dark:hover:text-orange-300">
                                                      <li> About me </li>
                                                </a>
                                          </ul>
                                    </div>
                                    <div className="w-full px-4 mb-11 lg:mb-0 md:w-1/3 lg:w-3/12">
                                          <h2 className="pb-2 text-lg font-bold text-gray-300 ">
                                                Stay Connected
                                          </h2>
                                          <div className="w-16 mb-4 border-b-2 border-gray-300 " />
                                          <div className="flex justify-start mt-4 ">
                                                <div className="hidden lg:flex text-xl">
                                                      <a href="#" className="mr-4 text-gray-200 hover:text-orange-300"> <FaGithub /></a>
                                                      <a href="#" className="mr-4 text-gray-200 hover:text-orange-300"> <FaLinkedin /></a>
                                                      <a href="#" className="mr-4 text-gray-200 hover:text-orange-300"> <FaWhatsapp /></a>

                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="pt-4 text-center text-gray-300 dark:text-gray-400">
                                    <span>© Copyright 2023 . All Rights Reserved</span>
                              </div>
                        </div>
                  </div>
            </footer>

      );
};

export default Footer;