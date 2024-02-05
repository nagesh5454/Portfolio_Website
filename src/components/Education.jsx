import bitlogo from "../assets/bit.png";
import sabs from "../assets/sabs.png";

const Education = () => {
  const college = [
    {
      id: 1,
      image: bitlogo,
      name: "Bangalore Institute of Technology",
      year: "2021-2023",
      course: "Master of Computer Application (MCA)",
      university: "Visvesvaraya Technological University",
    },
    {
      id: 2,
      image: sabs,
      name: "Seshadripuram Academy of Business Studies",
      year: "2017-2020",
      course: "Bachelor of Computer Applications (BCA)",
      university: "Bangalore University",
    },
    {
      id: 3,
      image: sabs,
      name: "Seshadripuram Independent Pre-University College",
      year: "2016-2017",
      course: "PCMC - 2nd Year",
      university: "Bangalore University",
    },
  ];
  return (
    <div id="Education" className="bg-gray-50 py-10">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">Education</h1>
        <div className="px-5">
          {college.map(({ id, image, name, year, course, university }) => (
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
