import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";
import TextHover from "../../Components/Text/TextHover";

const skillData = [
  {
    id: 1,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Dark.svg",
  },
  {
    id: 2,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Django.svg",
  },
  {
    id: 3,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg",
  },
  {
    id: 4,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg",
  },
  {
    id: 5,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg",
  },
  {
    id: 6,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg",
  },
  {
    id: 7,
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg",
  },
  {
    id: 8,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/TailwindCSS-Dark.svg",
  },
  {
    id: 9,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/MaterialUI-Dark.svg",
  },

  {
    id: 11,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Redux.svg",
  },
  {
    id: 12,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Firebase-Dark.svg",
  },
  {
    id: 13,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/PostgreSQL-Dark.svg",
  },
  
 
  
 
  // { "id": 9, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg" },
  // { "id": 10, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/TailwindCSS-Dark.svg" },
  // { "id": 11, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/VSCode-Dark.svg" },
  // { "id": 12, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/Postman.svg" },
  // { "id": 13, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg" },
];

const skillData2 = [

  {
    id: 1,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/VSCode-Dark.svg",
  },
  {
    id: 2,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Postman.svg",
  },
  {
    id: 3,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg",
  },
  {
    id: 4,
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Vercel-Dark.svg",
  },


];

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto text-white p-2 md:p-0 md:py-20 my-auto ">
      <div className="text-center  ">
        <div className="pb-10 space-y-4">
          <h2 className="text-3xl">
            <TextHover>What i Do!</TextHover>
          </h2>
          <p className="md:w-1/2 sm:mx-12 md:mx-auto">
            👋Passionate full-stack developer with expertise in Django, React.js, Next.js,
             and PostgreSQL, eager to make a mark in the world of web development.
              I create robust and dynamic websites by leveraging the power 
              of modern technologies like Django for the backend, React.js/Next.js 
              for the frontend, PostgreSQL for the database management, Tailwind CSS, Material-UI, Ant Design for 
              Styling and Redux, Zustand for the State Management.
          </p>
        </div>
        <div className="grid max-w-screen-lg md:mx-auto mx-10   lg:grid-cols-8 md:grid-cols-6  grid-cols-4 justify-around gap-5">
          {skillData.map((data) => (
            <div className=" md:w-24" key={data.id}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className=" md:w-24">
                  <img className="mask mask-circle object-fit" src={data.img} />
                </div>
              </motion.div>{" "}
            </div>
          ))}

          {/* <img className='animate-bounce ' src="https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg" alt="" /> */}
        </div>
        <h3 className="text-3xl mt-10">Tools</h3>

        <div className="grid max-w-screen-md md:mx-auto mx-10  mt-10  lg:grid-cols-6 md:grid-cols-4 ml-10 grid-cols-3 justify-items-center gap-1">
         
          {skillData2.map((data) => (
            <div className=" md:w-24" key={data.id}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="w-16 mx-auto md:w-24">
                  <img className="mask mask-circle object-fit" src={data.img} />
                </div>
              </motion.div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
