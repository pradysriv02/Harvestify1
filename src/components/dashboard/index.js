"use client";

import Card from "../card";
import { FaUsers } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
// import YearlyAnalyticsChart from "../YearlyAnalyticsChart";
// import VisitorsAnalytics from "../VisitorsAnalytics";
// import DeviceAnalytics from "../DeviceAnalytics";

export default function DashboardLayout({ allVisitors, allProducts }) {
  console.log(allProducts, allVisitors);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <Card
          icon={<FaUsers size={25} />}
          data={
            // allVisitors && allVisitors.length
            //   ? allVisitors.reduce(
            //       (acc, visitorItem) =>
            //         parseInt(acc + visitorItem.premiumUserNo),
            //       0
            //     )
            //   : 0
            0
          }
          label={"Total Premium Visitors"}
        />
        <Card
          data={0}
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          label={"Total Products"}
        />
        <Card
          data={
            // allProducts && allProducts.length
            //   ? allProducts.reduce(
            //       (acc, productItem) => parseInt(acc + productItem.sales),
            //       0
            //     )
            //   : 0
            0
          }
          label={"Total Sales"}
          icon={<BiMoneyWithdraw size={25} />}
        />
        <Card
          data={
            // allVisitors && allVisitors.length
            //   ? allVisitors.reduce(
            //       (acc, visitorItem) => parseInt(acc + visitorItem.visitors),
            //       0
            //     )
            //   : 0
            0
          }
          label={"Total Visitors"}
          icon={<BsFillPersonCheckFill size={25} />}
        />
      </div>
    </div>
  );
}
