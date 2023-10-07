import { Heading } from "../components";

const Reviews = () => {
  return (
    <div className="px-2 lg:px-5 py-10 mt-10">
      <div className="container mx-auto rounded-2xl bg-gradient-to-tr from-[#bc9feb13] to-[#37196813] dark:bg-gradient-to-tr dark:from-[rgba(255,255,255,0.05)] dark:to-[rgba(255,255,255,0.05)] p-5 lg:p-10 shadow-lg">
        <Heading position="left" text="What they say about us" />
        <div className="bg-gradient-to-tr from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.08)] shadow-lg rounded-xl p-4 lg:p-8 mt-10">
          <div className="text-center md:text-start">
            <div>
              <img
                src="/people.png"
                alt=""
                className="w-[80px] my-2 mx-auto md:mx-0"
              />
              <h2 className="text-lg">John Smith</h2>
              <p className="text-sm my-2">Ape Market Place</p>
              <h1 className="my-5 text-xl md:text-3xl">Excellent Service</h1>
            </div>
            <div></div>

            <p className="text-md text-gray-400">
              I have been using the IT solutions provider by this company for
              over a year now and I am extreemly satisfied with their services.
              Their team is highly professional and knowledgeable, and the
              always respond promptly to any issues or concerns I have. I would
              highly recommend their services to anyone looking for reliable and
              cefficient IT solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
