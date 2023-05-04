import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "./userSlice";

import { AiOutlineLock } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

import { mouseEnter, mouseLeave } from "./UserCardSlice";

const UserList = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="lg:min-w-[40vw] table-auto text-center items-center">
        <thead>
          <tr className="text-[20px] text-left">
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="cursor-pointer">
                <td
                  className="py-3 whitespace-nowrap"
                  onMouseEnter={() => dispatch(mouseEnter(user))}
                  onMouseLeave={() => dispatch(mouseLeave())}
                >
                  <div className="flex items-center flex-shrink-0">
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
                      <div className="font-normal text-[white]">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-left">
                  {user.active ? (
                    <>
                      <p className="text-2 font-semibold text-[white] px-2">
                        Active
                      </p>
                    </>
                  ) : (
                    <select name="status" className="p-2.5 w-28 rounded-[10px]">
                      <option value="inActive">InActive</option>
                      <option value="active">Active</option>
                    </select>
                  )}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-left">
                  {user.owner ? (
                    <p className="text-2 font-semibold text-[white] px-2">
                      Owner
                    </p>
                  ) : (
                    <select name="access" className="p-2.5 w-28 rounded-[10px]">
                      <option value="">{user.role}</option>
                    </select>
                  )}
                </td>
                <td className="text-[25px]">
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
