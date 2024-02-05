import bitcollege from "../assets/bitcollege.png";
import mern from "../assets/mern.png";

const About = () => {
  return (
    <div id="About" className="py-10 bg-yellow-50">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">
          About <span className="text-yellow-500">Me</span>
        </h1>
        <div className="flex flex-col md:flex-row mt-6 gap-6 px-4">
          <div className="max-w-xl bg-white mx-auto p-6 border rounded-md shadow-lg">
            <div>
              <img className="rounded-md border" src={bitcollege} alt="bit" />
              <h1 className="text-2xl font-semibold my-3">BITian</h1>
              <p className="text-left text-lg my-3">
                Master of Computer Application (MCA) at Bangalore Institute of
                Technology
              </p>
            </div>
            <div className="text-lg font-semibold text-left my-3">
              Things i do:
            </div>
            <ul className="text-left my-3 text-lg">
              <li>📚 Academic Studies</li>
              <li>🚀 Development & Coding</li>
              <li>🤝 Networking</li>
              <li>🎓 Skill Development</li>
              <li>🏆 Extracurricular Activities</li>
            </ul>
          </div>
          <div className="max-w-xl bg-white mx-auto p-6 border rounded-md shadow-lg">
            <div>
              <img className="rounded-md border" src={mern} alt="mern" />
              <h1 className="text-2xl font-semibold my-3">
                MERN Stack Developer
              </h1>
              <p className="text-left text-lg my-3">
                Designing vibrant web applications with MERN for flawless
                functionality and visual appeal.
              </p>
            </div>
            <div className="text-lg font-semibold text-left my-3">
              Tech Stack:
            </div>
            <ul className="text-left my-3 text-lg">
              <li>🚀 Node.js | Express.js | mongoDB</li>
              <li>🌐 Vite + React.js | tailwind CSS</li>
              <li>🔧 Vs Code | Postman</li>
              <li>☁️ Render | Vercel</li>
              <li>🗳️ Git | GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
