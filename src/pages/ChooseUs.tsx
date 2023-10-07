import { Choose, Heading } from "../components";
import { choose } from "../data/data";

const ChooseUs = () => {
  return (
    <div className="px-5 py-10" id="choose-us">
      <div className="container mx-auto mb-10">
        <div className="border-2 border-[#3719681f] dark:border-purple-400 rounded-2xl p-5 flex flex-col lg:flex-row items-center justify-between gap-5">
          <img
            src="/whats-new.png"
            alt=""
            className="w-full md:w-1/2 lg:w-1/3"
          />

          <div className="-full lg:w-2/3">
            <Heading
              position="start"
              text="Why Choose Us"
              subText="We're passinate about providing reliable and innovative IT solutions to businesses of all sized. Our team of experienced professionals is dedicated to helping you achieve your business goals by leveraging the latest technology trends and best practices."
            />

            <div className="w-full flex items-start justify-evenly flex-wrap">
              {choose.map((chs) => {
                const { id, label, image } = chs;

                return <Choose key={id} label={label} image={image} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
