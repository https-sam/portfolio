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
    <div className="flex flex-col items-center justify-start gap-5 max-w-[30rem] ">
      <div className="bg-green-500 w-fit p-3 rounded-full">{titleIcon}</div>
      <p className="font-semibold text-xl text-gray-700 dark:text-gray-100">
        {title}
      </p>
      <p className="text-gray-700 dark:text-gray-100 font-Poppins text-center">
        {description}
      </p>

      <div className="border-[2px] relative w-[20rem] h-fit rounded-xl flex flex-col justify-center pr-5 py-4 pt-7 mt-8">
        <p className="bg-white dark:bg-gray-800 font-semibold text-purple-500 absolute -top-4 ml-auto mr-auto left-0 right-0 w-fit px-3 text-[1.1rem]">
          {category}
        </p>
        {items.map((e) => (
          <div className="flex gap-4 items-center text-start ml-[27%] mb-3">
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
