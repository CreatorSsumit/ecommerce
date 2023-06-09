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
    return new Promise((resolve, reject) => {
      axios.get("/api/categories/addCategories").then((e) => {
        setCategoriesState(e?.data?.reverse());
        resolve({ listofCategories: e?.data });
        console.log(e);
      });
    });
  };

  useEffect(() => {
    if (router.query.editProduct) {
      loadCategoriesState().then((e) => {
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
              },
            }) => {
              let attributeList =
                e.listofCategories
                  .filter((ev) => ev._id === categories)
                  ?.map((ev) => ev.attributeList) || [];

              console.log(categories, attributeList);

              setproductState((prev) => ({
                ...prev,
                productName,
                productDescription,
                productPrice,
                image,
                categories,
                propertyList:
                  (attributeList?.[0] && [...attributeList?.[0]]) || [],
              }));
            }
          );
      });
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
    } else if (name === "categories") {
      let attributeList =
        categoriesState
          .filter((e) => e?._id === value)
          ?.map((ev) => ev.attributeList) || [];

      setproductState((prev) => ({
        ...prev,
        propertyList: (attributeList?.[0] && [...attributeList?.[0]]) || [],
        [e.target.name]: e.target.value,
      }));
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
              ? [...prev?.image, e.data.url]
              : [e.data.url],
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

  const handleDeleteProductList = (index) => {
    setproductState((prev) => ({
      ...prev,
      propertyList: prev?.propertyList?.filter((e, i) => i !== index) || [],
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
        categoriesState={categoriesState}
        handleDeleteProductList={handleDeleteProductList}
      />
    </Layout>
  );
}

export default EditProduct;
