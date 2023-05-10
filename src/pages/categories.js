import CategoriesEditModal from "@/components/CategoriesEditModal";
import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Categories() {
  const [categoriesName, setcategoriesName] = useState("");
  const [categoriesState, setCategoriesState] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [data, setData] = useState({});
  const [selectedValue, setselectedValue] = useState("");

  useEffect(() => {
    loadCategoriesState();
  }, []);

  const loadCategoriesState = () => {
    axios.get("/api/categories/addCategories").then((e) => {
      setCategoriesState(e?.data?.reverse());
      setLoadingState(false);
      setcategoriesName("");
      setselectedValue("");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingState(true);
    axios
      .post("/api/categories/addCategories", {
        name: categoriesName,
        parentId: selectedValue ? selectedValue : null,
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
  const onChangeSelectedValue = (e) => {
    setselectedValue(e.target.value);
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
          <div className="w-full flex justify-between">
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
                className="w-36 bg-slate-100 m-2 p-2 rounded text-xs"
                value={selectedValue}
                onChange={(e) => onChangeSelectedValue(e)}
              >
                <option className="" value={""}>
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
            <button
              type="submit"
              disabled={loadingState}
              className={`bg-black text-white  rounded w-40 hover:bg-slate-800 m-2`}
            >
              Save
            </button>
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
              {categoriesState?.map(({ name, _id, parentId }) => {
                return (
                  <>
                    <tr className="bg-slate-50 my-3 ">
                      <td className="p-3">{name}</td>
                      <td className="p-3 font-thin">
                        <span className="flex">
                          {parentId?._id || "Not Available"}
                        </span>
                      </td>

                      <td className="p-3">{parentId?.name}</td>
                      <td className="p-3 flex">
                        <button
                          type="button"
                          // data-te-ripple-color="light"
                          title="Edit"
                          onClick={() => {
                            seteditModal(true);
                            setData({ name, _id, parentId });
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
              })}
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
