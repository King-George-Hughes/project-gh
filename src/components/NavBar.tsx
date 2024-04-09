const NavBar = () => {
  return (
    <nav className="w-full h-[50px] px-4 py-5 absolute">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B06CEF] to-[#4C62D8]">
            Revolt Technologies
          </span>
        </a>

        <ul className="hidden md:inline-flex items-center gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>

        <a
          className="bg-gradient-to-r from-[#B06CEF] to-[#4C62D8] text-white py-2 px-4 rounded-sm"
          href="#"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
