import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import axios from "axios";
import { useRouter } from "next/router";

function EditProduct() {
  const [productState, setproductState] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.editProduct) {
      axios
        .get(`/api/products/editProducts/${router.query.editProduct}`)
        .then(
          ({
            data: { productName, productDescription, productPrice, image },
          }) => {
            setproductState((prev) => ({
              ...prev,
              productName,
              productDescription,
              productPrice,
              image,
            }));
          }
        );
    } else {
      return;
    }
  }, [router.query.editProduct]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/products/editProducts/${router.query.editProduct}`, {
        data: productState,
      })
      .then((e) => {
        router.push("/products");
      });
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
        title="Edit Product Details"
        productState={productState}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        handleUploadImage={handleUploadImage}
        skeletonLoading={loadingState}
        setImagesOrder={setImagesOrder}
      />
    </Layout>
  );
}

export default EditProduct;
