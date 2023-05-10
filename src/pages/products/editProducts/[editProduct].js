import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import axios from "axios";
import { useRouter } from "next/router";

function EditProduct() {
  const [productState, setproductState] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [categoriesState, setCategoriesState] = useState([]);

  const router = useRouter();

  const loadCategoriesState = () => {
    axios.get("/api/categories/addCategories").then((e) => {
      setCategoriesState(e?.data?.reverse());
    });
  };

  useEffect(() => {
    if (router.query.editProduct) {
      loadCategoriesState();
      axios
        .get(`/api/products/editProducts/${router.query.editProduct}`)
        .then(
          ({
            data: {
              productName,
              productDescription,
              productPrice,
              image,
              categories,
              propertyList,
            },
          }) => {
            setproductState((prev) => ({
              ...prev,
              productName,
              productDescription,
              productPrice,
              image,
              categories,
              propertyList,
            }));
          }
        );
    } else {
      return;
    }
  }, [router.query.editProduct]);

  const handleOnChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "attributeKey") {
      setproductState((prev) => {
        prev.propertyList[index] = { ...prev.propertyList[index], key: value };
        return {
          ...prev,
          propertyList: [...prev?.propertyList],
        };
      });
    } else if (name === "attributeValue") {
      setproductState((prev) => {
        prev.propertyList[index] = {
          ...prev.propertyList[index],
          value: value,
        };
        return {
          ...prev,
          propertyList: [...prev?.propertyList],
        };
      });
    } else {
      setproductState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
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
        data: {
          ...productState,
          categories: productState?.categories
            ? productState?.categories
            : null,
        },
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

  const addProperty = () => {
    var obj = { key: "", value: "" };
    setLoadingState(true);
    setproductState((prev) => ({
      ...prev,
      propertyList: [...prev?.propertyList, obj],
    }));
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
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
        categoriesState={categoriesState}
        addProperty={addProperty}
      />
    </Layout>
  );
}

export default EditProduct;
