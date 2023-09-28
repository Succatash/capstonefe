import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PersonalForm from "./forms/personalForm";
import BusinessForm from "./forms/businessForm";

const Register = () => {
  const navigate = useNavigate();
  const [businessOrPersonal, setBusinessOrPersonal] = useState(true);
  const dualButtonRef = useRef();

  return (
    <>
      <div className="   maxSM:py-3 relative flex h-full flex-col items-center justify-center">
        <div className=" flex w-[413px] min-w-[150px] flex-col items-center justify-center">
          {businessOrPersonal ? (
            <h1
              className="maxSm:w-full maxSm:text-center  mb-4 mt-8  self-start text-left text-fs30px font-semibold
            "
            >
              Create Personal Account
            </h1>
          ) : (
            <h1 className="maxSm:text-center maxSm:w-full  mb-4 mt-8 self-start font-sans text-fs30px font-semibold subpixel-antialiased">
              Create Business Account
            </h1>
          )}

          <div
            className="maxSm:w-10/12 relative  mb-1 flex w-w407px  rounded-thirtypx bg-transparent  ring-[1px] ring-black ring-offset-2"
            ref={dualButtonRef}
          >
            <label
              className="absolute left-0 top-0 h-full w-6/12 rounded-thirtypx  bg-aeroBlue pt-1 text-center text-white outline outline-transparent"
              onClick={() => {
                dualButtonRef.current.children["1"].classList.remove(
                  "bg-aeroBlue",
                  "text-white",
                );
                dualButtonRef.current.children["1"].classList.add(
                  "bg-transparent",
                  "text-black",
                );
                dualButtonRef.current.children["0"].classList.remove(
                  "bg-transparent",
                  "text-black",
                );
                dualButtonRef.current.children["0"].classList.add(
                  "bg-aeroBlue",
                  "text-white",
                );
                setBusinessOrPersonal(true);
              }}
            >
              Personal
            </label>

            <label
              className="absolute right-0 top-0  h-full w-6/12 rounded-thirtypx bg-transparent pt-1 text-center text-black"
              onClick={() => {
                dualButtonRef.current.children["1"].classList.remove(
                  "bg-transparent",
                  "text-black",
                );
                dualButtonRef.current.children["1"].classList.add(
                  "bg-aeroBlue",
                  "text-white",
                );
                dualButtonRef.current.children["0"].classList.remove(
                  "bg-aeroBlue",
                  "text-white",
                );
                dualButtonRef.current.children["0"].classList.add(
                  "bg-transparent",
                  "text-black",
                );
                setBusinessOrPersonal(false);
              }}
            >
              Business
            </label>

            <input
              type="button"
              className="relative cursor-pointer border-0 border-black bg-transparent px-[40px] py-1 text-center text-white"
            />
          </div>

          {/* NOTE: Start of personal form */}
          {businessOrPersonal ? (
            <PersonalForm />
          ) : (
            // Business Form
            <BusinessForm />
          )}
        </div>
        <button
          className="pt-5"
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>
      </div>
    </>
  );
};

export default Register;
