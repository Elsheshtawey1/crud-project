import { useState } from "react";
import ProductCart from "./components/ProductCart";
import Model from "./components/Ui/Model";
import { formInputsList, productList } from "./data";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMassage from "./components/ErrorMassage";

function App() {
  // Default empty product object to reset form
  const defaultProductObj: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  // State to handle modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to handle product form data
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [error, setError] = useState({ title: "", description: "", imageURL: "", price: "" });

  // Input change handler: updates product state when typing in form
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    if(error[e.target.name as "title" | "description" | "imageURL" | "price"]){
      setError({ ...error, [e.target.name]: "" });
    } else {
      return;
    }
  };

  // Form submit handler: prevents page refresh and logs product data
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const error = productValidation({ title: product.title, description: product.description, imageURL: product.imageURL, price: product.price });

    const hasErrors = Object.values(error).some((value) => value === "") && Object.values(error).every((value) => value == "");

    if (!hasErrors) {
      console.log("Validation Errors:", error);
      setError(error);
      return; // Stop submission if there are validation errors
    } 
  };

  // Render product list (cards)
  const renderProductList = productList.map((product) => <ProductCart key={product.id} product={product} />);

  // Render form inputs from data
  const renderformInputsList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name as "title" | "description" | "imageURL" | "price"]} onChange={onChangeHandler} />
      <ErrorMassage msg={error[input.name as "title" | "description" | "imageURL" | "price"]} />
    </div>
  ));

  return (
    <main className="container mx-auto bg-blue-200">
      {/* Open modal button */}
      <button onClick={() => setIsOpen(true)} className="m-5 rounded-lg bg-blue-600 px-4 py-2 text-white">
        build now
      </button>

      {/* Modal for adding a new product */}
      <Model isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add New Product">
        <form onSubmit={submitHandler} className="space-y-3">
          {/* Dynamic form inputs */}
          {renderformInputsList}

          {/* Submit & Close buttons */}
          <div className="flex items-center justify-between space-x-3 mt-5">
            {/* Submit button: logs product data */}
            <Button type="submit" className="bg-red-700 w-full p-2 rounded-lg text-white cursor-pointer ">
              Submit
            </Button>

            {/* Close button: resets form and closes modal */}
            <Button
              type="button"
              onClick={() => {
                setProduct(defaultProductObj); // reset form
                setIsOpen(false); // close modal
              }}
              className="bg-indigo-700 w-full p-2 rounded-lg text-white cursor-pointer "
            >
              Close
            </Button>
          </div>
        </form>
      </Model>

      {/* Grid for displaying product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-5 p-5 rounded-md">{renderProductList}</div>
    </main>
  );
}

export default App;
