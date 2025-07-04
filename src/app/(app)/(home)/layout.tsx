import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}
export default function layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
}
