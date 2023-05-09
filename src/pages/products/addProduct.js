import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FormLayout from "./formLayout";

function addProduct() {
  const [productState, setproductState] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [categoriesState, setCategoriesState] = useState([]);

  const router = useRouter();

  useEffect(() => {
    loadCategoriesState();
  }, []);

  const loadCategoriesState = () => {
    axios.get("/api/categories/addCategories").then((e) => {
      setCategoriesState(e?.data?.reverse());
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.post("/api/products/addProduct", {
      data: {
        ...productState,
        categories: productState?.categories ? productState?.categories : null,
      },
    });
    if (res?.data) {
      router.push("/products");
    } else {
      alert(err.message);
    }
  };

  const handleOnChange = (e) => {
    setproductState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUploadImage = async (e) => {
    setLoadingState(true);
    const files = e?.target?.files;

    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }
      axios.post("/api/products/uploadFile", data).then((e) => {
        setTimeout(() => {
          setproductState((prev) => ({
            ...prev,
            image: prev?.image?.length
              ? [...prev?.image, e.data.filename]
              : [e.data.filename],
          }));
          setLoadingState(false);
        }, 1000);
      });
    }
  };

  const setImagesOrder = (image) => {
    setproductState((prev) => ({
      ...prev,
      image,
    }));
  };

  return (
    <Layout>
      <FormLayout
        title={"Enter Product Details"}
        productState={productState}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        handleUploadImage={handleUploadImage}
        skeletonLoading={loadingState}
        setImagesOrder={setImagesOrder}
        categoriesState={categoriesState}
      />
    </Layout>
  );
}

export default addProduct;
