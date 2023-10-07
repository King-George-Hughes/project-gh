interface Props {
  label: string;
  image: string;
}

const Choose = ({ label, image }: Props) => {
  return (
    <div className="w-1/2 lg:w-1/3 mb-5">
      <div className="bg-[#37196813] dark:bg-[#261F4D] rounded-lg p-5 mr-4">
        <img src={image} alt="" className="w-1/2" />
        <p className="text-gray-800 dark:text-gray-200 max-w-[100px]">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Choose;
