import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface User {
  id: number;
  name: string;
}
const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<User[]>("/users")

      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  const addUser = () => {
    const originalUser = [...users];
    const newUser = {
      id: 0,
      name: "Rezaie",
    };
    setUsers([newUser, ...users]);
    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div className="">
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
