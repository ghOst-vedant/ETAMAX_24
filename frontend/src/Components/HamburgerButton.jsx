import React from "react";

const HamburgerButton = ({ status, setStatus }) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <>
      <button
        className="flex flex-col h-12 w-12 rounded justify-center items-center group "
        onClick={() => setStatus(!status)}
      >
        <div
          className={`${genericHamburgerLine} ${
            status && "rotate-45 translate-y-3"
          }`}
        />
        <div className={`${genericHamburgerLine} ${status && "opacity-0"}`} />
        <div
          className={`${genericHamburgerLine} ${
            status && "-rotate-45 -translate-y-3"
          }`}
        />
      </button>
    </>
  );
};

export default HamburgerButton;
