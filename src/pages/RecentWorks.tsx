import { Heading, Work } from "../components";
import { work } from "../data/data";

const RecentWorks = () => {
  return (
    <div className="px-5 py-10" id="recent-works">
      <div className="container mx-auto text-center">
        <Heading
          text="Our Recent Projects"
          subText="Here you ill find a list of out recent works that showcase our skills abd expertise."
        />

        <div className="w-full flex items-start justify-evenly flex-wrap mt-14 text-start">
          {work.map((wrk) => {
            const { id, label, date, image } = wrk;
            return <Work key={id} label={label} date={date} image={image} />;
          })}
        </div>

        <a
          className="inline-block mx-auto bg-none border-2 border-[#B06CEF] text-gray-900 dark:text-gray-300 py-2 px-4 rounded-sm my-50"
          href="#"
        >
          See More Works
        </a>
      </div>
    </div>
  );
};

export default RecentWorks;
