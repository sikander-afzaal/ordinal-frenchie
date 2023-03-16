const Footer = () => {
  return (
    <footer className="wrapper mt-[80px] lg:mt-[160px] bg-purpleGr py-[30px] lg:py-[50px]">
      <div className="contain lg:flex-row flex-col gap-4 sm:gap-8 justify-between items-center lg:gap-4">
        <p className="uppercase text-white text-lg sm:text-2xl">
          © copyright 2023.All right reserved-$ofloki
        </p>
        <div className="flex justify-between items-center gap-4">
          <a
            href="#"
            target={"blank"}
            className="rounded-full bg-orangeGr w-[42px] sm:w-[60px] aspect-square flex justify-center items-center"
          >
            <img
              src="/twitter.png"
              className="max-w-[28px] sm:max-w-none sm:max-h-[44px] object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            target={"blank"}
            className="rounded-full bg-orangeGr w-[42px] sm:w-[60px] aspect-square flex justify-center items-center"
          >
            <img
              src="/telegram.png"
              className="max-w-[28px] sm:max-w-none sm:max-h-[44px] object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            target={"blank"}
            className="rounded-full bg-orangeGr w-[42px] sm:w-[60px] aspect-square flex justify-center items-center"
          >
            <img
              src="/etherscan.png"
              className="max-w-[28px] sm:max-w-none sm:max-h-[44px] object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            target={"blank"}
            className="rounded-full bg-orangeGr w-[42px] sm:w-[60px] aspect-square flex justify-center items-center"
          >
            <img
              src="/foot-ico4.png"
              className="max-w-[28px] sm:max-w-none sm:max-h-[44px] object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            target={"blank"}
            className="rounded-full bg-orangeGr w-[42px] sm:w-[60px] aspect-square flex justify-center items-center"
          >
            <img
              src="/medium.png"
              className="max-w-[28px] sm:max-w-none sm:max-h-[44px] object-contain"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
