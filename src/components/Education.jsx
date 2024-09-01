import dbatulogo from "../assets/DBATU_Logo.jpeg";
import mg from "../assets/mahatmaGandhi.jpg"
const Education = () => {
  const college = [
    {
      id: 1,
      image: dbatulogo,
      name: "Dr.Babasaheb Ambedkar Technological University, Lonere - Raigad",
      year: "2021-2025",
      CGPA:" 7.7",
      course: "Bachelor of Technology(BTech) in IT",
      university: "Dr. Babasaheb Ambedkar Technological University",
    },
    {
      id: 2,
      image: mg,
      name: "Mahatma Gandhi Jr. College of Science Karmala, Solapur",
      year: "2020-2021",
      CGPA:" 9.3",
      course: "12th Standard",
      university: "Pune University",
    },
    {
      id: 3,
      image: mg,
      name: "Mahatma Gandhi  High School Karmala ,Solapur",
      year: "2018-2019",
      CGPA:" 8.4",
      course: "10th Standard",
      university: "Pune Univarsity",
    },
  ];
  return (
    <div id="Education" className="bg-gray-50 py-10">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">Education</h1>
        <div className="px-5">
          {college.map(({ id, image, name, year,CGPA, course, university }) => (
            <div
              key={id}
              className="flex flex-col gap-5 max-w-3xl mx-auto my-6 lg:flex-row p-3 border rounded-md shadow-md"
            >
              <div className="flex  justify-center items-center">
                <img
                  className="h-24 w-24 object-cover lg:h-40 lg:w-40"
                  src={image}
                  alt={name}
                />
              </div>
              <div className="flex flex-col  lg:text-left space-y-3 justify-center">
                <h1 className="text-xl lg:text-2xl font-semibold">{name}</h1>
                <p className="text-gray-700 ">{year}</p>
                <p className="text-gray-700 ">CGPA:{CGPA}</p>
                <p className="text-lg lg:text-xl font-semibold">{course}</p>
                <p className="font-semibold text-gray-700">{university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
