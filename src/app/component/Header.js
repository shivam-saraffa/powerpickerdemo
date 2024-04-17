import Link from "next/link";
import logo from "@/assets/logo.png";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex bg-white items-center shadow-lg h-[7rem]">
      <div className="w-[20%]  flex justify-center">
        <Image alt="#" src={logo} width={100} height={120} />
      </div>
      <div className="w-[80%]  flex justify-end">
        <div className="flex mr-40 gap-8">
          <Link
            href={"/products"}
            className=" flex flex-col items-center justify-center   h-20"
          >
            <Image alt="#" className="" src={img1} width={20} height={20} />
            <h3>Products</h3>
          </Link>
          <Link
            href={"/configurator"}
            className=" flex flex-col items-center justify-center h-20"
          >
            <Image alt="#" className="" src={img2} width={20} height={20} />
            <h3>Configurator</h3>
          </Link>
          <Link
            href={"/favorite"}
            className=" flex flex-col items-center justify-center h-20"
          >
            <Image alt="#" className="" src={img3} width={20} height={20} />
            <h3>Favorites</h3>
          </Link>
          <Link
            href={"/quote"}
            className=" flex flex-col items-center justify-center h-20"
          >
            <Image alt="#" className="" src={img4} width={20} height={20} />
            <h3>My Quotes</h3>
          </Link>
          <Link
            href={"/account"}
            className=" flex flex-col items-center justify-center h-20"
          >
            <Image alt="#" className="" src={img5} width={20} height={20} />
            <h3>Account</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
