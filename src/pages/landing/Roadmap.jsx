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
  ];
  return (
    <div className="wrapper mt-[250px]">
      <div className="contain justify-center gap-7 items-center flex-col">
        <h2 className="title">ROADMAP</h2>
        <div className="w-full relative gap-y-6 grid grid-cols-4 grid-rows-[auto__1fr]">
          {/* //top line */}
          <div className="col-start-1 col-end-5 w-full bg-white h-[3px] relative"></div>
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
