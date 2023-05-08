import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "./userSlice";

// Icon from React-icons Import
import { AiOutlineLock } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

import { mouseEnter, mouseLeave } from "./UserCardSlice";

const UserList = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  return (
    <div className="overflow-x-scroll lg:overflow-auto">
      <table className="text-center items-center w-4/12">
        <thead className="">
          <tr className="text-[1.3rem] text-left">
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td className="py-3 whitespace-nowrap cursor-pointer pr-10">
                  <div
                    className="flex items-center flex-shrink-0"
                    onMouseEnter={() => dispatch(mouseEnter(user))}
                    onMouseLeave={() => dispatch(mouseLeave())}
                  >
                    <div className="w-10 h-10">
                      <img
                        src={user.avatar}
                        alt=""
                        className="rounded-full h-10 w-10"
                      />
                    </div>
                    <div className="ml-2 text-start text-[15px]">
                      <div className="font-bold">
                        {user.first_name} {user.last_name}
                      </div>
                      <div className="font-normal text-black">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-left pr-10">
                  {user.active ? (
                    <>
                      <p className="text-2 font-semibold text-green-700 px-2">
                        Active
                      </p>
                    </>
                  ) : (
                    <select
                      name="status"
                      className="p-2.5 w-28 rounded-[10px] appearance-none"
                    >
                      <option value="inActive">In Active</option>
                      <option value="active">Active</option>
                    </select>
                  )}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-left pr-10">
                  {user.owner ? (
                    <p className="text-2 font-semibold text-gray-700 px-2 font-bold">
                      Owner
                    </p>
                  ) : (
                    <select name="access" className="p-2.5 w-28 rounded-[10px]">
                      <option value="">{user.role}</option>
                      <option value="">{user.role=="Manager"? "Read":"Manager"}</option>
                    </select>
                  )}
                </td>
                <td className="text-[25px] ps-3 pr-10">
                  {user.removable ? <RiDeleteBin5Line /> : <AiOutlineLock />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
