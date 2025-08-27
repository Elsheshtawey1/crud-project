interface IProps {
  color: string;
}

const CircleColor = ({color}: IProps) => {
  return <span className={" w-5 h-5 cursor-pointer rounded-full block"} style={{backgroundColor: color}} ></span>;
};

export default CircleColor;