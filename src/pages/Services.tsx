import { Heading, Service } from "../components";
import { service } from "../data/data";

const Services = () => {
  return (
    <div className="w-full px-4 py-5 text-center pb-20 mt-20 lg:mt-0">
      <div className="container mx-auto">
        <Heading
          text="Our Services"
          subText="We offer a range of services to help businesses and organizations leverage technlogy to acheive their goals and streamline their operations."
        />

        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-12 mt-14 text-start">
          {service.map((serve) => {
            const { id, title, description, image } = serve;
            return (
              <Service
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
              />
            );
          })}
        </div>

        <a
          className="inline-block mx-auto bg-none border-2 border-[#B06CEF] text-gray-900 dark:text-gray-300 py-2 px-4 rounded-sm my-10"
          href="#"
        >
          See More Services
        </a>
      </div>
    </div>
  );
};

export default Services;
