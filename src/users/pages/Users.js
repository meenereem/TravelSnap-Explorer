import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/327987414_559022112801946_1959069212281291711_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=nlTH0BX2wXwAX_Z6JrV&_nc_ht=scontent-lga3-2.xx&oh=00_AfDTR97-M2vqlFrYMy_HnM-X8pC66AIEwCRX9s7h0wrlWg&oe=65AC45D2",
      name: "Moon Ng",
      places: 5,
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
