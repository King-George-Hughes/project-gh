import { BottomNavBar, Footer, NavBar } from "./components";
import { ChooseUs, Home, RecentWorks, Reviews, Services } from "./pages";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gradient-to-tr from-[#020122] from-20% via-[#032442] to-[#1A012E] dark:border-gray-600 dark:text-gray-100">
      <NavBar />
      <div className="max-w-screen-xl mx-auto px-2">
        <Home />
        <Services />
        <ChooseUs />
        <RecentWorks />
        <Reviews />
        <BottomNavBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
