const BottomNavBar = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-transparent border border-gray-300 dark:border-gray-200 rounded-full bottom-4 left-1/2  bg-blur">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <a
          href="#home"
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-l-full group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="sr-only">Home</span>
        </a>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          href="#services"
          data-tooltip-target="tooltip-wallet"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
          </svg>

          <span className="sr-only">Wallet</span>
        </a>
        <div
          id="tooltip-wallet"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Wallet
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <a
          href="#choose-us"
          data-tooltip-target="tooltip-settings"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
            />
          </svg>
          <span className="sr-only">Settings</span>
        </a>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          href="#recent-works"
          data-tooltip-target="tooltip-profile"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-r-full group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <span className="sr-only">Profile</span>
        </a>
        <div
          id="tooltip-profile"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        {/* New */}
        {/* <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-l-full group"
        >
          <svg
            className="mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            fill="#808080"
            height="64px"
            width="64px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-45.6 -45.6 151.20 151.20"
            stroke="#808080"
            transform="matrix(1, 0, 0, 1, 0, 0)"
            stroke-width="0.0006000000000000001"
          >
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M56.276,34.104c-1.128-1.127-3.094-1.129-4.222,0L36.664,49.495l-2.121,7.779l-0.519,0.519 c-0.388,0.388-0.389,1.014-0.006,1.405l-0.005,0.02l0.019-0.005c0.194,0.19,0.446,0.288,0.699,0.288 c0.256,0,0.512-0.098,0.707-0.293l0.52-0.52l7.778-2.121l15.39-15.391c1.164-1.164,1.164-3.058,0-4.222L56.276,34.104z M38.973,50.015l10.243-10.243l4.243,4.243L43.216,54.258L38.973,50.015z M38.07,51.94l3.22,3.22l-4.428,1.208L38.07,51.94z M57.711,39.762l-2.839,2.839l-4.243-4.243l2.839-2.839c0.372-0.372,1.021-0.374,1.393,0l2.85,2.85 C58.096,38.752,58.096,39.378,57.711,39.762z"></path>{" "}
                <path d="M0.835,21.5C0.314,22.24,0,23.135,0,24.108v11.783c0,0.974,0.314,1.868,0.835,2.608h42.581l6.517-6.517 c1.13-1.131,2.633-1.753,4.232-1.753c1.599,0,3.102,0.622,4.232,1.753L60,33.586v-9.478c0-0.974-0.314-1.868-0.835-2.608H0.835z M10.5,34.5C8.019,34.5,6,32.481,6,30s2.019-4.5,4.5-4.5S15,27.519,15,30S12.981,34.5,10.5,34.5z M34,29.5c-0.552,0-1-0.448-1-1 s0.448-1,1-1s1,0.448,1,1S34.552,29.5,34,29.5z M38,29.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S38.552,29.5,38,29.5z M42,29.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S42.552,29.5,42,29.5z M46,29.5c-0.552,0-1-0.448-1-1s0.448-1,1-1 s1,0.448,1,1S46.552,29.5,46,29.5z M50,29.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S50.552,29.5,50,29.5z"></path>{" "}
                <path d="M55.392,0.5H4.608C2.067,0.5,0,2.567,0,5.108v11.783c0,0.974,0.314,1.868,0.835,2.608h58.329 C59.686,18.76,60,17.865,60,16.892V5.108C60,2.567,57.933,0.5,55.392,0.5z M10.5,15.5C8.019,15.5,6,13.481,6,11s2.019-4.5,4.5-4.5 S15,8.519,15,11S12.981,15.5,10.5,15.5z M34,10.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S34.552,10.5,34,10.5z M36,13.5 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S36.552,13.5,36,13.5z M38,10.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1 S38.552,10.5,38,10.5z M40,13.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S40.552,13.5,40,13.5z M42,10.5c-0.552,0-1-0.448-1-1 s0.448-1,1-1s1,0.448,1,1S42.552,10.5,42,10.5z M44,13.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S44.552,13.5,44,13.5z M46,10.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S46.552,10.5,46,10.5z M48,13.5c-0.552,0-1-0.448-1-1s0.448-1,1-1 s1,0.448,1,1S48.552,13.5,48,13.5z M50,10.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S50.552,10.5,50,10.5z M52,13.5 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S52.552,13.5,52,13.5z"></path>{" "}
                <path d="M34.875,47.042l6.542-6.542H0.835C0.314,41.24,0,42.135,0,43.108v11.783C0,57.433,2.067,59.5,4.608,59.5h26.217 l3.009-11.033C34.422,47.88,34.125,47.792,34.875,47.042z M10.5,53.5C8.019,53.5,6,51.481,6,49s2.019-4.5,4.5-4.5S15,46.519,15,49 S12.981,53.5,10.5,53.5z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <span className="sr-only">Home</span>
        </button>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div> */}
        {/* New */}
      </div>
    </div>
  );
};

export default BottomNavBar;
