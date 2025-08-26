import type { ReactNode } from "react";
// interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {explain}
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  width?: "w-full"|"w-fit"
}

const Button = ({ className, children ,width="w-full",  ...rest}: IProps) => {
  return (
    <button className={`${className} ${width}  p-2 rounded-lg text-white cursor-pointer`} {...rest}>
      {children}
    </button>
  );
};

export default Button;