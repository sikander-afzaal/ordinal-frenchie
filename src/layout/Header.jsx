import { useEffect, useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY > 100) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <header
      className={`wrapper fixed top-0  left-0 z-50 ${
        headerBg ? "bg-[#2B0A4F]" : ""
      } transition-all duration-300`}
    >
      {headerToggle && (
        <div
          className="fixed w-full h-full top-0 left-0 bg-black opacity-60 sm:hidden block z-[89]"
          onClick={() => setHeaderToggle(false)}
        ></div>
      )}
      <div className="contain justify-between h-[90px] items-center">
        <h2 className="font-coolGums textGr font-normal uppercase text-2xl">
          Logo Here
        </h2>
        <nav
          className={`flex justify-start items-center sm:static fixed w-full h-full max-w-[450px] sm:w-auto sm:h-auto sm:max-w-none  gap-10 ${
            headerToggle ? "right-0" : "-right-[600px]"
          } top-0 sm:flex-row flex-col pt-[6rem] pb-[3rem] px-[3rem] sm:p-0 bg-[#2B0A4F] sm:bg-transparent transition-all duration-700 z-[90] overflow-y-auto sm:overflow-visible`}
        >
          <a
            href="#home"
            onClick={() => setHeaderToggle(false)}
            className="text-white text-xl sm:text-lg font-normal uppercase"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setHeaderToggle(false)}
            className="text-white text-xl sm:text-lg font-normal uppercase"
          >
            About us
          </a>
          <a
            href="#tokenomics"
            onClick={() => setHeaderToggle(false)}
            className="text-white text-xl sm:text-lg font-normal uppercase"
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            onClick={() => setHeaderToggle(false)}
            className="text-white text-xl sm:text-lg font-normal uppercase"
          >
            Roadmap
          </a>
        </nav>
        {headerToggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            onClick={() => setHeaderToggle(false)}
            className="w-7 h-7 relative z-[91] sm:hidden block cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            onClick={() => setHeaderToggle(true)}
            className="w-7 h-7 relative z-[91] sm:hidden block cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
