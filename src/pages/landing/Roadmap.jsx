const Roadmap = () => {
  const DATA = [
    {
      stage: "01",
      achieve: [
        "Twitter Launch",
        "Telegram Launch",
        "Website Development",
        "Contract Development",
        "Contract Deployment",
        "Presale Marketing",
        "Pinksale Presale",
        "Uniswap Listing",
        "Dextool Trending",
        "Etherscan Verification",
      ],
    },
    {
      stage: "02",
      achieve: [
        "Twitter Campaign",
        "Whitepaper Release",
        "Coinmarketcap Listing",
        "Coingecko Listing",
        "1,000 Holders",
        "Contest & Giveaways",
        "Ordinal NFT Marketplace",
        "Ordinal NFT Collection",
        "Telegram Campaign",
        "Ordinal NFT Partnerships",
      ],
    },
    {
      stage: "03",
      achieve: [
        "Smart Contract Audit/KYC",
        "Ambassador Reward System",
        "Launchpad/Incubator",
        "Launchpad App (IOS/ANDROID)",
        "Re-Brand",
        "Press Release",
        "Ordinal Generator",
        "Ordinal Inscribe Tool",
        "Youtube Campaign",
        "5,000 Holders",
      ],
    },
    {
      stage: "04",
      achieve: [
        "Legal Advise",
        "Allowlist/Collab Platform",
        "Wallet",
        "100k Twitter Followers",
        "Brand Awareness Campaign",
        "Partnerships",
        "DEX/Swap Development",
        "Ordinal Analytics Tool",
        "20,000",
        "Layer 2 Blockchain Development",
      ],
    },
  ];
  return (
    <div id="roadmap" className="wrapper mt-[70px] sm:mt-[100px] lg:mt-[250px]">
      <div className="contain justify-center gap-7 items-center flex-col">
        <h2 className="title">ROADMAP</h2>
        <div className="w-full relative gap-y-6 grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-4 grid-rows-[auto__1fr__1fr__1fr__1fr] sm:grid-rows-[auto__1fr__1fr] lg:grid-rows-[auto__1fr]">
          {/* //top line */}
          <div className="col-start-1 col-end-2 sm:col-end-3 lg:col-end-5 w-full bg-white h-[2px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 absolute left-full -translate-x-[65%] z-10 top-1/2 -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          {/* //top line */}
          {DATA.map((elem, idx) => {
            return <RoadmapCol {...elem} key={idx + elem.stage} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

const RoadmapCol = ({ stage, achieve }) => {
  return (
    <div className="grid gap-y-6 grid-cols-[auto__1fr] auto-rows-fr">
      <div className="col-start-1 col-end-2 row-start-1 row-end-[12] -translate-y-6 z-10 h-[calc(100%_+_24px)]  bg-white w-[3px]  "></div>
      <div className="col-start-2 ml-7 relative flex justify-center items-center  w-[135px] h-[40px]  bg-orangeGr rounded-lg ">
        <div className="h-[2px] bg-orangeGr absolute right-full w-7 top-1/2 -translate-y-1/2"></div>
        <p className="text-xl font-normal uppercase text-white">
          Stage {stage}
        </p>
      </div>
      {achieve.map((elem, idx) => {
        return (
          <div
            key={idx + elem}
            className="col-start-2 h-full flex justify-start items-center relative pl-7"
          >
            <p className="text-white uppercase text-lg">{elem}</p>
            <div className="bg-orangeGr rounded-full translate-x-[40%] z-20 w-[15px] aspect-square absolute right-full top-1/2 -translate-y-1/2"></div>
          </div>
        );
      })}
    </div>
  );
};
