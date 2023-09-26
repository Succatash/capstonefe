/* eslint-disable react/prop-types */
import { NavLink, useParams, useNavigate } from "react-router-dom";

export default function SingleProduct({ singleProduct }) {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className=" z pl-4 pt-7">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="cursor-default hover:underline"
        >
          The<span className="text-aeroBlue">S</span>huk/
        </span>
        <span
          className="cursor-default hover:underline"
          onClick={() => {
            navigate(`/${category}`);
          }}
        >
          {category}
        </span>
        /<span className="cursor-default hover:underline">{productId}</span>
      </div>

      <section className="h-10/12 maxMd:flex-col  mt-3  flex w-screen flex-row   ">
        <div className=" maxMd:self-center maxMd:min-w-[365px] w-6/12 px-2">
          <img
            src={singleProduct.image}
            alt=""
            className="h-9/12 maxMd:self-center w-full min-w-[285px] object-contain"
          />
        </div>

        {/* This is the right side area */}
        <div className=" min-w- maxMd:self-center  mt-3 flex w-5/12 min-w-[365px] flex-col">
          <div className="pt-4 font-extrabold">{singleProduct?.title}</div>

          {/* // container for rating and reviews and count */}
          <div className="relative flex w-9/12 flex-row pt-2 align-bottom">
            <div
              className=' bg-gold bg-clip-text text-[25px] text-transparent before:content-["★★★★★"]'
              style={{
                width: `${(singleProduct?.rating?.rate / 5) * 128.73}px`,
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#D49821",
              }}
            >
              <span
                className="px-1 text-sm text-black"
                style={{ WebkitTextStrokeColor: "black" }}
              >
                ({singleProduct?.rating?.rate})
              </span>

              {/* TODO: add a review page */}
              <div
                className=" absolute right-0 top-0 cursor-default  self-end pt-4 text-[20px] font-bold text-black hover:underline"
                style={{ WebkitTextStrokeColor: "black" }}
              >
                {singleProduct?.rating?.count} {"  "}
                <span className="  text-base font-normal">reviews</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row pt-4">
            <div className="text-2xl text-checkmarkGreen">
              ${singleProduct?.price - singleProduct?.price / 10}
            </div>

            <div className="self-end pl-4 text-lg text-black line-through">
              ${singleProduct?.price}
            </div>
          </div>

          {/* thi
          s will be my quantity button */}
          <div className="pb-6 pt-5">
            <label htmlFor="quantityList">Qty: </label>
            <select
              id="quantityList"
              className="h-8 w-9 border-px border-black"
              name="quantityList"
            >
              <option value="1" default>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <NavLink
            className="h-3/12  my-6 w-9/12 self-center rounded-full bg-aeroBlue/70 p-2 text-center text-white"
            to={"/cart"}
          >
            Add to cart
          </NavLink>

          <div className="">
            <h3 className=" pb-2 pt-5 font-bold">Product Details</h3>
            <div>{singleProduct?.description}</div>
          </div>
        </div>
      </section>
    </>
  );
}
