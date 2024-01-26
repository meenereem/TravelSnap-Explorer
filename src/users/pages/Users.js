import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://pages.cs.wisc.edu/~dng/DAN.jpg",
      name: "Daniel Ng",
      places: 5,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
