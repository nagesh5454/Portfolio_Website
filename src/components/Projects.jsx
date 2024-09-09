// import sgap from "../assets/sgpa.png";
// import mernAuth from '../assets/mernauth.png'
// import todoApp from '../assets/todo.png'

// const Projects = () => {
//   const project = [
//     {
//       id: 1,
//       image: sgap,
//       title: "Job Portal",
//       desc: "Built a web app with the MERN stack to replace manual SGPA calculation in Excel sheets. Students now enter their marks online and get instant results. This saves time, reduces errors, and improves data management for both students and staff.",
//       stack: [
//         "Node.js | Express.js | MongoDB",
//         "Vite + React.js Tailwind CSS",
//         "VS Code | Postman",
//         "Render | Netlify",
//       ],
//       liveLink: "https://sgpa-calculator-by-ajith.netlify.app/1stsem",
//       FrontendLink: "https://github.com/Ajith-M-001/SGPA-frontend",
//       BackendLink: "https://github.com/Ajith-M-001/SGPA-backend",
//     },
//     {
//       id: 2,
//       image: mernAuth,
//       title: "Instagram Clone",
//       desc: "Secure full-stack app with user registration, login & profile management. Redux & React Router handle state & navigation, while JWTs ensure secure authentication. Firebase stores profile pics & Tailwind CSS keeps it stylish.",
//       stack: [
//         "Node.js | Express.js | MongoDB",
//         "Vite + React.js Tailwind CSS | redux Toolkit | fireBase Storage",
//         "VS Code | Postman",
//         "Render ",
//       ],
//       liveLink: "https://mernauth-backend-pk1e.onrender.com/",
//       FrontendLink: "https://github.com/Ajith-M-001/mern-Auth",
//       BackendLink: "https://github.com/Ajith-M-001/mern-Auth",
//     },
//     {
//       id: 3,
//       image: todoApp,
//       title: "E-Commerce We",
//       desc: "Creating a TODO app with the MERN stack, Axios facilitates smooth communication between the frontend and backend, ensuring real-time updates. Featuring CRUD operations, our app offers a comprehensive solution for task management.",
//       stack: [
//         "Node.js | Express.js | MongoDB",
//         "Vite + React.js Tailwind CSS ",
//         "VS Code | Postman",
//         "Render",
//       ],
//       liveLink: "https://todoapp-frontend-h3kz.onrender.com/",
//       FrontendLink: "https://github.com/Ajith-M-001/todoApp-frontend",
//       BackendLink: "https://github.com/Ajith-M-001/todoApp-backend",
//     },
//   ];
//   return (
//     <div id="Projects" className="py-10 bg-gray-50">
//       <div className="container mx-auto mt-8 text-center">
//         <h1 className="text-4xl font-semibold">Projects</h1>
//       </div>
//       <div className="grid lg:grid-cols-3 gap-5 px-5 mt-5 place-items-center lg:place-items-stretch">
//         {project.map(
//           ({
//             id,
//             image,
//             title,
//             desc,
//             stack,
//             liveLink,
//             FrontendLink,
//             BackendLink,
//           }) => (
//             <div
//               key={id}
//               className="max-w-md flex flex-col justify-between mx-auto p-5 border rounded-md shadow-md"
//             >
//               <div>
//                 <img className="rounded-md border" src={image} alt={title} />
//                 <h1 className="text-2xl font-semibold text-center  my-3">
//                   {title}
//                 </h1>
//                 <p className="text-justify my-3">{desc}</p>
//               </div>
//               <div className="text-lg font-semibold my-3">Teck Stack:</div>
//               <ul className="my-3 text-lg">
//                 {stack.map((tech, index) => (
//                   <li key={index + 1}>🚀 {tech}</li>
//                 ))}
//               </ul>
//               <div className="flex gap-3 text-sm flex-col lg:flex-row text-center justify-between my-3">
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-100 border border-green-200 text-green-700 hover:bg-green-200 px-4 py-2 rounded-sm"
//                   href={liveLink}
//                 >
//                   Live Deployement
//                 </a>
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-100 border border-blue-200 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-sm"
//                   href={FrontendLink}
//                 >
//                   Frontend Code
//                 </a>
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-100 border border-blue-200 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-sm"
//                   href={BackendLink}
//                 >
//                   Backend Code
//                 </a>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;



