import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=900",
      name: "Moon Ng",
      places: 5,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
