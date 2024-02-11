"use client";

import Card from "../card";
import { FaUsers } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosThunderstorm } from "react-icons/io";
import { CiTempHigh } from "react-icons/ci";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsDropletFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import VisitorsAnalytics from "../VisitorsAnalytics";
// import YearlyAnalyticsChart from "../YearlyAnalyticsChart";
// import VisitorsAnalytics from "../VisitorsAnalytics";
// import DeviceAnalytics from "../DeviceAnalytics";

export default function DashboardLayout({ allVisitors, allProducts }) {
  return (
    <div className="flex h-full flex-col p-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <Card icon={<WiHumidity size={25} />} data={"55%"} label={"Humidity"} />
        <Card
          data={"12 g/m3"}
          icon={<BsDropletFill size={25} />}
          label={"Moisture"}
        />
        <Card
          data={"19°C"}
          label={"Temperature"}
          icon={<FaTemperatureHigh size={25} />}
        />
        <Card data={"5 Km/hr"} label={"Wind"} icon={<FaWind size={25} />} />
      </div>
      <div className="flex flex-1 pt-2 gap-2">
        <div className="flex-1 p-2 bg-white rounded-lg border-stroke shadow">
          <VisitorsAnalytics />
        </div>
        <div className="flex-3 gap-2 flex flex-col">
          <div className="flex-1">
            <div className="rounded-lg flex h-full items-center border-stroke bg-white py-6 px-8 gap-4 shadow">
              <div className="bg-green-100 gap-2 p-4 flex text-green-700 items-center justify-center rounded-full bg-meta-2">
                <IoIosThunderstorm size={25} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-black">
                    Thunderstorms
                  </h4>
                  <h4 className="text-2xl font-bold text-black">Expected</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-lg flex h-full items-center border-stroke bg-white py-6 px-8 gap-4 shadow">
              <div className="bg-green-100 gap-2 p-4 flex text-green-700 items-center justify-center rounded-full bg-meta-2">
                <CiTempHigh size={25} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-500"></span>
                  <h4 className="text-2xl font-bold text-black">
                    Soil pH level:
                  </h4>
                  <h4 className="text-2xl font-bold text-black">Normal</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
