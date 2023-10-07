interface Props {
  label: string;
  image: string;
  date: string;
}

const Work = ({ label, image, date }: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="border-2 border-[#37196813] dark:border-[#1f1c55] bg-[#37196813] dark:bg-[#151339] hover:border-purple-400 rounded-2xl p-5 mb-10 mx-3 transition delay-50">
        <div className="bg-gradient-to-br from-[rgba(255,255,255,0.5)] via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.7)] dark:bg-gradient-to-br dark:from-[rgba(255,255,255,0.1)] dark:via-[rgba(255,255,255,0.2)] dark:to-[rgba(255,255,255,0.3)] p-5 rounded-xl">
          <img src={image} alt="" className="w-full" />
        </div>
        <h2 className="text-xl my-2 text-gray-800 dark:text-gray-100">
          {label}
        </h2>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default Work;
