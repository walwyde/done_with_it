import apiClient from "./client";

const onUploadProgress = (progressEvent) => {
  console.log(percentCompleted);
};

export function getListings() {
  return apiClient.get("/listings");
}

export const addListing = (listing, reportProgress) => {
  const formData = new FormData();

  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("description", listing.description);
  formData.append("categoryId", listing.category.value);

  listing.imageUris.forEach((image, index) =>
    formData.append("images", {
      name: `image_${index}`,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location) {
    formData.append("location", JSON.stringify(listing.location));
  }

  return apiClient.post("/listings", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = progressEvent.loaded / progressEvent.total;
      reportProgress(percentCompleted);
    },
  });

  // callApi.postData(
  //   "http://172.20.10.7:9000/api/listings",
  //   formData,
  //   ({ error, data, progress }) => {
  //     console.log("err" + error,"data" + data, "progress" + progress);
  //     handleUpload(error, data, progress);
  //   }
  // );
};
