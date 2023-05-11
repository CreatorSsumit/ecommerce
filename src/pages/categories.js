import CategoriesEditModal from "@/components/CategoriesEditModal";
import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories() {
  const [categoriesDetails, setcategoriesDetails] = useState({
    attributeList: [],
  });
  const [categoriesState, setCategoriesState] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    loadCategoriesState();
  }, []);

  const loadCategoriesState = () => {
    axios.get("/api/categories/addCategories").then((e) => {
      setCategoriesState(e?.data?.reverse());
      setcategoriesDetails({ attributeList: [] });
      setLoadingState(false);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingState(true);
    const { attributeList, parentId, categoriesName } = categoriesDetails;
    axios
      .post("/api/categories/addCategories", {
        categoriesName,
        parentId: parentId ? parentId : null,
        attributeList,
      })
      .then(() => {
        loadCategoriesState();
      });
  };

  const handleDeleteProduct = (id) => {
    setLoadingState(true);
    axios.delete("/api/categories/" + id).then(() => {
      loadCategoriesState();
    });
  };

  const onCancel = () => {
    seteditModal(false);
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
    <Layout>
      <div className="w-full p-6">
        <span className="flex">
          <h6 className="text-sm">Categories ~</h6>
        </span>
        <br />
        <form onSubmit={handleSubmit}>
          <h6 className="text-sm text-gray-600">Categories Name </h6>
          <div className="block">
            <div className="w-full flex">
              {console.log(categoriesDetails)}
              <input
                onChange={(e) => handleOnChange(e)}
                name="categoriesName"
                value={categoriesDetails.categoriesName || ""}
                disabled={loadingState}
                required
                placeholder="Enter Categories"
                className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
              />
              <select
                className="w-36 bg-slate-100 m-2 p-2 rounded text-xs"
                name="parentId"
                value={categoriesDetails?.parentId || ""}
                onChange={(e) => handleOnChange(e)}
              >
                <option className="" value={""}>
                  Please Select
                </option>
                {console.log(categoriesDetails)}
                {categoriesState?.length !== 0 &&
                  categoriesState?.map(({ categoriesName, parentId, _id }) => {
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
                console.log(ev);
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
            <div className="flex gap-3">
              <button
                className="p-2 px-5 bg-gray-900 rounded text-sm text-white hover:bg-gray-700 flex gap-3 items-center"
                type="button"
                onClick={addProperty}
                disabled={loadingState}
              >
                Add Property
              </button>
              <button
                className="p-2 px-5 bg-gray-900 rounded text-sm text-white hover:bg-gray-700 flex gap-3 items-center"
                type="submit"
                disabled={loadingState}
              >
                Save
              </button>
            </div>
          </div>
        </form>
        <br />
        <h6 className="text-sm text-gray-600">Existing Categories ~</h6>
        {categoriesState?.length !== 0 ? (
          <table
            className={`${
              loadingState && "animate-pulse"
            } text-sm w-full rounded my-3 bg-slate-400`}
          >
            <thead className="rounded  overflow-hidden">
              <td className="p-4 w-full bg-slate-200">Categories Name</td>
              <td className="p-4 w-20  bg-slate-300">Parent Id</td>
              <td className="p-4  w-full  bg-slate-200">
                <span className="flex whitespace-nowrap">Parent Name</span>
              </td>
              <td className="p-4 w-full  bg-slate-200 ">Action</td>
            </thead>
            <tbody className="mt-10">
              {categoriesState?.map(
                ({ categoriesName, _id, parentId, attributeList }) => {
                  return (
                    <>
                      <tr className="bg-slate-50 my-3 ">
                        <td className="p-3">{categoriesName}</td>
                        <td className="p-3 font-thin">
                          <span className="flex">
                            {parentId?._id || "Not Available"}
                          </span>
                        </td>

                        <td className="p-3">{parentId?.categoriesName}</td>
                        <td className="p-3 flex">
                          <button
                            type="button"
                            // data-te-ripple-color="light"
                            title="Edit"
                            onClick={() => {
                              seteditModal(true);
                              setData({
                                categoriesName,
                                _id,
                                parentId,
                                attributeList,
                              });
                            }}
                          >
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              // {...props}
                            >
                              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                          </button>
                          <button
                            title="Delete"
                            // href={`/products/deleteProducts/`}
                            onClick={() => handleDeleteProduct(_id)}
                            className="mx-4"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              height="1em"
                              width="1em"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                }
              )}
            </tbody>
          </table>
        ) : (
          <h6 className="text-sm text-gray-800 my-3 font-semibold">
            No Categories Available Now
          </h6>
        )}
      </div>
      {editModal && (
        <CategoriesEditModal
          onCancel={onCancel}
          data={data}
          loadCategoriesState={loadCategoriesState}
          categoriesState={categoriesState}
        />
      )}
    </Layout>
  );
}

export default Categories;
