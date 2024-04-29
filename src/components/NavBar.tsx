import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-transparent text-sm py-3 md:py-0">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg lg:text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B06CEF] to-[#4C62D8]">
                Revolt Technologies
              </span>
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700">
                <a
                  className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500"
                  href="#"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-neutral-200 dark:hover:text-neutral-300"
                  href="#"
                >
                  Services
                </a>

                <a
                  className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-neutral-200 dark:hover:text-neutral-300"
                  href="#"
                >
                  Projects
                </a>

                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                  <button
                    type="button"
                    className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-neutral-200 dark:hover:text-neutral-300"
                  >
                    Training
                    <svg
                      className="flex-shrink-0 ms-2 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 md:shadow-2xl rounded-lg py-2 md:p-4 bg-[#37196813] dark:bg-[#3719689f] dark:divide-[#3719689f] backdrop-blur-sm before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex flex-col mx-1 md:mx-0">
                        <a
                          className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-5 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-neutral-200">
                              Support Docs
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                              Explore advice and explanations for all of
                              Preline's features.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-5 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-neutral-200">
                              Integrations
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                              Discover the huge range of tools that Preline
                              integrates with.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-5 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m7 11 2-2-2-2" />
                            <path d="M11 13h4" />
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-neutral-200">
                              API Reference
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                              Build custom integrations with our first-className
                              API.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="flex flex-col mx-1 md:mx-0">
                        <a
                          className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-5 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-neutral-200">
                              Help Center
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                              Learn how to install, set up, and use Preline.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-5 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-neutral-200">
                              Developer Hub
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                              Learn how to integrate or build on top of Preline.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-5 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-neutral-200">
                              Community Forum
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                              Learn, share, and connect with other Preline
                              users.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                        <span className="text-sm font-semibold uppercase text-gray-800 dark:text-neutral-200">
                          Customer stories
                        </span>

                        <a
                          className="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-500/10"
                          href="#"
                        >
                          Hollo World
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-neutral-200 dark:hover:text-neutral-300"
                  to="!#"
                >
                  Calendars
                </Link>

                <div className="pt-3 md:pt-0">
                  <Link
                    className="bg-gradient-to-r from-[#B06CEF] to-[#4C62D8] text-white py-2 px-4 rounded-sm"
                    to="!#"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
// const NavBar = () => {
//   return (
//     <nav className="w-full h-[50px] px-4 py-5 absolute">
//       <div className="container mx-auto flex items-center justify-between">
//         <a href="#" className="text-2xl font-bold">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B06CEF] to-[#4C62D8]">
//             Revolt Technologies
//           </span>
//         </a>

//         <ul className="hidden md:inline-flex items-center gap-10">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Portfolio</a>
//           </li>
//         </ul>

//         <a
//           className="bg-gradient-to-r from-[#B06CEF] to-[#4C62D8] text-white py-2 px-4 rounded-sm"
//           href="#"
//         >
//           Get in Touch
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
