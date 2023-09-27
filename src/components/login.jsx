/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [pwErr, setPwErr] = useState();
  const [focusInput, setFocusInput] = useState({
    email: false,
    password: false,
  });
  const [seeText, setSeeText] = useState({ text: "password", bool: false });

  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      staySignedIn: false,
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    checkUser(data);
  };

  const checkUser = async (userObj) => {
    try {
      const response = await fetch(`http://localhost:6969/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: userObj.email,
            password: userObj.password,
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        if (getValues("staySignedIn")) {
          localStorage.setItem("login", JSON.stringify(result));
          navigate("/");
        } else {
          navigate("/");
        }
      } else {
        setPwErr(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  //   TODO: add a jsonWebToken and persisten store tomorrow then do a post request and validate to log in

  return (
    <div className=" mt-10 flex flex-col items-center justify-center">
      <p className="text-left  text-fs30px font-semibold">
        Sign into your Shuk Account
      </p>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[413px] flex-col items-center pt-4"
      >
        <div className="relative flex w-full flex-col items-end">
          <label
            className={`${
              focusInput.email
                ? ` absolute left-3  z-20 origin-bottom -translate-y-1 scale-75  text-dimGray transition-fontSize duration-500`
                : ` absolute left-3 top-3 z-20 text-sm text-dimGray`
            }`}
            htmlFor="email"
          >
            Email
          </label>

          <input
            type="text"
            className={
              errors.email
                ? ` z-40  w-full  justify-start rounded-md border-px border-errorRed bg-dimGray/10 px-3 pb-[2px]
              pt-4 
              focus:outline-none`
                : `z-40 mb-[15px] w-full  justify-start rounded-md border-px border-black bg-dimGray/10 px-3
              pb-[2px] pt-4
              focus:border-px focus:outline-none`
            }
            {...register("email", {
              required: "please enter an Email",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi,
                message: "incorrect email address",
              },
              validate: {
                blacklistedEmail: (fieldValue) => {
                  return (
                    !fieldValue.includes("theshuk.com") ||
                    "Invalid email domain"
                  );
                },
              },
              onChange: () => {
                clearErrors("email");
              },
              onBlur: () => {
                if (getValues("email") == "") {
                  setFocusInput({ ...focusInput, email: false });
                  errors.email;
                }
              },
            })}
            onFocus={() => {
              setFocusInput({ ...focusInput, email: true });
            }}
          />
          <p className={"w-full pb-3 text-left text-[10px] text-errorRed"}>
            {errors.email?.message}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-end">
          <label
            className={`${
              focusInput.password
                ? ` absolute left-3  -z-20 origin-bottom -translate-y-1 scale-75  text-dimGray transition-fontSize duration-500`
                : ` absolute left-3 top-3  -z-20 text-sm text-dimGray`
            }`}
            htmlFor="password"
          >
            Password
          </label>

          <div className="relative mb-[15px] w-full ">
            <IconContext.Provider
              value={{
                size: "1.5em",
                className: "absolute z-60 right-4 top-3 text-black",
              }}
            >
              {seeText.bool ? (
                <BsFillEyeSlashFill
                  onClick={() => setSeeText({ text: "password", bool: false })}
                />
              ) : (
                <BsFillEyeFill
                  onClick={() => setSeeText({ text: "text", bool: true })}
                />
              )}
            </IconContext.Provider>

            <input
              type={seeText.text}
              className={
                errors.password
                  ? `     w-full justify-start rounded-md border-px border-errorRed bg-dimGray/10
              px-3 pb-[2px] pt-4 focus:outline-none`
                  : `    w-full justify-start rounded-md border-px border-black bg-dimGray/10 px-3 pb-[2px] pt-4
              focus:border-px focus:outline-none`
              }
              {...register("password", {
                required: "please enter a password",
                minLength: {
                  value: 8,
                  message: "must have a minimum of 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "can only have a maximum of 20 characters",
                },

                validate: {
                  wrongPW: () => {
                    return !pwErr || "wrong password";
                  },
                },
                onChange: () => {
                  setPwErr(false);
                  clearErrors("password");
                },

                onBlur: () => {
                  if (getValues("password") == "") {
                    setFocusInput({ ...focusInput, password: false });
                    errors.password;
                  }
                },
              })}
              onFocus={() => {
                setFocusInput({ ...focusInput, password: true });
              }}
              autoComplete="off"
              maxLength="20"
            />

            <p className={"w-full pb-3 text-left text-[10px] text-errorRed"}>
              {errors.password?.message}
            </p>
          </div>
        </div>

        <div className="mb-[27px] flex w-full flex-row justify-center">
          <input
            type="checkbox"
            autoComplete="off"
            className="  mb-[27px] h-4 w-5 appearance-none  justify-center self-center rounded-sm  border-px border-dimGray/80 checked:bg-black"
            {...register("staySignedIn")}
          />
          <label
            htmlFor="staySignedIn"
            className="widthWithCalcOfRadio flex flex-col pl-2 text-base"
          >
            Keep me signed in
            <span
              className="font-serif text-xs font-light
            "
            >
              By checking this box you wont have to sign in as often on this
              device. For your security, we recommend only checking this box on
              your personal devices.
            </span>
          </label>
        </div>

        <input
          type="submit"
          value="Sign in"
          className={`mb-[27px] w-full  rounded-full px-5 py-3 text-white ${
            !isValid ? "cursor-not-allowed bg-dimGray/40" : "bg-purple/70"
          }`}
          {...register("submit")}
          disabled={!isDirty || !isValid}
        />

        <input
          type="submit"
          value="Create Personal Account"
          className={`w-full rounded-full   bg-aeroBlue px-5 py-3 text-center text-white
          `}
          {...register("createAccount")}
          onClick={() => {
            navigate("/register");
          }}
        />
      </form>
    </div>
  );
};

export default Login;
