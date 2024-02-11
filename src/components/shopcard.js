import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import image from "../../images/images.jpeg";

export default function Shopcard({ name, add }) {
  return (
    <div className="rounded-md h-[250px] relative flex flex-col items-center border-lightgreen border-stroke bg-white shadow">
      <div>
        <div className="absolute z-10 bg-red-100 gap-2 p-2 top-2 left-2 flex  text-red-700 items-center justify-center rounded-full bg-meta-2">
          <FaHeart />
        </div>
        <div className="h-full w-full relative">
          <div className="h-full w-full absolute opacity-25 rounded-md bg-black" />
          <Image src={image} className="h-full w-full rounded-md" />
        </div>

        <div className="absolute bottom-5 left-3">
          <span className="text-sm font-medium text-gray-700">{name}</span>
          <h4 className="text-xs font-bold text-gray-500">{add}</h4>
        </div>
      </div>
    </div>
  );
}
