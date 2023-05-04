import UserList from "./features/users/UserList";
// hook import
// import { useState } from "react";

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
        theme
          ? "bg-gradient-to-br from-[#000000] to-[#8B8B8B]"
          : "bg-gradient-to-br from-[#4338ca] to-[#a855f7]"
      } h-screen  overflow-hidden justify-center items-center flex`}
    >
      <button
        className="fixed  lg:top-[50px] lg:right-[100px] text-[1rem] rounded-full p-2 z-10 bg-[white]/30 text-[white]"
        onClick={() => dispatch(changeTheme())}
      >
        {theme ? <BsSun /> : <MdDarkMode />}
      </button>
      <div className="absolute top-[4%] lg:w-[90%] w-auto h-auto bg-[#ffff]/30 backdrop-blur-md rounded-[20px]">
        <div className="flex justify-evenly py-4 px-4 items-center">
          <UserList />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default App;
