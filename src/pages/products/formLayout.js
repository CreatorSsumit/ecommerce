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
  addProperty,
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

        {productState?.propertyList &&
          productState?.propertyList?.map((ev, index) => {
            return (
              <div className="flex gap-2 my-2">
                <input
                  type="text"
                  name="attributeKey"
                  value={ev.key}
                  onChange={(e) => handleOnChange(e, index)}
                  disabled={skeletonLoading}
                  required
                  placeholder="Enter Property Name"
                  className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
                />
                <input
                  type="text"
                  name="attributeValue"
                  value={ev.value}
                  onChange={(e) => handleOnChange(e, index)}
                  disabled={skeletonLoading}
                  required
                  placeholder="Enter Property Value"
                  className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
                />
                <button className="p-2  text-white text-sm py-2 my-2 rounded bg-black hover:bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            );
          })}

        <button
          className="p-2 px-5 bg-gray-900 rounded text-sm text-white hover:bg-gray-700 flex gap-3 items-center"
          type="button"
          onClick={addProperty}
        >
          {skeletonLoading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 h-4 ${skeletonLoading && "animate-spin"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          )}
          Add Property
        </button>

        <h6 className="text-sm text-gray-600 mt-8">Product Descriptions </h6>
        <textarea
          name="productDescription"
          disabled={skeletonLoading}
          value={productState?.productDescription}
          onChange={handleOnChange}
          required
          placeholder="Enter Product Description"
          className="bg-slate-100 my-2 px-4 py-2 w-full text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
        />
        <div>
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
        </div>
        <br />
        <h6 className="text-sm text-gray-600 my-1">Product Image</h6>
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
