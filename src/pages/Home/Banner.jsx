import profileImg from "../../assets/images/ashiq.png";
import TextHover from "../../Components/Text/TextHover";

const resumePdf_URL = "https://drive.google.com/file/d/10TnUopZzxs9-ZsY5GD0dFR3KFlf_bfho/view?usp=drive_link";
const Banner = ({ handlePageChange }) => {
  const downloadPdf = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="overscroll-none text-white " id="home">
      <div className="absolute z-0 text-9xl font-extrabold opacity-10 w-full bottom-0">
        <div className="relative  flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className=" mx-96"> Khandokar Samadul Kabir</span>
          </div>

          <div className="absolute  py-12 animate-marquee2 whitespace-nowrap">
            <span className=" mx-96">Khandokar Samadul Kabir</span>
          </div>
        </div>
      </div>

      <div className="min-h-screen  md:flex flex md:flex-row flex-col-reverse items-center justify-start md:justify-between mx-auto container">
        {/* <div className="md:flex gap-5 absolute hidden top-0 py-10 text-4xl  ">
          <Navbar />
        </div> */}
        <div className="space-y-6 mb-20 mt-5 md:mt-0 z-20 ">
          <h2 className="text-2xl block md:hidden uppercase font-bold">
          Khandokar{" "}
            <span className="text-[#00FFFF]">
              <TextHover> Samadul Kabir</TextHover>
            </span>
          </h2>
          <h2 className="md:text-6xl text-5xl font-extrabold">
            <span className="text-[#00FFFF]">WEB</span> DEVELOPER
          </h2>
          <div className="flex   gap-5">
            <button
              onClick={() => {
                downloadPdf(resumePdf_URL);
              }}
              className="btn text-white hover:text-[#00FFFF] btn-outline"
            >
              GET RESUME
            </button>

            {/* <button
              onClick={() => handlePageChange("contact")}
              className="btn  text-[#00FFFF] btn-outline"
            >
              CONTACT ME
            </button> */}
            <a
              href="#Contact"
              className="btn  text-[#00FFFF] btn-outline"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        <div
          data-aos="flip-fade-up"
          className="h-96 p-10 mask mask-hexagon bg-[#00FFFF] "
          // className="bg-red-400  bg-clip-padding rounded-e-full rounded-s-badge  p-10"
        >
          {/* <img
            className="md:h-96   h-[600px] w-full mx-auto "
            src={profileImg}
            alt=""
          /> */}

          <img className="h-96 pr-20" src={profileImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
