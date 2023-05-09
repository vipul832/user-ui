import { useSelector } from "react-redux";
import { themeValue } from "../../features/theme/themSlice";

type props = {
  text: string;
};

const UserButton = ({ text }: props) => {
  const theme = useSelector(themeValue);
  return (
    <button
      className={`px-11 py-2 mt-3 ${
        theme ? "bg-gray-500 text-white" : "bg-indigo-500 text-white"
      }  rounded-lg whitespace-nowrap`}
    >
      {text}
    </button>
  );
};

export default UserButton;
