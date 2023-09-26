import { useForm } from "react-hook-form";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { IconContext } from "react-icons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalForm = () => {
  const navigate = useNavigate();
  const [seeText, setSeeText] = useState({ text: "password", bool: false });
  const [emailUsed, setEmailUsed] = useState(true);
  const [focusInput, setFocusInput] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
    clearErrors,
    getValues,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const registerUser = async (userObj) => {
    try {
      const response = await fetch(`http://localhost:6969/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            firstName: userObj.firstName,
            lastName: userObj.lastName,
            email: userObj.email,
            password: userObj.password,
          },
        }),
      });

      const result = await response.json();
      setEmailUsed(result);
      if (result.success) {
        console.log("success");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = (data) => {
    registerUser(data);
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[413px] flex-col items-center pt-4"
      >
        <div className="relative flex w-w407px flex-row items-center justify-between">
          <div className="flex flex-col">
            {/* NOTE:first name input */}

            <label
              className={`${
                focusInput.firstName
                  ? ` absolute z-20  origin-bottom -translate-y-1 scale-75 text-dimGray  transition-fontSize duration-500`
                  : ` absolute left-3 top-3 z-20 text-sm text-dimGray`
              }`}
              htmlFor="firstName"
            >
              First Name
            </label>

            <input
              type="text"
              className={
                errors.firstName
                  ? ` z-40  w-full  justify-start rounded-md border-px border-errorRed bg-dimGray/10 px-2 pb-[2px]
              pt-4 
              focus:outline-none`
                  : `z-40 mb-[15px] w-full  justify-start rounded-md border-px border-black bg-dimGray/10 px-2 pb-[2px]
              pt-4 focus:border-px
              focus:outline-none`
              }
              {...register("firstName", {
                required: " Please enter your First Name",
                onBlur: () => {
                  if (getValues("firstName") == "") {
                    setFocusInput({ ...focusInput, firstName: false });
                  }
                },
                onChange: () => {
                  clearErrors("firstName");
                },
              })}
              autoComplete="on"
              tabIndex="1"
              onFocus={() => {
                setFocusInput({ ...focusInput, firstName: true });
                console.log(focusInput);
              }}
            />

            <p className={"pb-3 text-left text-[10px] text-errorRed"}>
              {errors?.firstName?.message}{" "}
            </p>
          </div>

          {/* NOTE:last name input */}
          <div className="relative flex flex-col items-end">
            <label
              className={`${
                focusInput.lastName
                  ? ` d absolute  left-1 z-20 origin-bottom -translate-y-1 scale-75  border-errorRed text-dimGray transition-fontSize duration-500`
                  : ` absolute  left-3 top-3 z-20 text-sm text-dimGray`
              }`}
              htmlFor="lastName"
            >
              Last Name
            </label>

            <input
              type="text"
              className={
                errors.lastName
                  ? ` z-40  w-full  justify-start rounded-md border-px border-errorRed bg-dimGray/10  px-2 pb-[2px]
              pt-4 
              focus:outline-none`
                  : `z-40 mb-[15px] w-full  justify-start rounded-md border-px border-black bg-dimGray/10  px-2
              pb-[2px] pt-4 focus:border-px
              focus:outline-none`
              }
              {...register("lastName", {
                required: "Please enter your last name",
                onBlur: () => {
                  if (getValues("lastName") == "") {
                    setFocusInput({ ...focusInput, lastName: false });
                    errors.lastName;
                  }
                },
                onChange: () => {
                  clearErrors("lastName");
                },
              })}
              tabIndex="2"
              onFocus={() => {
                setFocusInput({ ...focusInput, lastName: true });
              }}
            />

            <p className={"w-full pb-3 text-left text-[10px] text-errorRed"}>
              {errors?.lastName?.message}
            </p>
          </div>
        </div>
        {/* Email input */}
        <div className="relative flex w-full flex-col items-end">
          <label
            className={`${
              focusInput.email
                ? ` absolute left-3  z-20 origin-bottom -translate-y-1 scale-75  text-dimGray transition-fontSize duration-500`
                : ` absolute left-3 top-3 z-20 text-sm text-dimGray`
            }`}
            htmlFor="email"
          >
            email
          </label>

          <input
            type="text"
            className={
              errors.email
                ? ` z-40  w-full  justify-start rounded-md border-px border-errorRed bg-dimGray/10 px-3 pb-[2px]
              pt-4 
              focus:outline-none`
                : `z-40 mb-[15px] w-full  justify-start rounded-md border-px border-black bg-dimGray/10 px-3 pb-[2px]
              pt-4 focus:border-px
              focus:outline-none`
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

        <div
          className="relative flex w-full 
      
      flex-col items-end"
        >
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

          <div className="relative w-full">
            <IconContext.Provider
              value={{
                size: "1.5em",
                className: "absolute z-60 right-4 bottom-2 text-black",
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
                  ? ` w-full  justify-start rounded-md border-px border-errorRed bg-dimGray/10 px-3 pb-[2px]
              pt-4 

              focus:outline-none`
                  : ` w-full justify-start   rounded-md border-px border-black bg-dimGray/10 px-3 pb-[2px]
              pt-4 focus:border-px
              focus:outline-none`
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

                onChange: () => {
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
          </div>

          <p className={"w-full pb-3 text-left text-[10px] text-errorRed"}>
            {errors.password?.message}
          </p>
        </div>

        <div className="mb-[15px] w-full">
          <p className="pt-3 text-xs font-semibold">Must contain:</p>

          {getValues("password").length > 7 ? (
            <div className="flex flex-row pl-5">
              <FcCheckmark />
              <p className="text-xs text-checkmarkGreen">8-20 characters</p>
            </div>
          ) : (
            <p className="pl-5 text-xs"> 8-20 characters</p>
          )}

          {/(?=.*[A-Z])/.test(getValues("password")) ? (
            <div className="flex flex-row pl-5">
              <FcCheckmark />
              <p className="text-xs text-checkmarkGreen">
                one uppercase letter
              </p>
            </div>
          ) : (
            <p className="pl-5 text-xs">one uppercase letter</p>
          )}
          {/(?=.*[a-z])/.test(getValues("password")) ? (
            <div className="flex flex-row pl-5">
              <FcCheckmark />
              <p className="text-xs text-checkmarkGreen">
                one lowercase letter
              </p>
            </div>
          ) : (
            <p className="pl-5 text-xs">one lowercase letter</p>
          )}
        </div>
        <p className="pb-3 font-sans text-xs text-dark">
          By selecting{" "}
          <span className="font-bold">Create Business account</span>, you agree
          to our User Agreement and acknowledge reading our User Privacy Notice.
        </p>
        {/* TODO:NavLink for a terms and conditon and privacy policy */}
        <input
          type="submit"
          value="Create Personal Account"
          className={`w-full rounded-full   px-5 py-3 text-white ${
            !isValid ? "cursor-not-allowed bg-dimGray/40" : "bg-aeroBlue"
          }`}
          {...register("submit")}
          disabled={!isDirty || !isValid}
          onClick={() => {
            if (!emailUsed) {
              setError("email", {
                type: "custom",
                message: "email has already been used, try another one",
              });
            }
          }}
        />
      </form>
    </>
  );
};

export default PersonalForm;
