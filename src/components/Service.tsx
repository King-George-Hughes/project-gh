interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Service = ({ title, description, image }: Props) => {
  return (
    <div className="border-2 border-[#3719681f] dark:border-[#572c9ba6] hover:border-purple-400 rounded-2xl w-full p-5 transition delay-50">
      <div className="bg-[#37196813] dark:bg-[#3719689f] p-5 rounded-xl">
        <img src={image} alt="" className="w-full" />
      </div>
      <h2 className="text-xl my-2 text-gray-600 dark:text-gray-100">{title}</h2>
      <p className="text-gray-400">
        {description}{" "}
        <a href="#" className="text-purple-700">
          Read More
        </a>
      </p>
    </div>
  );
};

export default Service;
