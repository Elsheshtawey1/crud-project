interface IProps {
  msg:string
}

const ErrorMassage = ({msg}: IProps) => {
  return (
   msg? <span className="block text-red-500 text-sm font-medium">{msg}</span> : null
  );
};

export default ErrorMassage;