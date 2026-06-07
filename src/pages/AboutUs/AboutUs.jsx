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
        <h2 className="text-xl text-white">Software Engineer</h2>
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
         <div className="group border border-white/5 bg-base-100/5 backdrop-blur-sm p-4 rounded-xl hover:border-cyan-500/20 transition-all duration-300">
    <h2 className="text-md text-white font-medium group-hover:text-[#00FFFF] transition-colors duration-300">
        CSE Fundamentals with Phitron, Programming Hero
    </h2>
    
    <div className="flex flex-wrap items-center gap-3 mt-2">
        {/* Year Badge */}
        <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded">
            2022
        </span>
        
        {/* Certificate Verified Link */}
        <a 
            href="https://phitron.io/verification?validationNumber=PHBATCH147418321033" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#00FFFF] hover:underline bg-[#00FFFF]/10 px-2.5 py-0.5 rounded-full border border-[#00FFFF]/20 group-hover:bg-[#00FFFF] group-hover:text-black transition-all duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            View Certificate
        </a>
    </div>
</div>
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
              I am Khandokar Samadul Kabir, a Software Engineer with a strong foundation in full-stack application development and a passion for building scalable, efficient, and user-focused digital solutions. My expertise spans both frontend and backend technologies, allowing me to design, develop, and deploy complete web applications from concept to production.

On the frontend, I work with HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, and Tailwind CSS to create responsive and intuitive user interfaces. On the backend, I have experience developing robust applications using Python, Django, PHP, and modern database systems including PostgreSQL and MySQL.

My technical background includes Object-Oriented Programming (OOP), Data Structures, Algorithms, Database Design, and Software Architecture principles. I am committed to writing clean, maintainable code and continuously expanding my knowledge of modern software engineering practices and emerging technologies.

In addition to custom software development, I have extensive experience with WordPress development, including theme customization, plugin integration, and feature implementation. This versatility enables me to deliver end-to-end solutions tailored to both business and user requirements.

I enjoy solving complex problems, learning new technologies, and building software that creates meaningful value. My goal is to contribute to innovative projects, collaborate with talented teams, and grow as a software engineer while delivering high-quality products that make an impact.

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
