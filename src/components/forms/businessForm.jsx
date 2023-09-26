import { useForm } from "react-hook-form";

// import { ErrorMessage } from "@hookform/error-message";
import SelectByCountry from "./selectByCountry";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { IconContext } from "react-icons";

const BusinessForm = () => {
  const [seeText, setSeeText] = useState({ text: "password", bool: false });
  const [focusInput, setFocusInput] = useState({
    businessName: false,
    email: false,
    password: false,
    select: false,
  });

  const {
    register,
    handleSubmit,
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

  const onSubmit = (data, e) => {
    console.log(data, e);
  };
  const onError = (error, e) => {
    console.log(error, e);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex w-[413px] flex-col items-center pt-4"
    >
      <div className="relative flex w-w407px flex-row items-center justify-between">
        {/* NOTE:first name input */}
        <div className="relative flex w-full flex-col items-end">
          <label
            className={`${
              focusInput.businessName
                ? ` absolute left-3  z-20 origin-bottom -translate-y-1 scale-75  text-dimGray transition-fontSize duration-500`
                : ` absolute left-3 top-3 z-20 text-sm text-dimGray`
            }`}
            htmlFor="businessName"
          >
            Business Name
          </label>

          <input
            type="text"
            className={
              errors.businessName
                ? ` z-40  w-full  justify-start rounded-md border-px border-errorRed bg-dimGray/10 px-3 pb-[2px]
              pt-4 
              focus:outline-none`
                : `z-40 mb-[15px] w-full  justify-start rounded-md border-px border-black bg-dimGray/10 px-3 pb-[2px]
              pt-4 focus:border-px
              focus:bg-transparent focus:outline-none`
            }
            {...register("businessName", {
              required: " Please enter your First Name",
              onBlur: () => {
                if (getValues("businessName") == "") {
                  setFocusInput({ ...focusInput, businessName: false });
                }
              },
              onChange: () => {
                clearErrors("businessName");
              },
            })}
            autoComplete="on"
            tabIndex="1"
            onFocus={() => {
              setFocusInput({ ...focusInput, businessName: true });
            }}
          />
          <p className={" w-full pb-3 text-left text-[10px] text-errorRed"}>
            {errors?.businessName?.message}{" "}
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
                console.log(fieldValue);
                return (
                  !fieldValue.includes("theshuk.com") || "Invalid email domain"
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

          <p className={"w-full pb-3 text-left text-[10px] text-errorRed"}>
            {errors.password?.message}
          </p>
        </div>

        <SelectByCountry
          className="absolute top-0 ml-3 mt-2
           w-full text-sm font-light"
          labelValue="What country is your business registered in?"
          setFocusInput={setFocusInput}
        />
      </div>
      {/* <div className="w-70 mt-2 h-8">
      <IconContext.Provider
        value={{ className: "ml-8 text-aeroBlue/100" }}
      >
        <BsInfoLg />
      </IconContext.Provider>
    </div> */}

      <div className="mb-[15px] w-full">
        <p className="pt-3 text-xs font-semibold">Must contain:</p>

        {getValues("password").length > 7 &&
        getValues("password").length < 21 ? (
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
            <p className="text-xs text-checkmarkGreen">one uppercase letter</p>
          </div>
        ) : (
          <p className="pl-5 text-xs">one uppercase letter</p>
        )}
        {/(?=.*[a-z])/.test(getValues("password")) ? (
          <div className="flex flex-row pl-5">
            <FcCheckmark />
            <p className="text-xs text-checkmarkGreen">one lowercase letter</p>
          </div>
        ) : (
          <p className="pl-5 text-xs">one lowercase letter</p>
        )}
      </div>
      <p className="pb-3 font-sans text-xs text-dark">
        By selecting <span className="font-bold">Create Personal account</span>,
        you agree to our User Agreement and acknowledge reading our User Privacy
        Notice.
      </p>
      <input
        type="submit"
        value="Create Personal Account"
        className={`w-full rounded-full   px-5 py-3 text-white ${
          !isDirty || !isValid
            ? "cursor-not-allowed bg-dimGray/40"
            : "bg-aeroBlue"
        }`}
        {...register("submit")}
        disabled={!isDirty || !isValid}
      />
    </form>
  );
};

export default BusinessForm;
