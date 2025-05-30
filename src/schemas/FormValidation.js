import * as Yup from "yup";
export default {
  addListingFormValidation: Yup.object().shape({
    imageUris: Yup.array().min(1, "Please select at least 1 Image"),
    title: Yup.string().required().min(4).label("Title"),
    price: Yup.number().required().min(4).label("Price"),
    description: Yup.string().required().min(4).label("Description"),
    category: Yup.object().required().label("Category"),
  }),
  contactFormValidation: Yup.object().shape({
    message: Yup.string().required().min(4).label("message"),
  }),
};