// import sgap from "../assets/sgpa.png";
import ecommrece from "../assets/ECommerceWebsite.png";
import youtubeClone from "../assets/YoutubeClone.png";
import geminAI from "../assets/GeminiAI.png";
import instaClone from "../assets/InstagramClone.png"
import jobportal from "../assets/JobPortal.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: jobportal,
      title: "Job Portal",
      desc: "I built a web app using the MERN stack to streamline the job application process for both candidates and recruiters. Candidates can easily apply for jobs, track their application status, and receive instant updates, improving convenience and reducing errors. On the admin side, recruiters can create and post job openings, as well as manage applications by accepting or rejecting candidates, which enhances data management and saves time for both job seekers and employers.",
      stack: [
        "Vite + React.js | Tailwind CSS",
        "Node.js | Express.js | MongoDB",
        "VS Code | Postman",
        "Render ",
      ],
      liveLink: "",//Add Live Link
      sourceCode: "https://github.com/nagesh5454/JobPortal", // Add Github Source Code Link
    },
    {
      id: 2,
      image: instaClone,
      title: "Instagram Clone",
      desc: "Built a web app with the MERN stack to enhance the social media experience. Users can now create accounts, share posts, like and comment on content, and follow other users. This fosters seamless interaction, instant content sharing, and a more engaging social media environment for users.",
      stack: [
        "Vite + React.js | Tailwind CSS | Redux Toolkit | ",
        "Node.js | Express.js | MongoDB",
        "VS Code | Postman",
        "Render",
      ],
      liveLink: "https://instagram-clone-a9ip.onrender.com/",//Add Live Link
      sourceCode: "https://github.com/nagesh5454/Instagram_Clone", // Add Github Source Code Link
    },
    {
      id: 2,
      image: ecommrece,
      title: "ECommerce Website",
      desc: "Developed a web app using the MERN stack to elevate the online shopping experience. Users can seamlessly browse through products, make secure purchases, and receive immediate order confirmations. This approach not only saves time and minimizes errors but also enhances inventory management for store owners, ensuring a more efficient and satisfying experience for both customers and businesses.",
      stack: [
        "Vite + React.js | Tailwind CSS | Redux Toolkit | ",
        "Node.js | Express.js | MongoDB",
        "VS Code | Postman",
        "Render",
      ],
      liveLink: "",//Add Live Link
      sourceCode: "", // Add Github Source Code Link
    },
    {
      id: 2,
      image: geminAI,
      title: "Gemini AI Clone ",
      desc: "Built a web app with the MERN stack to replicate the core functionalities of Gemini AI. Users can now interact with AI-driven tools, automate tasks, and analyze data insights in real-time. This saves time, reduces errors, and enhances decision-making for both individuals and businesses.",
      stack: [
        "Vite + React.js | Tailwind CSS | Redux Toolkit | ",
        "Node.js | Express.js | MongoDB",
        "VS Code | Postman",
        "Render",
      ],
      liveLink: "",//Add Live Link
      sourceCode: "https://github.com/nagesh5454/Gemini-Clone", // Add Github Source Code Link
    }
   ,
    {
      id: 2,
      image: youtubeClone,
      title: "Youtube Clone",
      desc: "Developing a YouTube Clone using React.js and Tailwind CSS, our app offers a responsive and intuitive user interface. Leveraging React.js for dynamic content rendering and Tailwind CSS for sleek design, the clone replicates core YouTube features, providing users with a seamless video browsing and viewing experience.",
      stack: [
        "Vite + React.js | Tailwind CSS",
        "VS Code | Git",
        "Versal",
      ],
      liveLink: "https://youtubeclone-lilac.vercel.app/",//Add Live Link
      sourceCode: "https://github.com/nagesh5454/YouTube-Clone", // Add Github Source Code Link
    },
  ];

  return (
    <div id="Projects" className="py-10 bg-gray-50">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">Projects</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 px-5 mt-5 place-items-center lg:place-items-stretch">
        {projects.map(({ id, image, title, desc, stack, liveLink, sourceCode }) => (
          <div
            key={id}
            className="max-w-md flex flex-col justify-between mx-auto p-5 border rounded-md shadow-md"
          >
            <div>
              <img className="rounded-md border" src={image} alt={title} />
              <h2 className="text-2xl font-semibold text-center my-3">{title}</h2>
              <p className="text-justify my-3">{desc}</p>
            </div>
            <div className="text-lg font-semibold my-3">Tech Stack:</div>
            <ul className="my-3 text-lg">
              {stack.map((tech, index) => (
                <li key={index} className="flex items-center">
                  🚀 {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 text-sm flex-col lg:flex-row text-center justify-between my-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 border border-green-200 text-green-700 hover:bg-green-200 px-4 py-2 rounded-sm"
                href={liveLink}
              >
                Live Deployment
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 border border-blue-200 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-sm"
                href={sourceCode}
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
