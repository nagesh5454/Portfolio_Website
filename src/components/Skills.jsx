import htmlImage from "../assets/html5.png";
import cssImage from "../assets/css3.png";
import jsImage from "../assets/javascript.png";
import reactImage from "../assets/reactjs.png";
import viteImage from "../assets/vite.png";
import tailwindImage from "../assets/tailwind.png";
import reduxImage from "../assets/redux.png";
import nodeImage from "../assets/nodejs.png";
import expressImage from "../assets/expressjs.png";
import mongoDBImage from "../assets/mongodb.png";
import gitImage from "../assets/git.png";
import githubImage from "../assets/github.png";

const Skills = () => {
  const skill = [
    { id: 1, image: htmlImage, name: "html" },
    { id: 2, image: cssImage, name: "css" },
    { id: 3, image: jsImage, name: "js" },
    { id: 4, image: reactImage, name: "reactImage" },
    { id: 5, image: viteImage, name: "vite" },
    { id: 6, image: tailwindImage, name: "tailwind" },
    { id: 7, image: reduxImage, name: "redux" },
    { id: 8, image: nodeImage, name: "node" },
    { id: 9, image: expressImage, name: "express" },
    { id: 10, image: mongoDBImage, name: "mongodb" },
    { id: 11, image: gitImage, name: "git" },
    { id: 12, image: githubImage, name: "github" },
  ];
  return (
    <div id="Skills" className="bg-yellow-50 py-10">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">
          My <span className="text-yellow-500">Skills</span>
        </h1>
        <div className="max-w-xl mx-auto my-10 px-5">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">
            {skill.map(({ id, image, name }) => (
              <img
                key={id}
                className="h-fit w-fit object-cover"
                src={image}
                alt={name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
