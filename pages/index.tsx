import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className=" w-screen h-screen flex flex-col">
      <div className="flex py-3 px-2 justify-end">
        <Image
          src="/cat.jpg"
          alt="Cat"
          width="60"
          height="80"
          className=" rounded-full"
        />
      </div>
      <div className=" h-full flex flex-col justify-center items-center gap-11">
        <div className=" text-4xl font-semibold">FINANCE TRACKER</div>
        <div className=" w-4/5 h-3/5 bg-white rounded-3xl p-4 drop-shadow-2xl flex items-center justify-center">
          <Link
            href="/payment"
            className=" w-3/4 bg-green-700 flex items-center justify-center py-5 text-white "
          >
            <div>PAY</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
