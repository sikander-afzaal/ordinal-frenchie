const Tokenomics = () => {
  return (
    <div id="tokenomics" className="wrapper mt-[80px] lg:mt-[150px] ">
      <div className=" relative lg:flex-row flex-col contain justify-between items-center gap-10">
        <img
          src="/bubbles.png"
          className="-z-10 absolute lg:block hidden left-[9%] -translate-x-1/2 top-[60%] -translate-y-1/2"
          alt=""
        />
        <img
          src="/chart.png"
          className="lg:absolute w-full xl:max-w-[650px] max-w-[550px] right-0 top-1/2 lg:-translate-y-1/2"
          alt=""
        />
        <div className="w-full rounded-[10px] bg-purpleGr py-5 sm:py-[40px] px-10 sm:px-[60px] justify-start flex  flex-col gap-5">
          <h2 className="title">Tokenomics</h2>
          <ul className="flex list-disc xl:pl-5 justify-start  flex-col gap-3 w-full">
            <li className="text-white text-base sm:text-xl xl:text-2xl">
              Token Supply : 1,000,000,000,000,000 $OFREN
            </li>
            <li className="text-white text-base sm:text-xl xl:text-2xl">
              Burned supply : 400,000,000,000,000
            </li>
            <li className="text-white text-base sm:text-xl xl:text-2xl">
              BUY/SELL TAX: 3% Total
            </li>
            <li className="text-white text-base sm:text-xl xl:text-2xl">
              TAX BREAK DOWN: Marketing 2% Liquidity 1%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
