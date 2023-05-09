import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function CategoriesEditModal({
  onCancel,
  data,
  loadCategoriesState,
  categoriesState,
}) {
  const [categoriesName, setcategoriesName] = useState(data?.name || "");
  const [loadingState, setLoadingState] = useState(false);
  const [selectedValue, setselectedValue] = useState(data?.parentId || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);
    axios
      .put(`/api/categories/${data._id}`, {
        data: { name: categoriesName, parentId: selectedValue },
      })
      .then((e) => {
        onCancel();
        loadCategoriesState();
        setLoadingState(false);
      });
  };

  const onChangeSelectedValue = (e) => {
    setselectedValue(e.target.value);
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
                        value={categoriesName}
                        disabled={loadingState}
                        required
                        placeholder="Enter Categories"
                        className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
                      />
                      <select
                        className="w-36 bg-slate-100 m-2 p-2 rounded"
                        value={selectedValue}
                        onChange={(e) => onChangeSelectedValue(e)}
                      >
                        <option className="text-sm" value={null}>
                          Please Select
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
                    <div class=" pl-4 py-3 sm:flex sm:flex-row-reverse ">
                      <button
                        type="submit"
                        disabled={loadingState}
                        class="inline-flex w-40 justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 sm:ml-3 "
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={onCancel}
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:mt-0 sm:w-auto"
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
