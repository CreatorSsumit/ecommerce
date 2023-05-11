import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function CategoriesEditModal({
  onCancel,
  data,
  loadCategoriesState,
  categoriesState,
}) {
  const [categoriesDetails, setcategoriesDetails] = useState(data);

  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);
    axios
      .put(`/api/categories/${data._id}`, {
        data: {
          categoriesName: categoriesDetails.categoriesName,
          parentId: categoriesDetails.parentId || null,
          attributeList: categoriesDetails.attributeList,
        },
      })
      .then((e) => {
        onCancel();
        loadCategoriesState();
        setLoadingState(false);
      });
  };

  const handleOnChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "attributeKey") {
      setcategoriesDetails((prev) => {
        prev.attributeList[index] = {
          ...prev.attributeList[index],
          key: value,
        };
        return {
          ...prev,
          attributeList: [...prev?.attributeList],
        };
      });
    } else if (name === "attributeValue") {
      setcategoriesDetails((prev) => {
        prev.attributeList[index] = {
          ...prev.attributeList[index],
          value: value,
        };
        return {
          ...prev,
          attributeList: [...prev?.attributeList],
        };
      });
    } else if (name === "parentId") {
      let { attributeList } = categoriesState.find((e) => e?._id === value);

      setcategoriesDetails((prev) => ({
        ...prev,
        attributeList,
        [e.target.name]: e.target.value,
      }));
    } else {
      setcategoriesDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const addProperty = () => {
    var obj = { key: "", value: "" };
    setLoadingState(true);
    setcategoriesDetails((prev) => ({
      ...prev,
      attributeList: [...prev?.attributeList, obj],
    }));
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  };

  const handleDeleteProductList = (index) => {
    setcategoriesDetails((prev) => ({
      ...prev,
      attributeList: prev?.attributeList?.filter((e, i) => i !== index) || [],
    }));
  };

  return (
    <>
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <form onSubmit={handleSubmit} className="w-full">
                    <h6 className="text-sm text-gray-600">
                      Edit Categories Name{" "}
                    </h6>
                    <div className="w-full flex">
                      <input
                        onChange={(e) => setcategoriesName(e.target.value)}
                        name="categoriesName"
                        value={categoriesDetails?.categoriesName}
                        disabled={loadingState}
                        required
                        placeholder="Enter Categories"
                        className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
                      />
                      <select
                        className="w-36 bg-slate-100 m-2 p-2 rounded"
                        value={categoriesDetails?.parentId?._id}
                        name={"parentId"}
                        onChange={(e) => handleOnChange(e)}
                      >
                        <option className="text-sm" value={null}>
                          Please Select
                        </option>
                        {categoriesState?.length !== 0 &&
                          categoriesState?.map(({ categoriesName, _id }) => {
                            return (
                              <>
                                <option className="text-sm" value={_id}>
                                  {categoriesName}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </div>
                    {categoriesDetails?.attributeList &&
                      categoriesDetails?.attributeList?.map((ev, index) => {
                        return (
                          <div className="flex gap-2 my-2">
                            <input
                              type="text"
                              name="attributeKey"
                              value={ev.key || ""}
                              onChange={(e) => handleOnChange(e, index)}
                              disabled={loadingState}
                              required
                              placeholder="Enter Property Name"
                              className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
                            />
                            <input
                              type="text"
                              name="attributeValue"
                              value={ev.value || ""}
                              onChange={(e) => handleOnChange(e, index)}
                              disabled={loadingState}
                              required
                              placeholder="Enter Property Value"
                              className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
                            />
                            <button
                              onClick={() => handleDeleteProductList(index)}
                              className="p-2  text-white text-sm py-2 my-2 rounded bg-black hover:bg-slate-700"
                            >
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

                    <div class=" pl-4 py-3 flex gap-3 justify-end">
                      <button
                        className="p-2 px-5 bg-gray-900 rounded text-sm text-white hover:bg-gray-700 flex gap-3 items-center"
                        type="button"
                        onClick={addProperty}
                        disabled={loadingState}
                      >
                        Add Property
                      </button>
                      <button
                        type="submit"
                        disabled={loadingState}
                        class=" w-40 justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 "
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={onCancel}
                        class="mt-3  w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesEditModal;
