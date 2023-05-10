import Layout from "@/components/Layout";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

function Products(props) {
  let router = useRouter();
  const [productsData, setproducts] = useState([]);

  useEffect(() => {
    callProduct();
  }, []);

  const callProduct = () => {
    axios.get("/api/products/getProduct").then(({ data }) => {
      setproducts(data?.reverse());
    });
  };

  const productDataMemo = useMemo(() => productsData, [productsData]);

  const redirectToAddPage = () => {
    router.push("/products/addProduct");
  };

  const handleDeleteProduct = (id) => {
    axios.get("/api/products/" + id).then(() => {
      callProduct();
    });
  };

  return (
    <Layout>
      <div className="w-full">
        <div className="">
          <button
            onClick={redirectToAddPage}
            className="p-1 px-3  rounded text-xs font-medium text-red-400 flex items-center gap-1"
          >
            Add New Product
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="2em"
              width="2em"
              {...props}
              color="black"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M256 176v160M336 256H176"
              />
            </svg>
          </button>
        </div>

        <table className="text-sm w-full rounded my-3">
          <thead className="bg-slate-200 rounded overflow-hidden">
            <td className="p-4 rounded-l">Product Name</td>
            <td className="p-4">Product Descriptions</td>
            <td className="p-4 ">Product Price</td>
            <td className="p-4 ">Categories</td>
            <td className="p-4 rounded-r ">Action</td>
          </thead>
          <tbody className="mt-10">
            {productDataMemo?.map((data) => (
              <>
                <tr className="bg-slate-50 my-3">
                  <td className="p-3">{data.productName}</td>
                  <td className="p-3">{data.productDescription}</td>
                  <td className="p-3">${data.productPrice}</td>
                  <td className="p-3">{data?.categories?.name}</td>
                  <td className="p-3 flex">
                    <Link
                      title="Edit"
                      href={`/products/editProducts/${data?._id}`}
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
                        {...props}
                      >
                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </Link>
                    <button
                      title="Delete"
                      href={`/products/deleteProducts/`}
                      onClick={() => handleDeleteProduct(data?._id)}
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
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Products;
