import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <Link data-aos="fade-down-left" target="_blank" to="https://github.com/skkhandokar">
        <span className="hover:text-[#00FFFF]  hover:scale-150">
          {/* text-[#4078c0] */}
          <FaGithub />
        </span>
      </Link>

      <Link data-aos="fade-down-left" target="_blank" to="https://www.linkedin.com/in/skkhandokar/">
        <span className="hover:text-[#00FFFF]    hover:scale-150">
          {/* text-[#4a93f3]  */}
          <FaLinkedin />
        </span>
      </Link>
    
    </>
  );
};

export default Navbar;
