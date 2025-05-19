import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UsersInfo = () => {
  const { removeUser, user } = useContext(AuthContext);
  const initial = useLoaderData();
  const [users, setUsers] = useState(initial);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pet-store-server.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);

              removeUser()
                .then(() => {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                })
                .catch(() => {});
            }
          });
      }
    });
  };
  return (
    <div>
      {user ? (
        <div className="overflow-x-auto w-8/12 mx-auto mt-20 bg-[#F4F3F0] p-10 rounded">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>No.</label>
                </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.address}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="cursor-pointer bg-red-500 text-white p-[10px] rounded"
                    >
                      <MdDelete size={20} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-5xl font-semibold specific-font text-center mt-20 w-8/12 mx-auto bg-[#F4F3F0] rounded p-20">
          No User Available..! Please{" "}
          <Link to="/register" className="text-[#D2B48C] underline">
            Add User
          </Link>
        </h1>
      )}
    </div>
  );
};

export default UsersInfo;
