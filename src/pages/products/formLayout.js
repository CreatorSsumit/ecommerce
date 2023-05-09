import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { ReactSortable } from "react-sortablejs";
// import fs from "fs";

import Image from "next/image";

function FormLayout({
  handleSubmit,
  handleOnChange,
  productState,
  title,
  handleUploadImage,
  skeletonLoading,
  setImagesOrder,
  categoriesState,
}) {
  const router = useRouter();

  const pimage = useMemo(() => productState?.image, [productState?.image]);
  console.log(productState);
  return (
    <div className="w-full p-6">
      <span className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 mr-3 bg-slate-100 rounded-full p-2"
          role="button"
          onClick={() => router.back()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        <h6 className="text-sm">{title} ~</h6>
      </span>
      <br />
      <form
        onSubmit={handleSubmit}
        className={skeletonLoading && "animate-pulse"}
      >
        <h6 className="text-sm text-gray-600">Product Name </h6>
        <div className="flex">
          <input
            onChange={handleOnChange}
            name="productName"
            value={productState?.productName}
            disabled={skeletonLoading}
            required
            placeholder="Enter Product Name"
            className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
          />
          <select
            className="w-56 bg-slate-100 m-2 p-2 rounded text-xs "
            value={productState?.categories}
            name="categories"
            onChange={(e) => handleOnChange(e)}
          >
            <option className="" value={""}>
              Please Select Categories
            </option>
            {categoriesState?.length !== 0 &&
              categoriesState?.map(({ name, _id }) => {
                return (
                  <>
                    <option className="text-sm" value={_id}>
                      {name}
                    </option>
                  </>
                );
              })}
          </select>
        </div>
        <br />
        <h6 className="text-sm text-gray-600">Product Descriptions </h6>
        <textarea
          name="productDescription"
          disabled={skeletonLoading}
          value={productState?.productDescription}
          onChange={handleOnChange}
          required
          placeholder="Enter Product Description"
          className="bg-slate-100 my-2 px-4 py-2 w-full text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
        />
        <h6 className="text-sm text-gray-600">Price (In USD)</h6>
        <input
          type="number"
          name="productPrice"
          value={productState?.productPrice}
          onChange={handleOnChange}
          disabled={skeletonLoading}
          required
          placeholder="Enter Price"
          className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
        />
        <br />
        <h6 className="text-sm text-gray-600 my-2">Product Image</h6>
        <div className="flex w-full gap-4">
          {!productState?.image?.length && (
            <h6 className="text-sm text-gray-800 w-60 font-semibold my-4">
              No image found for this product !
            </h6>
          )}

          <label className="flex items-center rounded gap-3" role="button">
            {pimage && (
              <ReactSortable
                list={pimage}
                setList={setImagesOrder}
                className="flex gap-3"
              >
                {pimage &&
                  pimage?.map((event, index) => {
                    if (!event) return null;
                    return (
                      <Image
                        key={index}
                        src={require(`../../../public/uploads/${event}`)}
                        className="rounded w-12 h-12"
                        alt={pimage}
                      />
                    );
                  })}
              </ReactSortable>
            )}
            {/* {pimage && (
              <Image
                src={require(`../../../public/uploads/${pimage}`)}
                className="rounded"
                alt={pimage}
              />
            )} */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 bg-slate-200 p-2 rounded"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleUploadImage(e)}
              disabled={skeletonLoading}
            />
          </label>
          <br />
        </div>
        <br />
        <button
          type="submit"
          disabled={skeletonLoading}
          className={`bg-black text-white p-2 rounded w-40 hover:bg-slate-800`}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default FormLayout;
