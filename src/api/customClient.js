export class callApi {
  static postListing = (endPoint, listing, cb) => {
    const payload = new FormData();

    payload.append("title", listing.title);
    payload.append("price", listing.price);
    payload.append("description", listing.description);
    payload.append("categoryId", listing.category.value);

    listing.imageUris.forEach((image, index) =>
      payload.append("images", {
        name: `image_${index}`,
        type: "image/jpeg",
        uri: image,
      })
    );

    if (listing.location) {
      payload.append("location", JSON.stringify(listing.location));
    }

    var data = { error: false, data: null, progress: 0 };

    const request = new XMLHttpRequest();

    request.open("POST", endPoint, true);

    request.onprogress = (e) => {
      cb(e.loaded, e.total);
      data = {
        ...data,
        progress: e.loaded / e.total,
        data: (request.responseText && JSON.parse(request.responseText)) || "",
      };
      cb(data);
    };
    request.onload = () => {
      if (request.status !== 201) {
        cb({
          ...data,
          error: "something went wrong",
          data: JSON.parse(request.responseText),
        });
      }
      cb({
        ...data,
        error: false,
        data: (request.responseText && JSON.parse(request.responseText)) || "",
      });
    };

    request.send(payload);
  };
}

// const req = new XMLHttpRequest();

// req.open("POST", "http://172.20.10.7:9000/api/listings", true);

// req.onprogress = (progress) => {
//   setProgress(progress.loaded / progress.total);
//   setUploading(true);
// };

// req.onload = () => {
//   if (req.status !== 201)
//     return (
//       <ErrorMessageScreen
//         message={req.statusText + "It could not be uploaded"}
//         onPress={() => setUploading(false)}
//       />
//     );
//   resetForm();
// };
// req.send(payload);
