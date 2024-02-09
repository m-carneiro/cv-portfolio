import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

type SkillProps = {
  language?: string;
  frameworks: string[];
  proficiency?: string;
  directionLeft?: boolean;
};

export default function Skill({
  directionLeft,
  frameworks,
  language,
  proficiency,
}: SkillProps) {
  let image;
  switch (language) {
    case "java":
      image =
        "https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png";
      break;
    case "typescript":
      image =
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
      break;
    case "go":
      image =
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg";
      break;
    case "python":
      image =
        "https://banner2.cleanpng.com/20181128/cbr/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef921c53528.7857216715434365778078.jpg";
      break;
    case "rust":
      image =
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg";
      break;
    case "SAST":
      image = "https://attackflow.com/assets/img/sast/sast_1.png";
      break;
    case "DAST":
      image =
        "https://as2.ftcdn.net/v2/jpg/04/05/32/87/1000_F_405328724_vCjDZfRVpyz6eWlTzdtHgphinfUFfQ1R.jpg";
      break;
    case "Pentest":
      image =
        "https://bcdn.mindler.com/bloglive/wp-content/uploads/2016/08/06132948/Ethical-hacking-cover-pic-770x476.jpg";
      break;
    default:
      image =
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
      break;
  }

  return (
    <Tooltip 
      color="success"
      content={
        <div className={"flex flex-col text-center text-black"}>
          <div className="font-bold">{language}</div>
          <div className="text-tiny">
            {frameworks.join(", ").trimEnd()}
          </div>
        </div>
      } 
      classNames={{
        content: "p-5 capitalize font-bold"
      }}
    >

      <div className={"group relative flex cursor-pointer"}>
        <motion.img
          className={
            "rounded-full border border-gray-500 object-fit w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          }
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={image}
        />
        <div
          className={
            "absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0"
          }
        >
          <div className={"flex items-center justify-center h-full"}>
            <p className={"text-3xl font-bold text-black opacity-100"}>
              {proficiency}
            </p>
          </div>
        </div>
      </div>
    </Tooltip>
  );
}
