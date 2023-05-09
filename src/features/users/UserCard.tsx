import React, { useCallback, useEffect, useState, useRef } from "react";

import { useSelector } from "react-redux";
import { currentUser } from "./UserCardSlice";
import { themeValue } from "../theme/themSlice";

import UserButton from "../button/UserButton";
const initialPosition = { x: 0, y: 0 };

const UserCard = () => {
  const user = useSelector(currentUser);
  const theme = useSelector(themeValue);
  const cardPosition = useRef(null);
  const [position, setPosition] = useState(initialPosition);

  let rangValue = 45;

  useEffect(() => {
    const handlePosition = (e: MouseEvent) => {
      if (window.innerWidth < 950) {
        setPosition({ x: e.clientX, y: e.clientY });
      } else {
        setPosition(initialPosition);
        rangValue = Math.floor(Math.random() * 100);
      }
    };

    window.addEventListener("mousemove", handlePosition);
    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);

  if (!user) {
    return <div className="lg:w-[22rem] w-0"></div>;
  }

  return (
    user && (
      <div
        className={`${
          theme
            ? "lg:bg-secondary/30 bg-secondary"
            : "lg:bg-primary/60 bg-primary"
        }  lg:w-[22rem] rounded-[40px] shadow-lg w-[15rem]`}
        style={
          position.x !== 0
            ? { position: "absolute", top: position.y, left: position.x }
            : {}
        }
      >
        <div className="p-8 leading-8 text-center">
          <div className="flex justify-center pb-7">
            <img
              src={user.avatar}
              alt={user.id}
              className="w-15 h-15 rounded-full"
            />
          </div>
          <div className="flex justify-center">
            <p className="text-[1.5rem] font-bold">
              {user.first_name} {user.last_name}
            </p>
            <sup>
              <div
                className={`w-2 h-2 ${
                  user.active ? "bg-green-400" : "bg-orange-300 "
                } rounded-full`}
              ></div>
            </sup>
          </div>
          <div>
            <p className={`text-[1rem] ${theme ? "" : ""}`}>{user.email}</p>
          </div>
          <div className="">
            <p className="text-[1.2rem] font-semibold">Your Plan: Standard</p>
            {/* <button
              className={`px-11 py-2 mt-3 ${
                theme ? "bg-gray-500 text-white" : "bg-indigo-500 text-white"
              }  rounded-lg whitespace-nowrap`}
            >
              Active User
            </button> */}
            <UserButton text="Active User" />
          </div>
          <div className="mt-5 mb-5">
            <p className="text-start font-semibold">Plan Uses</p>
            {/* <input
            type="range"
            className={`rang w-full ${theme ? "" : ""}`}
            defaultValue={String(rangValue)}
          /> */}
            <div className="h-2 relative max-w-xl rounded-full overflow-hidden bg-white">
              <div
                className="h-5 bg-indigo-500 absolute rounded-r-[5px]"
                style={{ width: `${rangValue}%` }}
              ></div>
            </div>
          </div>
          <div className="justify-around flex">
            <div>
              <p className="text-[2rem] font-bold">2,450</p>
              <p className="text-[#4e4e4e]">clicks reviewed</p>
            </div>
            <hr className="h-auto w-[2px] bg-white" />
            <div>
              <p className="text-[2rem] font-bold">5000</p>
              <p className="text-[#4e4e4e]">Monthly clicks</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
