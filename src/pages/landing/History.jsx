const History = () => {
  return (
    <div className="wrapper xl:mt-[4vw] 2xl:mt-[14vw]">
      <div className="gap-16 contain justify-center items-center flex-col">
        <div className="flex justify-center text-center items-center flex-col gap-1">
          <h2 className="title">Our history</h2>
          <p className="para">
            How We Created One Of The First Meme Coins On The Bitcoin Blockchain
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center w-full gap-12">
          <HisBox
            img="/his-ico1.png"
            para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantieaque ipsa quae lo inventore veritatis "
          />
          <HisBox
            img="/his-ico2.png"
            para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantieaque ipsa quae lo inventore veritatis "
          />
          <HisBox
            img="/his-ico3.png"
            para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantieaque ipsa quae lo inventore veritatis "
          />
        </div>
      </div>
    </div>
  );
};

export default History;

const HisBox = ({ img, para }) => {
  return (
    <div className="text-center flex justify-center items-center flex-col gap-5">
      <div className="rounded-full bg-orangeGr w-[120px] aspect-square overflow-hidden flex justify-center items-center">
        <img src={img} className="object-contain max-h-[72px]" alt="" />
      </div>
      <p className="para">{para}</p>
    </div>
  );
};
