interface Props {
  text: string;
  subText?: string;
  position?: string;
}

const Heading = ({ text, subText, position }: Props) => {
  return (
    <div className={`text-${position}`}>
      <h1
        className={`text-2xl lg:text-5xl max-w-lg font-semibold my-3 ${
          !position && "mx-auto"
        }`}
      >
        {text}
      </h1>
      {subText && (
        <p className={`text-lg max-w-2xl my-5 ${!position && "mx-auto"}`}>
          {subText}
        </p>
      )}
    </div>
  );
};

export default Heading;
