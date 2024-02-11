import GlobalState from "@/context";

import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";

import Authprovider from "../Authprovider/Authprovider";
// import NextAuthProvider from "@/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextAuthProvider> */}
        <GlobalState>
          <Authprovider>
            <div className="flex h-screen overflow-hidden bg-white">
              <Toaster position="bottom-center" />
              <Sidebar />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#F3F7F6]">
                <main className="h-full">
                  <div className="mx-auto h-full max-w-screen-2xl md:p-6 2xl:p-10 ">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </Authprovider>
        </GlobalState>
        {/* </NextAuthProvider> */}
      </body>
    </html>
  );
}
