

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;
  onClick?: () => void;
}

const CircleColor = ({color , ...rest}: IProps) => {
  return <span className={" w-5 h-5 cursor-pointer rounded-full block"} style={{backgroundColor: color} } {...rest} ></span>;
};

export default CircleColor;