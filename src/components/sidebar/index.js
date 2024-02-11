"use client";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";
import { useContext } from "react";
import { GlobalContext } from "@/context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiThreeLeaves } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

// import { useSession } from "next-auth/react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "croprecommend",
    label: "Crop Prediction",
    path: "/croprecommend",
    icon: <TbBrandProducthunt size={25} />,
  },
  {
    id: "diseaseprediction",
    label: "Disease Prediction",
    path: "/diseaseprediction",
    icon: <PiUsersFourLight size={25} />,
  },
  {
    id: "marketplace",
    label: "Market Place",
    path: "/marketplace",
    icon: <FaShop size={25} />,
  },
  {
    id: "fertilizer",
    label: "Fertlizer Recommend",
    path: "/fertilizer",
    icon: <GiMedicines size={25} />,
  },
];

export default function Sidebar() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  // const {status} = useSession()

  const pathName = usePathname();
  const router = useRouter();

  const handlenavigate = (getMenuItem) => {
    // if(status === 'unauthenticated') {
    //   router.push('/unauth-page')
    //   return
    // }
    router.push(`${getMenuItem.path}`);
  };

  return (
    <aside
      className={`absolute justify-between pt-3 pb-6 items-center left-0 top-0 z-9999 flex h-screen w-70 flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0
    ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
    `}>
      <div>
        <div className="flex items-center justify-between gap-2 px-10 py-5.5 lg:py-6.5">
          <Link
            href={"/"}
            className="text-green-700 font-black text-[32px] items-center justify-between flex gap-1">
            <GiThreeLeaves />
            Harvestify
          </Link>
        </div>
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <div>
              <ul className="mb-6 flex flex-col gap-5">
                {menuItems.map((menuItem) => (
                  <li key={menuItem.id}>
                    <label
                      onClick={() => handlenavigate(menuItem)}
                      className={`group relative cursor-pointer flex items-center gap-4 flex items-center rounded-sm py-4 px-6 rounded-xl text-white duration-300 ease-in-out hover:bg-graydark 
                             ${
                               (pathName.includes(menuItem.id) ||
                                 (pathName == "/" &&
                                   menuItem.id === "dashboard")) &&
                               "border-[.5px] border-green-200 bg-green-100"
                             }
                            `}>
                      <div className="text-green-700">{menuItem.icon}</div>
                      <div className="text-black">{menuItem.label}</div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex-end">
        <button
          onClick={() => router.push("/register")}
          className="inline-flex gap-1 items-center justify-center rounded-xl border-[.5px] border-gray-500 px-20 py-3 text-black">
          Logout
          <AiOutlineLogout />
        </button>
      </div>
    </aside>
  );
}
