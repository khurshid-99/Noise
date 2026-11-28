interface ICartProps {
  title: string;
  description: string;
  powerBy: string;
  titleStyle?: string;
}

const MediaCart = ({ title, description, powerBy, titleStyle }: ICartProps) => {
  return (
    <div className="w-360p aspect-360/300 bg-white rounded-16p p-20p ">
      <div className="flex items-center justify-center pb-20p border-b border-gray-13 h-90p ">
        <h2 className={` leading-13 text-center w-180p ${titleStyle} `}>
          {title}
        </h2>
      </div>
      <div className="pt-50p ">
        <p className="text-16 font-semibold text-center ">
          &rdquo;{description}&rdquo;.
        </p>
        <p className="text-12 text-center pt-6p ">
          -<strong>{powerBy}</strong>on REP
        </p>
      </div>
    </div>
  );
};

export default MediaCart;
