import Image from "../components/Image"
import Button from "./Ui/Button";
import { IProduct } from "../interfaces";
import { slicerText } from "../utils/Function";
interface IProps {
  product: IProduct;
}
function productCart({ product }: IProps) {
  const { imageURL, description, title, price } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border-2 rounded-md p-2 flex flex-col">
      <Image
        imageUrl={imageURL}
        alt="{product.name}"
        className="rounded-md "
      />
      <h3>{title} </h3>
      <p>{slicerText(description)}</p>
      <div className="flex items-center my-4 space-x-2">
        <span className="bg-indigo-500 w-5 h-5 cursor-pointer rounded-full"></span>
        <span className="bg-indigo-500 w-5 h-5 cursor-pointer rounded-full"></span>
        <span className="bg-indigo-500 w-5 h-5 cursor-pointer rounded-full"></span>
      </div>

      <div className="flex items-center justify-between ">
        <span>${price}</span>
        <Image
          imageUrl="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwzODAyMjcyfHxlbnwwfHx8fHw%3D"
          alt="{product.name}"
          className="w-10 h-10 rounded-full object-center"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button width="w-full"  className="bg-indigo-700 ">Add</Button>
        <Button width="w-full" className="bg-red-700 ">Remove</Button>
      </div>
    </div>
  );
}

export default productCart