import React from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="fixed w-full z-60 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <a href="#">
            <span className="text-white">Dipak</span> <span className="text-blue-400">Patil</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative group hover:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative group hover:text-blue-400 transition-duration-300"
          >
            <span className="text-white">About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative group hover:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="relative group hover:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#internship"
            className="relative group hover:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Internship</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative group hover:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {/* Mobile Menus */}
      {showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center space-y-6 mt-6 bg-dark-100 py-6 rounded-lg">
          <a
            onClick={() => setShowMenu(false)}
            href="#home"
            className="relative group hover:text-blue-400 active:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#about"
            className="relative group hover:text-blue-400 active:text-blue-400 transition-duration-300"
          >
            <span className="text-white">About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#skills"
            className="relative group hover:text-blue-400 active:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#projects"
            className="relative group hover:text-blue-400 active:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#contact"
            className="relative group hover:text-blue-400 active:text-blue-400 transition-duration-300"
          >
            <span className="text-white">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { FaBars, FaXmark } from "react-icons/fa6";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = React.useState(false);

//   const navLinks = ["home", "about", "skills", "projects", "contact"];

//   const renderLinks = (isMobile = false) =>
//     navLinks.map((link) => (
//       <a
//         key={link}
//         href={`#${link}`}
//         onClick={() => setShowMenu(false)}
//         className={`relative group hover:text-blue-400 transition duration-300 ${
//           isMobile ? "block text-lg" : ""
//         }`}
//       >
//         <span className="capitalize">{link}</span>
//         <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//       </a>
//     ));

//   return (
//     <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">

//         {/* Logo */}
//         <div className="text-3xl font-bold">
//           <a href="#">
//             Dipak <span className="text-blue-400">Patil</span>
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-10">
//           {renderLinks()}
//         </div>

//         {/* Mobile Icon */}
//         <div className="md:hidden">
//           {showMenu ? (
//             <FaXmark
//               onClick={() => setShowMenu(false)}
//               className="text-2xl cursor-pointer"
//             />
//           ) : (
//             <FaBars
//               onClick={() => setShowMenu(true)}
//               className="text-2xl cursor-pointer"
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {showMenu && (
//         <div className="md:hidden bg-dark-300 flex flex-col items-center justify-center space-y-6 mt-6 bg-dark-100 py-6 rounded-lg">
//           {renderLinks(true)}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
