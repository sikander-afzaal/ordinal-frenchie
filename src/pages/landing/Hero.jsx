import Button from "../../components/Button";

const Hero = () => {
  return (
    <div
      id="home"
      className="wrapper py-[90px] xl:py-[150px] relative isolate xl:h-screen min-h-[850px]"
    >
      <img
        src="/blob-left.png"
        className="absolute -z-20 sm:block hidden top-[45%] xl:top-1/2 2xl:top-[70%] left-0"
        alt=""
      />
      <img
        src="/blob-right.png"
        className="absolute -z-20 sm:block hidden top-[45%] xl:top-1/2 2xl:top-[70%] right-0"
        alt=""
      />
      <img
        src="/hero-curve.png"
        className="absolute left-0 top-0 w-full h-[80%] xl:h-auto object-cover -z-10"
        alt=""
      />
      <div className="contain xl:flex-row flex-col justify-between items-center xl:items-start gap-12">
        <div className="flex justify-start items-center text-center xl:text-left xl:items-start flex-col gap-5">
          <h1 className="title">Ordinal frenchie</h1>
          <p className="text-white text-base sm:text-lg opacity-75">
            One of the first memecoins to launch on the Bitcoin Blockchain. What
            once was thought to be impossible is now possible, Ordinal
            technology has unlocked the TRUE power of the Bitcoin Blockchain
            with JPEGs and MEMECOINS! By combining Ordinals and smart contracts
            on Ethereum, we have been able to successfully create a memecoin
            FULLY HOSTED on the Bitcoin Blockchain!
          </p>
          <p className="text-white text-base sm:text-lg opacity-75">
            What once was thought to be impossible is now possible, Ordinal
            technology has unlocked the TRUE power of the Bitcoin Blockchain
            with JPEGs and MEMECOINS!
          </p>
          <p className="text-white text-base sm:text-lg opacity-75">
            By combining Ordinals and smart contracts on Ethereum, we have been
            able to successfully create a memecoin FULLY HOSTED on the Bitcoin
            Blockchain!
          </p>
          <Button>BUY $OFREN</Button>
        </div>
        <img
          src="/hero-img.png"
          className="max-w-[90%] md:max-w-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
