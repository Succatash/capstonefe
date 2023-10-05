/* eslint-disable react/prop-types */
const HamburgerMenu = ({ setIsOpen, isOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`  top-0 h-16 w-10 flex-col items-center justify-center  maxMd:absolute maxMd:flex ${
          isOpen ? "open " : ""
        }`}
      >
        <button
          className={`pointer-default relative   z-[20] h-full border-none bg-none p-[10px] ${
            isOpen ? "hidden " : " "
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
