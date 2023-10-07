const Home = () => {
  return (
    <div className="w-full h-[780px] lg:h-screen px-4 py-5 flex items-center justify-center">
      <div className="container mx-auto gap-5 lg:gap-20 flex flex-col md:flex-row items-center justify-center mt-32 lg:mt-0">
        <div className="w-full lg:w-1/2 text-center lg:text-start pt-20 lg:pt-0">
          <h1 className="text-2xl lg:text-5xl max-w-lg font-semibold my-3">
            Simplify Your Business Operations with Our Solutions
          </h1>
          <p className="text-lg max-w-lg my-5">
            Streamline your workflows and boost productivity with our innovative
            solutions designed to meet your unique business
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-5 my-10">
            <a
              className="bg-gradient-to-r from-[#B06CEF] to-[#4C62D8] text-white py-2 px-4 rounded-sm"
              href="#"
            >
              Get in Touch
            </a>
            <a
              className="bg-none border-2 border-[#B06CEF] text-gray-900 dark:text-gray-300 py-2 px-4 rounded-sm"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img src="/get-started.png" alt="" className="w-full max-w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
