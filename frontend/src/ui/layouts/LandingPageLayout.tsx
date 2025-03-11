import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default LandingPageLayout;
