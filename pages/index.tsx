import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src="/homepic.svg"
            alt="Homepic"
            width="350"
            height="350"
            priority
          />
        </div>
        <div className="flex flex-col bg-greenyellow w-4/5 py-16 rounded-md items-center justify-center gap-4">
          <div className=" text-6xl">Hi Ajay</div>
          <div className=" text-2xl text-center">
            Track your sending <br /> to Cut
          </div>
          <Link
            href="/payment"
            className=" w-3/4 bg-violetpurple text-greenyellow flex items-center justify-center py-3 text-4xl rounded-lg"
          >
            <div>PAY</div>
          </Link>
        </div>
      </div>
      <div className="flex items-end justify-center h-full w-screen">
        <div></div>
        <div>
          <Image
            src="/cat.jpg"
            alt="Cat"
            width="80"
            height="120"
            className=" rounded-full"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default index;
