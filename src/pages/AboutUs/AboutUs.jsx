import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { SiMongodb, SiExpress,SiPython, SiDjango,SiPostgresql } from "react-icons/si";


const AboutUs = () => {
  const data = [
    {
      label: "Main skills",
      value: "mainSkills",
      desc: <>
        <h2 className="text-xl text-white">WEB DEVELOPER</h2>
        <hr />
        <div className="space-y-2 mt-2">
          <span className="flex gap-2 items-center text-3xl text-green-600">

            <SiPython /><progress className="progress progress-success w-full md:w-56" value={95} max="100"></progress>
          </span>
          <span className="flex gap-2 items-center text-3xl text-red-400">

            <SiDjango /><progress className="progress progress-error w-full md:w-56" value={92} max="100"></progress>
          </span>
          <span className="flex gap-2 items-center text-3xl text-[#00FFFF]">

            <FaReact className="animate-spin" /><progress className="progress progress-info w-full md:w-56" value={90} max="100"></progress>
          </span>

         
          <span className="flex gap-2 items-center text-3xl text-green-800">

            <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg" /><progress className="progress  progress-primary w-full md:w-56" value={88} max="100"></progress>
          </span>
          <span className="flex gap-2 items-center text-3xl text-green-800">

          <SiPostgresql /><progress className="progress  progress-success w-full md:w-56" value={84} max="100"></progress>
           </span>
        </div>


        {/* html5 css3 javascript
        git
        react tailwind nodejs express firebase mongodb nextjs */}
      </>,
    },
    {
      label: "Education",
      value: "education",
      desc: <>
        <div>
          <h2 className="text-md text-white ">
          Bachelor of Social Science in Economics  <br />2015-16<br/> <span className="text-gray-300"> National University, Bangladesh</span>
           
            
          </h2>
        </div>

      </>,
    },
    {
      label: "Professional Course",
      value: "course",
      desc: <>
        <div>
          <h2 className="text-md text-white ">
          CSE Fundamentals with Phitron, Programming Hero   <br />2022<br/> <span className="text-gray-300"> </span>
           
            
          </h2>
        </div>

      </>,
    },

    {
      label: "Awards",
      value: "awards",
     
      desc: <><div>
        <span className="flex gap-2 items-center text-3xl text-green-800">

<img className="w-[450px] mb-5 flex justify-center"  src="./src/assets/images/project_show_2024.jpg"/>
</span>
        <h2 className="text-md text-white ">
        I am proud to share that I achieved 4th place in the highly competitive Programming Hero Project Show Contest 2024. This accomplishment stands as a testament to my
       dedication, skill, and passion for programming and web development.
       </h2>
        </div></>,
    },
  ];
  return (
    <div
      id="aboutUs"
      className=" text-white items-center px-3 md:px-0  justify-between mx-auto container"
    >



      <div className="grid grid-cols-1 lg:grid-cols-3  ">
        <div className="text-right md:py-5 hidden md:block  lg:py-20 lg:mr-5">
          <img
            className="rounded-md h-[460px]"
            src="./src/assets/images/me.jpeg"
            alt=""
          />
        </div>
        <div className="col-span-2  md:py-5 lg:py-16 py-2  space-y-6">
          <div className="space-y-6 mt-10 md:mt-0">
            <h2 className="text-4xl uppercase">About Me</h2>
            <p className="text-justify">
              Hi! I am Khandokar Samadul Kabir, a versatile Web Developer with extensive experience in both web and software development. Currently, I am focusing on web development and have successfully completed over 10 web projects. My technical skills include HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, and Tailwind CSS. I am adaptable and eager to learn new technologies and features in programming.

Additionally, I have a solid background in C, C++, Python, and Django. I possess a strong understanding of Object-Oriented Programming, Data Structures, Algorithms, and database management systems such as PostgreSQL and MySQL.

Introducing myself as your go-to WordPress developer extraordinaire, I bring a deep-rooted passion for WordPress themes and plugins. I have a proven track record of crafting and customizing WordPress sites, implementing innovative features and functionalities to enhance user experiences. My proficiency in PHP, along with my comprehensive knowledge of HTML, CSS, JavaScript, and React.js, ensures that I can deliver tailored solutions that meet your digital needs.

Trust in my expertise to transform your digital vision into reality.
            </p>
          </div>
          <Tabs id="custom-animation" defaultIndex='mainSkills' value="mainSkills">
            <TabsHeader className="bg-[#00FFFF] w-96">
              {data.map(({ label, value }) => (
                <Tab key={value}  value={value || "mainSkills"}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc}) => (
                <TabPanel key={value} value={value}>
                  {desc} 
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
