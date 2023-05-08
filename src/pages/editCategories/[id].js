import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import axios from "axios";

function EditCategories() {
  const router = useRouter();
  const [categoriesName, setcategoriesName] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    router.query.id &&
      axios.get(`/api/categories/${router.query.id}`).then((e) => {
        setcategoriesName(e?.data?.name);
      });
  }, [router.query.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/categories/${router.query.id}`, {
        data: categoriesName,
      })
      .then((e) => {
        router.push("/categories");
      });
  };

  return (
    <Layout>
      <div className="w-full  p-6">
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
          <h6 className="text-sm">Edit Categories ~</h6>
        </span>
        <br />
        <form
          onSubmit={handleSubmit}
          className={loadingState && "animate-pulse"}
        >
          <h6 className="text-sm text-gray-600">Categories Name </h6>
          <input
            onChange={(e) => setcategoriesName(e.target.value)}
            name="categoriesName"
            value={categoriesName}
            disabled={loadingState}
            required
            placeholder="Enter Categories"
            className="bg-slate-100 my-2 px-4 w-full py-2 text-sm focus:border-blue-500 rounded placeholder:text-gray-800"
          />
          <br /> <br />
          <button
            type="submit"
            disabled={loadingState}
            className={`bg-black text-white p-2 rounded w-40 hover:bg-slate-800`}
          >
            Save
          </button>
        </form>
        <br />
      </div>
    </Layout>
  );
}

export default EditCategories;
