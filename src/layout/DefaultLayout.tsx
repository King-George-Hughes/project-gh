import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { Outlet } from "react-router-dom";
import { BottomNavBar, Footer, NavBar } from "../components";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const DefaultLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-gray-50 dark:bg-gradient-to-tr from-[#020122] from-20% via-[#032442] to-[#1A012E] dark:border-gray-600 dark:text-gray-100">
      <NavBar />
      <div className="max-w-screen-xl mx-auto px-2">
        <Outlet />
        <BottomNavBar />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
