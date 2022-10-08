type SkillItems = {
  name: string;
  icon: any;
};
interface Props {
  title: string;
  titleIcon: any;
  description: string;
  category: string;
  items: SkillItems[];
}

const SkillCard = ({
  title,
  titleIcon,
  description,
  category,
  items,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-start gap-5 max-w-[30rem] bg-[#ffffff52] dark:bg-darkGray border-[1px] dark:border-none shadow-sm dark:shadow-shadowDownward rounded-[15px] p-4 py-8">
      <div
        className={`${
          title === "Backend"
            ? "bg-yellow-500"
            : title === "Frontend"
            ? "bg-blue-600"
            : "bg-green-500"
        } hover:bg-purple-500 w-fit p-3 rounded-full z-[10] transition-all duration-400 ease-in-out`}
      >
        {titleIcon}
      </div>
      <p className="font-semibold text-xl text-gray-700 dark:text-gray-100">
        {title}
      </p>
      <p className="text-gray-700 dark:text-gray-100 font-Poppins text-center px-3">
        {description}
      </p>

      <div className="dark:border-[1px] dark:border-gray-700 relative w-[20rem] items-center h-fit flex-1 rounded-xl flex flex-col justify-around pr-5 py-4 pt-7 mt-8">
        <p className="bg-white dark:bg-darkGray font-semibold text-purple-500 absolute -top-4 ml-auto mr-auto left-0 right-0 w-fit px-3 text-[1.1rem]">
          {category}
        </p>
        {items.map((e, index) => (
          <div className="flex gap-4 items-center mb-3 w-[10rem]" key={index}>
            {/* ml-[27%] */}
            <img
              src={e.icon}
              className="w-[40px] hover:-translate-y-1 transltion duration-300 ease-linear"
              alt="skill icon"
            />

            <p className="text-gray-700 dark:text-gray-100 font-Poppins ">
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
