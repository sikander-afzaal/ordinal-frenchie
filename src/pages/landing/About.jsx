import Button from "../../components/Button";

const About = () => {
  return (
    <div id="about" className="wrapper mt-[40px] sm:mt-[80px] lg:mt-[130px]">
      <div className="contain lg:flex-row flex-col justify-between items-center gap-16 lg:gap-8">
        <div className="relative isolate w-full max-w-[500px] lg:max-w-[650px]">
          <div className="bg-[#6409AC] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-[195px] w-full max-w-[350px] lg:max-w-[425px] aspect-square rounded-full -z-10"></div>
          <img
            src="/about.png"
            className="w-full max-w-[650px] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start items-center text-center lg:text-left lg:items-start w-full flex-col gap-5">
          <h3 className="text-white leading-[1] text-2xl font-normal">
            About us
          </h3>
          <h2 className="title leading-[1]">Ordinal Frenchie</h2>
          <p className="para">
            Bitcoin Ordinals are digital assets inscribed on a satoshi, the
            smallest denomination of a Bitcoin (BTC). With this strategy, users
            can create Non-Fungible Tokens (NFTs) on the Bitcoin blockchain.
            NFTs are unique digital assets that can represent art, collectibles,
            and more.We have minted oFloki NFT into vault and fractioned the
            vault into ERC20- tokens which are paired with ETH. This brings
            Floki from BTC network to ERC20 as ordinal and 0% tax token.
          </p>
          <div className="flex justify-start sm:flex-row flex-col items-center gap-5">
            <Button>gamma nft</Button>
            <Button>emblem nft</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
