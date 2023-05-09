import UserList from "./features/users/UserList";

//icons import
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

//store reducer import
import { useSelector, useDispatch } from "react-redux";
import { themeValue, changeTheme } from "./features/theme/themSlice";
import UserCard from "./features/users/UserCard";

function App() {
  const theme = useSelector(themeValue);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        theme ? "bg-gray-500" : "bg-indigo-300"
      } container-lg border min-h-screen justify-center items-center flex py-5 relative`}
    >
      <div className=" w-[90%]  bg-[#ffff]/30 backdrop-blur-md rounded-[20px] shadow-lg">
        <button
          className="absolute  top-[8px] right-[8px] text-[1rem] rounded-full p-2 z-10 bg-[white]/30 border border-1"
          onClick={() => dispatch(changeTheme())}
        >
          {theme ? <BsSun /> : <MdDarkMode />}
        </button>
        <div className="flex lg:justify-evenly py-4 px-4 items-center w-auto h-auto">
          <UserList />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default App;
