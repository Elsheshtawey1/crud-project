import { useState } from "react";
import ProductCart from "./components/ProductCart";
import Model from "./components/Ui/Model";
import { formInputsList, productList } from "./data";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";
import { IProduct } from "./interfaces";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const renderProductList = productList.map((product) => <ProductCart key={product.id} product={product} />);
  const renderformInputsList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name as "title" | "description" | "imageURL" | "price"]} onChange={onChangeHandler} />
    </div>
  ));
  return (
    <main className="container mx-auto bg-blue-200">
      <button onClick={() => setIsOpen(true)} className="m-5 rounded-lg bg-blue-600 px-4 py-2 text-white">
        build now
      </button>

      <Model isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add New Product">
        <div className="space-y-3">{renderformInputsList}</div>
        <div className="flex items-center justify-between space-x-3 mt-5">
          <button className="bg-red-700 w-full p-2 rounded-lg text-white cursor-pointer ">Submit</button>
          <Button onClick={() => setIsOpen(false)} className="bg-indigo-700 w-full p-2 rounded-lg text-white cursor-pointer ">
            Close
          </Button>
        </div>
      </Model>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-5 p-5 rounded-md">{renderProductList}</div>
    </main>
  );
}

export default App;
