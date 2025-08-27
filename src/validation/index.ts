// ** productValidation: returns error object with validation messages **
export const productValidation = (product: { title: string; description: string; imageURL: string; price: string }) => {
  // return error object (same shape as product but with error messages)
  const error: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  // Regex for valid image URL (http/https and common image extensions)
const validUrl = /^(https?:\/\/.*\.(png|jpg|jpeg|gif|bmp|webp|svg)(\?.*)?$)|(https?:\/\/images\.unsplash\.com\/.*)$/i;//*error heare


  // Title validation
  if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
    error.title = "Title must be between 10 and 80 characters";
  }

  // Description validation
  if (!product.description.trim() || product.description.length < 20 || product.description.length > 300) {
    error.description = "Description must be between 20 and 300 characters";
  }

  // Image URL validation
  if (!product.imageURL.trim() || !validUrl.test(product.imageURL)) {
    error.imageURL = "Image URL must be a valid image link (png, jpg, jpeg, gif, bmp, webp, svg)";
  }

  // Price validation
  if (!product.price.trim() || isNaN(Number(product.price)) || Number(product.price) <= 0) {
    error.price = "Price must be a positive number";
  }

  return error;
};
