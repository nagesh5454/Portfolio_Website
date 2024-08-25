import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Education" },
    { id: 6, name: "Contact" },
  ];
  return (
    <div className="bg-gray-100 p-4 border-b fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Nagesh  M</h1>
        <ul className="md:flex hidden">
          {links.map(({ id, name }) => (
            <Link
              to={name}
              smooth
              duration={500}
              key={id}
              className="px-4 cursor-pointer font-medium duration-300 transition-all ease-in-out text-lg hover:text-yellow-500"
            >
              {name}
            </Link>
          ))}
        </ul>
        <div onClick={() => setMenu(!menu)} className="text-2xl flex md:hidden">
          {menu ? <IoMdClose /> : <IoMdMenu />}
        </div>
        {menu && (
          <ul className="flex md:hidden absolute top-16 left-0 justify-center items-center w-full h-screen space-y-4 text-2xl flex-col bg-gradient-to-b from-gray-100 to-gray-300">
            {links.map(({ id, name }) => (
              <Link
                onClick={() => setMenu(!menu)}
                to={name}
                smooth
                duration={500}
                key={id}
                className="px-4 cursor-pointer font-medium duration-300 transition-all ease-in-out  hover:text-yellow-500"
              >
                {name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
