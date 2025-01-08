import profilepic from "../assets/myphotoN.jpg";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div id="Home" className="py-10 bg-gray-50 ">
      <div className="container flex flex-col lg:flex-row-reverse mx-auto mt-12 text-center">
        <div className="flex lg:w-1/2 justify-center mb-6 lg:mb-0">
          <img
            className="h-52 w-52 md:h-72 md:w-72 lg:w-96 lg:h-96 rounded-full object-cover"
            src={profilepic}
            alt="profile"
          />
        </div>
        <div className="lg:w-1/2 lg:flex lg:flex-col justify-center">
          <div className="text-lg space-y-3 lg:text-left lg:text-2xl leading-normal md:leading-10">
            <h1>Hello!</h1>
            <p>
              My name is,{" "}
              <span className="text-2xl lg:text-4xl font-semibold">
                Nagesh Mane
              </span>
            </p>
            <p className="text-justify px-5 lg:px-0 ">
              I&apos;m an aspiring{" "}
              <span className="text-xl md:text-2xl font-semibold">
                Software developer,
              </span>{" "}
              with a solid understanding of Data Structures and Algorithms in
              Java, and equipped with skills in MongoDB, Express.js, React.js,
              and Node.js. I am seeking opportunities to gain practical
              experience and grow within the field of web development.
            </p>
          </div>
          <div className="flex justify-center my-2 text-2xl space-x-3 text-gray-700 lg:justify-start lg:text-3xl">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              href="https://www.linkedin.com/in/nagesh-mane/"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              href="https://github.com/nagesh5454"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              href="https://www.geeksforgeeks.org/user/nageshmane20062003/"
            >
              <SiGeeksforgeeks />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              href="https://leetcode.com/u/nageshmane_14606/"
            >
              <SiLeetcode />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              href="https://www.instagram.com/nageshmane.14606/"
            >
              <FaInstagramSquare />
            </a>
          </div>
          <div className="flex space-x-3 justify-center lg:justify-start">
            <Link
              duration={500}
              smooth
              className="bg-yellow-500 hover:opacity-80 px-4 py-2 rounded-sm text-white font-semibold"
              to={"Contact"}
            >
              Contact Me
            </Link>
            <a
              className="bg-yellow-500 hover:opacity-80 px-4 py-2 rounded-sm text-white font-semibold flex items-center"
              href="https://drive.google.com/file/d/1HfiwEXHa2CzKSBszensVqswrFOIpbrS4/view?usp=sharing" // Replace 'your-file-id' with the actual file ID from your Google Drive link
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Ensures security for external links
            >
              Resume{" "}
              <span className="text-2xl ml-4">
                <MdDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
