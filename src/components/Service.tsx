interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Service = ({ id, title, description, image }: Props) => {
  return (
    <div className="border-2 border-[#572c9ba6] hover:border-purple-400 rounded-2xl w-full lg:w-1/3 p-5 transition delay-50">
      <div className="bg-[#3719689f] p-5 rounded-xl">
        <img src={image} alt="" className="w-full" />
      </div>
      <h2 className="text-xl my-2 text-gray-100">{title}</h2>
      <p className="text-gray-400">
        {description}{" "}
        <a href="#" className="text-purple-700">
          Read More
          {id}
        </a>
      </p>
    </div>
  );
};

export default Service;
