/* eslint-disable react/prop-types */
const HamburgerMenu = ({ setIsOpen, isOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`  absolute left-20  top-0 flex h-16 w-10 flex-col  items-center justify-center maxMd:left-6 ${
          isOpen ? "open " : ""
        } md:hidden`}
      >
        <button
          className={`pointer-default relative   z-[20] h-full border-none bg-none p-[10px] ${
            isOpen ? "hidden" : " "
          }`}
          onClick={toggleMenu}
        >
          <div className="bar my-1 h-[2px] w-[20px] bg-[#333]"></div>
          <div className="bar my-1  h-[2px] w-[20px] bg-[#333]"></div>
          <div className="bar my-1  h-[2px] w-[20px] bg-[#333]"></div>
        </button>
      </div>
    </>
  );
};

export default HamburgerMenu;
